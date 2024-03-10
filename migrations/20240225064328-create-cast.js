"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("Casts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      profile: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birth_year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Casts");
  },
};
