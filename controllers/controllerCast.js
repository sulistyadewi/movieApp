const db = require("../models");
const Cast = db.Cast;
const Movie = db.Movie;
const CastToMovie = db.CastToMovie;

class Controller {
  static findAll(req, res) {
    Cast.findAll()
      .then((data) => {
        res.render("cast", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formAdd(req, res) {
    res.render("addCast");
  }
  static addData(req, res) {
    // const image = req.file.filename;
    const { profile, first_name, last_name, birth_year, phone_number, gender } =
      req.body;
    const object = {
      profile,
      first_name,
      last_name,
      birth_year,
      phone_number,
      gender,
    };
    console.log(object);
    Cast.create(object)
      .then((data) => {
        res.redirect("/cast");
        // res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static deleteData(req, res) {
    const id = req.params.id;
    Cast.destroy({ where: { id } })
      .then((data) => {
        res.redirect("/cast");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formEdit(req, res) {
    const id = +req.params.id;
    Cast.findByPk(id)
      .then((data) => {
        res.render("editCast", { data });
        // res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static saveEdit(req, res) {
    const id = +req.params.id;
    const { profile, first_name, last_name, birth_year, phone_number, gender } =
      req.body;
    const objectEdit = {
      profile,
      first_name,
      last_name,
      birth_year,
      phone_number,
      gender,
    };
    Cast.update(objectEdit, { where: { id } })
      .then((data) => {
        res.redirect("/cast");
        // res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formMovie(req, res) {
    const id = +req.params.id;
    let cast = [];
    Cast.findByPk(id, { include: [Movie] })
      .then((data) => {
        cast.push(data);
        return Movie.findAll({});
      })
      .catch((err) => {
        res.send(err);
      })
      .then((movie) => {
        cast.push(movie);
        res.render("movieAdd", { cast });
        // res.send(cast);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static addDataMovie(req, res) {
    let id = req.params.id;
    const { movieId } = req.body;
    CastToMovie.create({ movieId, castId: id })
      .then((data) => {
        res.redirect("/cast");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
