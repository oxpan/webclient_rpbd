import React from 'react';
import PersonItem from "./PersonItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PersonList = ({persone,title,remove}) => {
    if (!persone.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Персон не существует!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {persone.map((person,index)=>
                    <CSSTransition
                        key={person.id}
                        timeout={500}
                        className={"person"}
                        >
                    <PersonItem remove={remove} number={index + 1} person={person}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PersonList;