const router = require("express").Router();
const Controller = require("../controllers/controllerCast");
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, path.join(__dirname, "../uploads"));
      console.log(__dirname);
    } else {
      cb(new Error("invalid file type", null));
    }
  },
  filename: (req, file, cb) => {
    cb(null.file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
// console.log(storage);

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", Controller.findAll);
router.get("/add", Controller.formAdd);
router.post("/add", upload, Controller.addData);
router.get("/:id/delete", Controller.deleteData);
router.get("/:id/edit", Controller.formEdit);
router.post("/:id/edit", upload, Controller.saveEdit);

module.exports = router;
