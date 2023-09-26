const { DataTypes, Model } = require("sequelize");

const { db } = require("../database/db");

const User = db.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    modelName: "user",
  }
);

module.exports = User;
