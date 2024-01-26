const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", router);

app.listen(() => {
  console.log(`http://localhost:${port}`);
});
