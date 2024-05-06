import { dbConfig } from "../config/db";
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
  },
});

let db = {
  Sequelize,
  sequelize,
  posts: require("./post")(sequelize, DataTypes),
};


export default db;
