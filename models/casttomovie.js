"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CastToMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CastToMovie.init(
    {
      castId: { type: DataTypes.INTEGER, validate: { notEmpty: true } },

      movieId: { type: DataTypes.INTEGER, validate: { notEmpty: true } },
    },
    {
      sequelize,
      modelName: "CastToMovie",
    }
  );
  return CastToMovie;
};
