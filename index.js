const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware

app.use(cors());
app.use(express.json());

//ROUTES//
//create an order
app.post("/order", async (req, res) => {
  try {
    var randomNumber = Math.floor(Math.random() * 10);
    var randomCustomer = Math.floor(Math.random() * 50);
    const { description } = req.body;
    const { status } = req.body;
    const { customer_id } = req.body;
    const { store_id } = req.body;
    const { quote_date } = req.body;
    const { employee_id } = req.body;
    const { return_date } = req.body;
    const newOrder = await pool.query(
      `INSERT INTO orders (description,status,customer_id,store_id,quote_date,employee_id,return_date) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [
        description,
        "Pending",
        randomCustomer,
        randomNumber,
        "NOW()",
        randomNumber + randomCustomer,
        "2021-12-31",
      ]
    );
    res.json(newOrder.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
}),
  //get all orders
  app.get("/orders", async (req, res) => {
    try {
      const allOrders = await pool.query(
        `SELECT * FROM orders ORDER BY order_id`
      );
      res.json(allOrders.rows);
    } catch (error) {
      console.error(error.message);
    }
  });

//get an order
app.get("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await pool.query(`SELECT * FROM orders WHERE order_id = $1`, [
      id,
    ]);
    res.json(order.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update an order

app.put("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const orderUpdate = await pool.query(
      `UPDATE orders SET description = $1 WHERE order_id = $2`,
      [description, id]
    );
    res.json("Order was updated");
  } catch (error) {
    console.error(error.message);
  }
});

//delete an order

app.delete("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrder = await pool.query(
      `DELETE FROM orders WHERE order_id = $1`,
      [id]
    );
    res.json("Order was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
