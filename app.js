const express = require("express");
const app = express();
const port = 3007;
const router = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// app.listen(() => {
//   console.log(`http://localhost:${port}`);
// });
