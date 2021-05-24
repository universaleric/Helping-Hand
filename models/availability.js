const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Availability extends Model {}

Availability.init(
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
          model: 'user',
          key: 'id',
        },
    },
    day_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'day',
          key: 'id',
        },
    },
    time_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'time',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'availability', 
  }
);

module.exports = Availability;