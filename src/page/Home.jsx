import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

export const Home = () => (
  <React.Fragment>
    <Table />
    <Link to="/add">
      <Button variant="success">+</Button>
    </Link>
  </React.Fragment>
);
