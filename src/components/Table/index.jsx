import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import { Filter } from "../Filter/inedx";
import { THead } from "./THead";
import TBody from "./TBody";
import { connect } from "react-redux";

const Table = ({ filtered }) => {
  return (
    <div className="container">
      <Filter
        items={[
          {
            name: "Доход",
            type: "income",
          },
          {
            name: "Расход",
            type: "expense",
          },
          {
            name: "За последний месяц",
            type: "lastMonth",
          },
          {
            name: "Больше 1000 рублей",
            type: "overThousand",
          },
        ]}
      />
      <BootstrapTable striped bordered>
        <THead item={["#", "Value", "Type", "Date"]} />
        <TBody items={filtered} />
      </BootstrapTable>
    </div>
  );
};

const getFilters = (item) => ({
  income: () => item.type === "income",
  expense: () => item.type === "expense",
  lastMonth: () => item.date >= new Date().setDate(1), 
  overThousand: () => item.value >= 1000,
});

const mapStateToProps = (state) => {
  return {
    filtered: state.fetchData.data.filter((item) => {
      const filters = getFilters(item);
      for (const filter of state.filtered.filteredType) {
        const result = filters[filter]();
        if (!result) {
          return false;
        }
      }
      return true;
    }),
  };
};

export default connect(mapStateToProps)(Table);
