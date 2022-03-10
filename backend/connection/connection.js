//import mysql
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mysql_connect: mysql.createConnection({
    host: `${process.env.MYSQL_HOST}`,
    user: `${process.env.MYSQL_USERNAME}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
    port: `${process.env.MYSQL_PORT}`,
    multipleStatements: true,
    charset: "utf8mb4",
  }),
};
