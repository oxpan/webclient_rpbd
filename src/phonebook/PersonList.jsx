import React from 'react';
import PersonItem from "./PersonItem";

const PersonList = ({persone,title,remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {persone.map((person,index)=>
                <PersonItem remove={remove} number={index + 1} person={person} key={person.id}/>
            )}
        </div>
    );
};

export default PersonList;