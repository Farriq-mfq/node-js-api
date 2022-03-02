const Config = require("./api/Config");
const app = require("./app");

app.listen(Config.portServer, () => {
  console.log(`Server run in the ${Config.portServer} 🛵`);
});
