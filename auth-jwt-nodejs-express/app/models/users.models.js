const sequelizeConfigs = require("../configs/sequelize.configs");
const Roles = require("./roles.models");

const sequelizeInstance = sequelizeConfigs.instance;
const Sequelize = sequelizeConfigs.Sequelize;

const Users = sequelizeInstance.define("users", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Roles.hasMany(Users, {
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
  foreignKey: "roleId",
});
Users.belongsTo(Roles);

Users.sync();

module.exports = Users;
