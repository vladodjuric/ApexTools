const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware

app.use(cors());
app.use(express.json());

//ROUTES//

//create an order

//get all orders

//get an order

//update an order

//update an order

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
