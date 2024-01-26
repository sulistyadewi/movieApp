const router = require("express").Router();
const routePH = require("./productionHouse");

router.use("/prodhouse", routePH);

module.exports = router;
