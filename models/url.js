'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    static associate(models) {
    }
  }
  Url.init({
    short_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    original_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      sequelize,
      modelName: "Url",
      tableName: "urls",
      timestamps: true,
    }
  );

  return Url;
};