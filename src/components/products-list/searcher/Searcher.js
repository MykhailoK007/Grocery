import React from 'react';
import './styles.css';

export const Searcher = props => {
  const searchOptionsDate = [
    { id: 0, value: 'Default' },
    { id: 1, value: 'Ran out' },
    { id: 2, value: 'Have' },
    { id: 3, value: 'Low' },
    { id: 4, value: 'Height priority' },
  ];
  return (
    <div className='search-wrapper'>
      <span>Sort by: </span>
      <select onChange={props.filterList} className='searcher'>
        {searchOptionsDate.map(el => {
          return (
            <option value={el.id} className='searcher-options' key={el.id}>
              {el.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
