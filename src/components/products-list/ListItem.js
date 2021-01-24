import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export const ListItem = props => {
  return (
    <div className='listItem'>
      <div className='BtnWrapper'>
        <NavLink to='/'>
          <input
            type='button'
            value='X'
            className='removeBtn'
            onClick={() => props.removeItem(props.id)}
          />
        </NavLink>
      </div>
      <div className='listItem_header'>{props.name}</div>
      <div>State: {props.state}</div>
      <span className='listItem_priority'>
        Priority:
        {props.priority}
      </span>
    </div>
  );
};
