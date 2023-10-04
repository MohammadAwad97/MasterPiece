const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoute");
const storeRouter = require("./routes/storeRoute");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRoute");
const categoryRouter = require("./routes/categoryRoute");

const app = express();

//create middleWare:
// create middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin (*), or you can specify specific origins.
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT,PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//access to the req body:
app.use(express.json());

//Morgan:
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/products", productRouter);
app.use("/api/v1/stores", storeRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/categories", categoryRouter);

module.exports = app;
