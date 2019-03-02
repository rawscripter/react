import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="box">
             <p onClick={props.click}> Hello I am {props.name} and i'm {props.age} years old. </p>
             <p>{props.children}</p>
             <input type="text" onChange={props.nameChange} value={props.name}/>
        </div>
    );
};


export default person;