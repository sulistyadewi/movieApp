const router = require("express").Router();
const Controller = require("../controllers/controllerProdHouse");

router.get("/", Controller.findAll);

module.exports = router;
