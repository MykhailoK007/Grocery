import React from 'react';

export const Searcher = props => {
  return (
    <>
      <select onChange={props.filterList}>
        <option value='0'>Default</option>
        <option value='1'>Ran out</option>
        <option value='2'>Have</option>
        <option value='3'>Low priority</option>
        <option value='4'>Height priority</option>
      </select>
    </>
  );
};
