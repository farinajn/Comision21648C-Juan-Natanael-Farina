const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;
const dbhost = process.env.DB_HOST;
const dbdialect = process.env.DB_DIALECT;

const db = new Sequelize(dbname, dbuser, dbpass, {
  host: dbhost,
  dialect: dbdialect,
});

const MODELS = ["post", "user"];

function initModels(models) {
  console.log("Initializing models...");
  MODELS.forEach((model) => {
    require(`../models/${model}.models.js`)(db);
  });
}
initModels(MODELS);

const TestConnection = async () => {
  try {
    await db.authenticate();
    await db.sync({ force: true });

    const schemas = await db.getQueryInterface().showAllSchemas();

    console.log(
      "--------------------------Tables in database--------------------------\n",
      schemas,
      "\n--------------------------Models in database--------------------------\n",
      db.models
    );

    console.log("Te conectaste correctamente a la base de datos");
  } catch (error) {
    console.error("No te pudiste conectar a la base de datos", error);
  }
};

module.exports = { db, TestConnection };
