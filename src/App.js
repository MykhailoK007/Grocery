import React, { useReducer, useState } from "react";
import { GroceryList } from "./components/products-list/GroceryList";
import { NavLink, Route } from "react-router-dom";
import { CreateProductContainer } from "./components/create-product/CreateProductContainer";
import { initialState, reducer } from "../src/state";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <header className="header">Grocery List</header>
      <Route path="/" exact>
        <div className="createProductBtnWrapper">
          <NavLink to="/create">
            <input type="button" className="createProductBtn" value="+" />
          </NavLink>
        </div>
        <GroceryList state={state} dispatch={dispatch} />
      </Route>
      <Route path="/create" exact>
        <CreateProductContainer state={state} dispatch={dispatch} />
      </Route>
    </div>
  );
}

export default App;
