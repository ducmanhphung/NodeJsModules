const Sequelize = require("sequelize");
const dbConfigs = require("./db.configs");

const sequelizeConfigs = [
  dbConfigs.database,
  dbConfigs.user,
  dbConfigs.password,
  {
    host: dbConfigs.host,
    dialect: dbConfigs.dialect,
  },
];

const instance = new Sequelize(...sequelizeConfigs);

module.exports = {
  instance: instance,
  Sequelize: Sequelize,
};
