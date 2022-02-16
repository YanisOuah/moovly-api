var express = require("express");
var cors = require("cors");
const { test } = require("media-typer");
var app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded());
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
async function init() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
app.post("/register", (req, res, next) => {
  init().then(() => {
    if (req.body.email && req.body.email === "michiel@test.be") {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});
