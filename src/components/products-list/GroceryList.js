import React, { useRef } from 'react';
import { ListItem } from './ListItem';
import { removeProduct } from '../../state';
import './styles.css';

export const GroceryList = props => {
  const removeItem = id => {
    props.dispatch(removeProduct(id));
  };
  const { state } = props;
  let list = state.localList.length ? state.localList : state.productsList;
  return (
    <div className='listWrapper'>
      {!list.length && <div className='empty-list'>List is empty</div>}
      {list.length &&
        list.map(product => {
          return (
            <ListItem
              name={product.name}
              priority={product.priority}
              key={product.id}
              id={product.id}
              removeItem={removeItem}
              state={product.state}
            />
          );
        })}
    </div>
  );
};
