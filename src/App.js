import './App.css';
import React,{useState} from 'react'
import {GroceryList} from "./Components/GroceryList";
import {NavLink,Route} from 'react-router-dom'
import {CreateProductContainer} from "./Components/CreateProductContainer";
function App() {
  const [list,setList] = useState([{id:1,name:'Bread',priority:1,state:'Ran out'},{id:2,name:'Button',priority:1,state:'Have'}]);
  const [sortBy, setSortBy] = useState('');
  const handleChange = (e) => {
    setSortBy(e.target.value)
  }
  return (
      <div>
        <header className='header'>Grocery List</header>

        <Route path = '/' exact>
          <div className='createProductBtnWrapper'>
            <select onChange={handleChange}>
              <option value="hPriority">High priority</option>
              <option value="lPriority">Low priority</option>
              <option value="ran out">Ran out</option>
              <option value="have">Have</option>
            </select>
            <NavLink to="/create">
              <input  type="button" className="createProductBtn" value='+'/>
            </NavLink>
          </div>

          <GroceryList productList ={list} setList={ setList} sortBy={sortBy}/>
        </Route>
        <Route path = '/create' exact>
          <CreateProductContainer addProduct ={ setList} list = {list}/>
        </Route>
      </div>
  );
}

export default App;
