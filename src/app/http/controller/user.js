const UserModel = require("../../models/user");
const UserToken = require("../../models/UserToken");
const bcrypt = require("bcrypt");
const request = require("../validator/request");
const { encode } = require("../service/token");

const user = {};

user.store = async (req, res) => {
  const { name, phone, password } = req.body;
  const newUser = new UserModel({ name, phone, password });
  try {
    await newUser.save();
    res.status(201).json({
      success: "new user created successfully",
    });
  } catch (error) {
    request(error, res);
  }
};

user.login = async (req, res) => {
  const { password, phone } = req.body;
  try {
    const user = await UserModel.findOne({ phone });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = encode({
      phone: user.phone,
      name: user.name,
      user: user.id,
    });
    try {
      const accessToken = {
        user: user.id,
        token,
        expired: new Date().setDate(new Date().getDate() + 30),
      };
      const newToken = new UserToken(accessToken);
      await newToken.save();
      res.status(201).json({
        token,
      });
    } catch (err) {
      request(err, res);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = user;
