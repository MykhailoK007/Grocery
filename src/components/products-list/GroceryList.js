import React, { useRef } from 'react';
import { ListItem } from './ListItem';
import './styles.css';
import { removeProduct } from '../../state';
export const GroceryList = props => {
  let item = useRef();
  const removeItem = id => {
    props.dispatch(removeProduct(id));
  };
  let { state } = props;
  return (
    <div className='listWrapper'>
      {!state.productsList.length && (
        <div className='empty-list'>List is empty</div>
      )}
      {!!state.productsList.length &&
        state.productsList.map(product => {
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
