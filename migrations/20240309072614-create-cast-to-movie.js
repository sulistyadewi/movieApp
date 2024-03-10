"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("CastToMovies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      castId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Casts",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Movies",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("CastToMovies");
  },
};
