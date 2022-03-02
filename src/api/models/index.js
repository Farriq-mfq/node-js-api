const mongoose = require("mongoose");
const Config = require("../Config");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = Config.databaseUrl;
db.book = require("./book.model")(mongoose);
module.exports = db;
