import "./App.css";
import { React, Fragment } from "react";

//components

import InputOrder from "./components/InputOrder";
import ListOrders from "./components/ListOrders";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputOrder />
        <ListOrders />
      </div>
    </Fragment>
  );
}

export default App;
