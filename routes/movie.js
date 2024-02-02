const router = require("express").Router();
const Controller = require("../controllers/controllerMovie");

router.get("/", Controller.findAll);

module.exports = router;
