const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Userskill extends Model {}

Userskill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    skills_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skills",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userskill",
  }
);

module.exports = Userskill;
