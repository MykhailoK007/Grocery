import React, { useReducer, useState } from 'react';
import { GroceryList } from './components/products-list/list/GroceryList';
import { Route, Switch } from 'react-router';
import { CreateProductContainer } from './components/create-product/CreateProductContainer';
import { initialState, reducer, setFilterMiddleware } from '../src/state';
import './App.css';
//TODO
// 1.To fix bugs when remove product from localList.

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <header className='header'>Grocery List</header>
      <Switch>
        <Route path='/' exact>
          <GroceryList state={state} dispatch={dispatch} />
        </Route>
        <Route path='/create'>
          <CreateProductContainer state={state} dispatch={dispatch} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
