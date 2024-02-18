const linksAccess = require("../routers/api/api.links.access");
const paths = require("../routers/api/api.links.access");

exports.usersResponse = (user) => {
  return {
    ...user.dataValues,
    links: {
      self: `${paths.api.v1.users.path}/${user.id}`,
    },
  };
};

exports.listUsersResponse = (users) => {
  return {
    list: [...users.map((element) => this.usersResponse(element))],
    links: {
      self: `${paths.api.v1.users.path}`,
    },
  };
};

exports.rolesResponse = (role) => {
  return {
    ...role.dataValues,
    links: {
      self: `${paths.api.v1.roles.path}/${role.id}`,
    },
  };
};

exports.listRolesResponse = (roles) => {
  return {
    list: [...roles.map((element) => this.rolesResponse(element))],
    links: {
      self: `${paths.api.v1.roles.path}`,
    },
  };
};
