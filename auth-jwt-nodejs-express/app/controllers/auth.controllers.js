const authConfigs = require("../configs/auth.configs");
const Users = require("../models/users.models");
const Roles = require("../models/roles.models");
const { comparePassword } = require("../utils/bcrypt.encode.decode");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  const email = req?.body?.email;
  const password = req?.body?.password.toString();
  if (!email || !password) {
    res.status(400).json({ message: "request body not valid!" });
  }
  Users.findOne({ where: { email: email } })
    .then((user) => {
      const passwordIsValid = comparePassword(password, user.password);
      if (passwordIsValid) {
        // tài khoản mật khẩu chính xác
        const token = jwt.sign(
          { id: user.id },
          authConfigs.secret,
          authConfigs.options
        );
        // get role
        Roles.findByPk(user.roleId)
          .then((role) => {
            res.status(200).json({
              id: user.id,
              username: user.username,
              email: user.email,
              role: role.role,
              accessToken: token,
            });
          })
          .catch((error) => {
            res.status(500).json({ message: "role not found!" });
          });
      } else {
        throw new Error("Thông tin tài khoản hoặc mật khẩu không chính xác!");
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: "Thông tin tài khoản hoặc mật khẩu không chính xác!",
      });
    });
};
