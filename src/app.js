const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
const api = require("./api");
const Middleware = require("./Middleware");
const db = require("./api/models");
const Config = require("./api/Config");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(helmet());

app.get("/", (req, res) => {
  res.json({
    message: "welcome to my api 😀😀",
  });
});
// database Connection
db.mongoose
  .connect(Config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((r) => {
    console.log(`Database connected 😁`);
  })
  .catch(() => {
    console.log(`Database unconnected 😥`);
  });

app.use("/api", api);

app.use(Middleware.Notfound);
app.use(Middleware.handleError);

module.exports = app;
