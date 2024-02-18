const jwt = require("jsonwebtoken");
const authConfigs = require("../configs/auth.configs");
const Users = require("../models/users.models");
const Roles = require("../models/roles.models");

exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(
    token,
    authConfigs.secret,
    authConfigs.options,
    (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.userId = decoded.id;
      next();
    }
  );
};

exports.isAdmin = (req, res, next) => {
  const userId = req?.userId;
  // có lỗi thì là lỗi người lập trình
  Users.findByPk(userId).then((user) => {
    const roleId = user.roleId;
    Roles.findByPk(roleId).then((role) => {
      const _role = role.role;
      if (_role == "admin") {
        next();
        return;
      }
      return res.status(403).json({ message: "Require admin role!" });
    });
  });
};
