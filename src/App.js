import "./App.css";
import React, { useReducer, useState } from "react";
import { GroceryList } from "./Components/GroceryList";
import { NavLink, Route, Switch } from "react-router-dom";
import { CreateProductContainer } from "./Components/CreateProductContainer";
import { initialState, reducer } from "../src/state";
function App() {
  const [list, setList] = useState([
    { id: 1, name: "Bread", priority: 1, state: "Ran out" },
    { id: 2, name: "Button", priority: 1, state: "Have" },
  ]);
  const [sortBy, setSortBy] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div>
      <header className="header">Grocery List</header>
      <Route path="/" exact>
        <div className="createProductBtnWrapper">
          <NavLink to="/create">
            <input type="button" className="createProductBtn" value="+" />
          </NavLink>
          <GroceryList state={state} dispatch={dispatch} />
        </div>
      </Route>
      <Route path="/create" exact>
        <CreateProductContainer state={state} dispatch={dispatch} />
      </Route>
    </div>
  );
}

export default App;
