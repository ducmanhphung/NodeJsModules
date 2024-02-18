const Roles = require("../models/roles.models");
const {
  rolesResponse,
  listRolesResponse,
} = require("../utils/api.links.access.utils");

exports.create = (req, res, next) => {
  const role = req.body.role;

  if (!role) {
    res.status(400).json({ message: "request body not valid!" });
  }
  roles
    .create({
      role,
    })
    .then((_role) => {
      const resObj = {
        status: "created",
        data: {
          roles: rolesResponse(_role),
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
      Roles.findByPk(id)
        .then((_role) => {
          const resObj = {
            status: "accessed",
            data: {
              roles: rolesResponse(_role),
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
    res.status(400).json({ message: "id not defind!" });
  }
};

exports.getAll = (req, res, next) => {
  try {
    Roles.findAll()
      .then((_roles) => {
        const resObj = {
          status: "accessed",
          data: {
            roles: listRolesResponse(_roles),
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
};
