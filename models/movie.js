"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse, {
        foreignKey: "ProductionHouseId",
        targetKey: "id",
      });
      Movie.belongsToMany(models.Cast, {
        through: models.CastToMovie,
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      release_year: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: false,
          isLeapYear(year) {
            if (year % 4 === 0) {
              throw (new Error(), console.log("This is leap year"));
            }
          },
        },
      },
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
