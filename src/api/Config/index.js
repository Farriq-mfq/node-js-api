require("dotenv").config();
const Config = {
  databaseUrl: process.env.databseurl,
  portServer: process.env.port,
};
module.exports = Config;
