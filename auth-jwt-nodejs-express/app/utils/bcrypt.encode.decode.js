const bcrypt = require("bcrypt");

exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, 8);
};

exports.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
