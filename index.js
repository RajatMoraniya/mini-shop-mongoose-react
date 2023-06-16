const express = require("express");
require('dotenv').config()
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const productsRoutes = require("./routes/product");
const usersRoutes = require("./routes/user");
const cartsRoutes = require("./routes/carts");

//db connection
const mongoose = require("mongoose");

(async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("database connetcted successful");
  } catch (err) {
    console.log(err);
  }
})();

const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.json());
server.use("/products", productsRoutes.routes);
server.use("/carts", cartsRoutes.routes);
server.use("/users", usersRoutes.routes);
server.use("/*",(req,res)=>{
  res.sendFile(path.resolve(__dirname ,process.env.PUBLIC_DIR,"./index.html"))
})

server.listen(process.env.PORT, () => {
  console.log("server started");
});
