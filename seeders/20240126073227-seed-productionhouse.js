"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let productionHouses = JSON.parse(
      fs.readFileSync("./data/productionHouse.json", "utf-8")
    );

    productionHouses = productionHouses.map((elem) => {
      elem.createdAt = new Date();
      elem.updatedAt = new Date();

      return elem;
    });

    return queryInterface.bulkInsert("ProductionHouses", productionHouses, {});
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("ProductionHouses", null, {});
  },
};
