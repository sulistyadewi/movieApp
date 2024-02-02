const router = require("express").Router();
const routePH = require("./productionHouse");
const routeMovie = require("./movie");

router.use("/prodhouse", routePH);
router.use("/movie", routeMovie);

module.exports = router;
