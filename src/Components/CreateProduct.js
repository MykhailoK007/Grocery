import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const CreateProduct = (props) => {
  return (
    <form action="" className="form_container">
      <h1>Create Product</h1>
      <div>{props.errorMessage}</div>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={props.name}
          name="name"
          onChange={props.handleChange}
        />
      </div>
      <div className="form_priority">
        <span>Priority</span>
        <input
          type="number"
          value={props.priority}
          min="1"
          max="5"
          name="priority"
          onChange={props.handleChange}
        />
      </div>
      <div className="form_state">
        <input
          type="radio"
          name="state"
          id="have"
          value="Have"
          onChange={props.handleChange}
        />
        <label htmlFor="have">Have </label>
        <input
          type="radio"
          name="state"
          id="ranOut"
          value="Ran out"
          onChange={props.handleChange}
        />
        <label htmlFor="ranOut">Ran out </label>
      </div>
      <NavLink to="/">
        <div className="form_buttonWrapper">
          <input type="submit" value="Create" onClick={props.handleSubmit} />
          <input type="button" value="Cancel" />
        </div>
      </NavLink>
    </form>
  );
};
