import React, { useState } from "react";
import { CreateProduct } from "./CreateProduct";
import { addProduct } from "../../state";

export const CreateProductContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [localChanges, setLocalChanges] = useState({
    name: "",
    priority: 0,
    state: null,
  });

  const handleChange = (e) => {
    setLocalChanges({ ...localChanges, [e.target.name]: e.target.value });
  };
  const checkData = () => {
    let { name, priority, state } = localChanges;
    debugger;
    return name.length > 0 && priority > 0 && priority < 6 && state;
  };
  const handleSubmit = (e) => {
    if (checkData()) return props.dispatch(addProduct(localChanges));
    e.preventDefault();
    setErrorMessage("All fields must be filled in");
  };
  return (
    <CreateProduct
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
};
