const db = require("../models");
const ProdHouse = db.ProductionHouse;
// console.log(ProdHouse);

class Controller {
  static findAll(req, res) {
    console.log("tes");
    ProdHouse.findAll()
      .then((data) => {
        res.render("prodHouse", { data });
        console.log(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
