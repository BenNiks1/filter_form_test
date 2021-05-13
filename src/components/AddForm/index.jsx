import React from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

export const AddForm = () => {
  const [date, setDate] = React.useState(new Date());
  const [type, setType] = React.useState("income");
  const [amount, setAmount] = React.useState("");
  
  console.log(type, amount);

  const onAdd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/data", {
      value: amount,
      type: type,
      date: date.getTime(),
    });
  };

  return (
    <Form className="add-form">
      <input
        type="text"
        value={amount}
        placeholder='Введите сумму'
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <select
        name="type"
        id="type"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <Button variant="success" onClick={onAdd}>
        add
      </Button>
    </Form>
  );
};
