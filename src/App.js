import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/actions";
import axios from "axios";
import Table from "./components/Table";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("./db.json").then((res) => dispatch(fetchData(res.data)));
  });

  return (
    <div className="App">
      <Table />
    </div>
  );
};

export default App;
