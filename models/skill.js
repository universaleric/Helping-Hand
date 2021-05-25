const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Skill extends Model {}

Skill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    skills_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skills",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "skill",
  }
);

module.exports = Skill;
