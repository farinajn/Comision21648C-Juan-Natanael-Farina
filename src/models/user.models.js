const { DataTypes, Model } = require("sequelize");

module.exports = (db) => {
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

  return User;
};
