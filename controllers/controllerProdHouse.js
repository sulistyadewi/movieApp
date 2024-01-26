const db = require("../models");
const ProdHouse = db.ProductionHouse;
// console.log(ProdHouse);

class Controller {
  static findAll(req, res) {
    console.log("tes");
    ProdHouse.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
