import React from 'react';
import { ListItem } from './ListItem';
import { removeProduct, setFilterMiddleware } from '../../../state';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { Searcher } from '../searcher/Searcher';

export const GroceryList = props => {
  const { state } = props;
  let list = state.localList.length ? state.localList : state.productsList;
  const filterList = e => {
    props.dispatch(setFilterMiddleware(e.target.value));
  };
  const removeItem = id => {
    props.dispatch(removeProduct(id));
  };
  return (
    <div>
      {list.length > 1 && <Searcher filterList={filterList} />}
      <div className='createProductBtnWrapper'>
        <NavLink to='/create'>
          <input type='button' className='createProductBtn' value='+' />
        </NavLink>
      </div>
      <div className='listWrapper'>
        {!list.length && <div className='empty-list'>List is empty</div>}
        {!!list.length &&
          list.map(product => {
            return (
              <ListItem
                name={product.name}
                priority={product.priority}
                key={product.id}
                id={product.id}
                removeItem={removeItem}
                state={product.state}
                created={product.created}
              />
            );
          })}
      </div>
    </div>
  );
};
