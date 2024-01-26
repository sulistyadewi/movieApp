"use strict";

const productionhouse = require('../models/productionhouse');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn("Movies", "ProductionHouseId",{ 
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "ProductionHouses"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
        key: "id"
      }
    });
  },

  down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('Movies', "ProductionHouseId");
  },
};
