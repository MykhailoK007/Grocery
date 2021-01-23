import React from "react";
import { ListItem } from "./ListItem";
import "./styles.css";
export const GroceryList = (props) => {
  const removeItem = (id) => {
    props.setList(props.productList.filter((product) => product.id != id));
    console.log(props.productList);
  };
  let { state } = props;
  return (
    <div className="listWrapper">
      {!state.productsList.length && (
        <div className="empty-list">List is empty</div>
      )}
      {!!state.productsList.length &&
        state.productsList.map((product) => {
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
