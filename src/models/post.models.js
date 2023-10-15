const { DataTypes, Model } = require("sequelize");

const { db } = require("../database/db");

const Post = db.define(
  "post",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING(2000), allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    image: { type: DataTypes.STRING(2000), allowNull: false },
  },
  {
    timestamps: true,
    modelName: "post",
  }
);

module.exports = Post;
