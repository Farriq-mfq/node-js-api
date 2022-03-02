const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    message: "😏😏😏😏",
  });
});

require("./Routes/book.routes")(Router);

module.exports = Router;
