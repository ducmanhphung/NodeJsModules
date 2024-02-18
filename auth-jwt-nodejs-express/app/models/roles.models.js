const sequelizeConfigs = require("../configs/sequelize.configs");

const sequelizeInstance = sequelizeConfigs.instance;
const Sequelize = sequelizeConfigs.Sequelize;

const roles = sequelizeInstance.define("roles", {
  role: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

roles.sync();

console.log("ROLE ININT");

module.exports = roles;
