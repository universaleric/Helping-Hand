const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Time extends Model {}

Time.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    times: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "time",
  }
);

module.exports = Time;
