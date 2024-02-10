const router = require("express").Router();
const routePH = require("./productionHouse");
const routeMovie = require("./movie");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/prodhouse", routePH);
router.use("/movie", routeMovie);

module.exports = router;
