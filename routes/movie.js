const router = require("express").Router();
const Controller = require("../controllers/controllerMovie");

router.get("/", Controller.findAll);
router.get("/add", Controller.formAdd);
router.post("/add", Controller.addData);
router.get("/:id/delete", Controller.deleteData);
router.get("/:id/edit", Controller.formEdit);
router.post("/:id/edit", Controller.saveEdit);

module.exports = router;
