const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config({
  path: "./config.env",
});

const DB = process.env.DATA_BASE.replace("<password>", process.env.PASSWORD);
mongoose.connect(DB).then(() => console.log("Connect to db"));

const app = require("./app");

const port = 3000;

//Create Server:
app.listen(port, () => {
  console.log(`Server is listening for requests on ${port}`);
});
