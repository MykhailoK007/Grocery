import React, {useState} from 'react'
import {CreateProduct} from "./CreateProduct";



export const CreateProductContainer = (props) => {
    const [name,setName] = useState('');
    const [priority,setPriority] = useState(1);
    const [isRanOut,setRanOut] = useState('');

    const handleChange = (e) => {
        if(e.target.type == 'radio'){
            setRanOut(e.target.value)
            e.target.checked = true;
            console.log(e.target.value)
            return 0;
        }
        if(e.target.name === "name"){
            setName(e.target.value)

        }else{
            setPriority(e.target.value);
        }

    }
    const handleSubmit = () => {

        props.addProduct([...props.list,{id:props.list.length+100+'%'+priority,name,priority,state:isRanOut}])

    }
    return <CreateProduct handleChange={handleChange} handleSubmit={handleSubmit}/>
}
