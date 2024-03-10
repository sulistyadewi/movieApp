const router = require("express").Router();
const routePH = require("./productionHouse");
const routeMovie = require("./movie");
const routeCast = require("./cast");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/prodhouse", routePH);
router.use("/movie", routeMovie);
router.use("/cast", routeCast);

module.exports = router;
