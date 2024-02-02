const db = require("../models");
const Movie = db.Movie;
const ProductionHouse = db.ProductionHouse;

class Controller {
  static findAll(req, res) {
    Movie.findAll({ include: [ProductionHouse] })
      .then((data) => {
        res.render("movies", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
