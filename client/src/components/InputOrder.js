import React, { Fragment, useState } from "react";

const InputOrder = () => {
  const [
    description,
    setDescription,
    status,
    customer_id,
    store_id,
    quote_date,
    employee_id,
    return_date,
  ] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        description,
        status,
        customer_id,
        store_id,
        quote_date,
        employee_id,
        return_date,
      };
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Apex Tools</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputOrder;
