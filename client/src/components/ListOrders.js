import React, { Fragment, useEffect, useState } from "react";
import EditOrder from "./EditOrder";

const ListOrders = () => {
  const [orders, setOrders] = useState([]);

  const deleteOrder = async (id) => {
    try {
      await fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      });

      setOrders(orders.filter((order) => order.order_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      const jsonData = await response.json();

      setOrders(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Fragment>
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Order Description</th>
            <th>Status</th>
            <th>Quote Date</th>
            <th>Return Date</th>
            <th>Store Id</th>
            <th>Employee Id</th>
            <th>Customer Id</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.description}</td>
              <td>{order.status}</td>
              <td>{order.quote_date}</td>
              <td>{order.return_date}</td>
              <td>{order.store_id}</td>
              <td>{order.employee_id}</td>
              <td>{order.customer_id}</td>
              <td>
                <EditOrder order={order} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteOrder(order.order_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListOrders;
