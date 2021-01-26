import React, { useReducer, useState } from 'react';
import { GroceryList } from './components/products-list/GroceryList';
import { NavLink, Route } from 'react-router-dom';
import { CreateProductContainer } from './components/create-product/CreateProductContainer';
import { initialState, reducer, setFilterMiddleware } from '../src/state';
import './App.css';
import { Searcher } from './components/products-list/Searcher';
//TODO
// 1.Add styles for search field.
// 2.Add date of adding product to list.
// 3.To fix bugs when remove product from localList.

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const filterList = e => {
    dispatch(setFilterMiddleware(e.target.value));
  };
  return (
    <div>
      <header className='header'>Grocery List</header>
      <Route path='/' exact>
        <Searcher filterList={filterList} />
        <div className='createProductBtnWrapper'>
          <NavLink to='/create'>
            <input type='button' className='createProductBtn' value='+' />
          </NavLink>
        </div>
        <GroceryList state={state} dispatch={dispatch} />
      </Route>
      <Route path='/create' exact>
        <CreateProductContainer state={state} dispatch={dispatch} />
      </Route>
    </div>
  );
}

export default App;
