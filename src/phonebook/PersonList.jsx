import React from 'react';
import PersonItem from "./PersonItem";

const PersonList = ({persone,title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {persone.map((person)=>
                <PersonItem person={person} key={person.id}/>
            )}
        </div>
    );
};

export default PersonList;