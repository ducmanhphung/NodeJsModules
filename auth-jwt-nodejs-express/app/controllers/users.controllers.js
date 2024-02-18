const Users = require("../models/users.models");
const {
  usersResponse,
  listUsersResponse,
} = require("../utils/api.links.access.utils");

const { hashPassword } = require("../utils/bcrypt.encode.decode");

exports.create = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password.toString();
  const roleId = req.body.roleId;

  if (!username || !email || !password || !roleId) {
    res.status(400).json({ message: "request body not valid!" });
  }
  Users.create({
    username,
    email,
    password: hashPassword(password),
    roleId,
  })
    .then((_user) => {
      const resObj = {
        status: "created",
        data: {
          users: usersResponse(_user),
        },
      };
      res.status(201).json(resObj);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.getById = (req, res, next) => {
  const id = req?.params?.id;
  if (id) {
    // get by id
    try {
      Users.findByPk(id)
        .then((_user) => {
          const resObj = {
            status: "accessed",
            data: {
              users: usersResponse(_user),
            },
          };
          res.status(200).json(resObj);
        })
        .catch((error) => {
          res.status(404).json(error);
        });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(400).json({ message: "users id not defind!" });
  }
};

exports.getAll = (req, res) => {
  Users.findAll()
    .then((_users) => {
      const resObj = {
        status: "accessed",
        data: {
          users: listUsersResponse(_users),
        },
      };
      return res.status(200).json(resObj);
    })
    .catch((error) => {
      return res.status(404).json(error);
    });
};
