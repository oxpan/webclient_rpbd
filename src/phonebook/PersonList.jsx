import React, {useContext} from 'react';
import PersonItem from "./PersonItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {AutchContext} from "./context";

const PersonList = ({persone,title,remove}) => {
    const {isPersonList,setPersonList} = useContext(AutchContext);
    setPersonList(persone);
    // console.log(isPersonList);
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
                        timeout={50}
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