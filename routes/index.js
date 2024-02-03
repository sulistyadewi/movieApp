const router = require("express").Router();
const routePH = require("./productionHouse");
const routeMovie = require("./movie");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.use("/prodhouse", routePH);
router.use("/movie", routeMovie);

module.exports = router;
