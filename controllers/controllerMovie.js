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
    let movie = [];
    Movie.findAll()
      .then((data) => {
        movie.push(data);
        return ProductionHouse.findAll();
      })
      .catch((err) => {
        res.send(err);
      })
      .then((prodHouse) => {
        movie.push(prodHouse);
        res.render("addMovie", { movie });
        // res.send(movie);
      })
      .catch((err) => [res.send(err)]);
    // res.render("addMovie");
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
    let movie = [];
    Movie.findByPk(id)
      .then((data) => {
        // res.render("editMovie", { data });
        movie.push(data);
        return ProductionHouse.findAll();
        // res.send(data);
      })
      .catch((err) => {
        res.send(err);
      })
      .then((prodHouse) => {
        movie.push(prodHouse);
        // res.render("editMovie", { movie });
        res.send(movie);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static saveEdit(req, res) {
    const id = req.params.id;
    const { name, release_year, genre } = req.body;
    const objectEdit = { id, name, release_year, genre };
    Movie.update(objectEdit, { where: { id } })
      .then((data) => {
        // res.redirect("/movie");
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
