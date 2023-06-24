const jwt = require("jsonwebtoken");
const { environment } = require("../../../config");
const serverEnv = environment();

const token = {};
token.encode = (payload) => {
  if (payload && typeof payload === "object") {
    return jwt.sign(payload, serverEnv.app_key);
  }
  return false;
};

token.decode = (jwtToken) => {
  try {
    const decoded = jwt.verify(jwtToken, serverEnv.app_key);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = token;
