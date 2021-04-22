import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import { THead } from "./THead";

export const Table = () => {
  return (
    <div className="container">
      <BootstrapTable striped borderedv>
        <THead item={["#", "Value", "Type", "Date"]} />
        
      </BootstrapTable>
    </div>
  );
};
