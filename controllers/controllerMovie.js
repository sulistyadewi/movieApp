const db = require("../models");
const Movie = db.Movie;
const ProductionHouse = db.ProductionHouse;

class Controller {
  static findAll(req, res) {
    Movie.findAll({ include: [ProductionHouse] })
      .then((data) => {
        res.render("movie", { data });
        // res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formAdd(req, res) {
    res.render("addMovie");
  }
  static addData(req, res) {
    const { name, release_year, genre } = req.body;
    const object = { name, release_year, genre };
    Movie.create(object)
      .then((data) => {
        res.redirect("/movie");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static deleteData(req, res) {
    const id = req.params.id;
    Movie.destroy({ where: { id } })
      .then((data) => {
        res.redirect("/movie");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formEdit(req, res) {
    const id = req.params.id;
    Movie.findByPk(id)
      .then((data) => {
        res.render("editMovie", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
