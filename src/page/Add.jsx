import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";

export const Add = () => {
  const [date, setDate] = React.useState(new Date());
  const [type, setType] = React.useState("income");
  const [amount, setAmount] = React.useState("");

  console.log(type, amount);

  const onAdd = () => {
    axios.post("http://localhost:3001/data", {
      value: amount,
      type: type,
      date: date.getTime(),
    });
  };

  return (
    <div className="add">
      <Form className="add-form">
        <input
          type="text"
          value={amount}
          placeholder="Введите сумму"
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
        <Link to="/">
          <Button variant="danger">back</Button>
          <Button variant="success" onClick={onAdd}>
            add
          </Button>
        </Link>
      </Form>
    </div>
  );
};
