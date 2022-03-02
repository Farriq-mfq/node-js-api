module.exports = (app) => {
  const BookController = require("../Controllers/book.controller");
  const Router = require("express").Router();
  Router.get("/", BookController.ReadBook);
  Router.get("/:id", BookController.ReadByid);
  Router.post("/", BookController.CreateBook);
  Router.put("/:id", BookController.UpdateBook);
  Router.delete("/:id", BookController.DeleteBook);
  app.use("/book", Router);
};
