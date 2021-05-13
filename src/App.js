import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/actions";
import { Route } from "react-router-dom";
import axios from "axios";
import { Add } from "./page/Add";
import { Home } from "./page/Home";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("./db.json").then((res) => dispatch(fetchData(res.data.data)));
  });

  return (
    <React.Fragment>
      <Route path="/" component={Home} exact />
      <Route path="/add" component={Add} />
    </React.Fragment>
  );
};

export default App;
