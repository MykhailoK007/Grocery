import React from "react";
import {NavLink} from 'react-router-dom';

export const ListItem = (props) => {

    return <div className='listItem'>
            <div className="BtnWrapper">
                <NavLink to='/'>
                    <input type="button" value="X" className="removeBtn" onClick={()=>props.removeItem(props.id)}/>
                    <div>
                        {props.state}
                    </div>
                </NavLink>
            </div>
            <span className="listItem_priority">
                Priority:
            {props.priority}
            </span>
            <h4 className="listItem_header">
                {props.name}
            </h4>


        </div>

}
