import React from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from "react-router-dom";

const PersonItem = (props) => {
    const router = useNavigate();
    // console.log(router);
    function handleClick(){
        router(`/aaaa/${props.person.id}`);

    }

    return (
        <div className={"person"}>
            <div className={"person_content"}>
                <strong>{props.number}. {props.person.title}</strong>
                <div>
                    {props.person.body}
                </div>
            </div>

            <div className={"person__btns"}>
                <Button onClick={handleClick}> _↗_ </Button>
                <Button onClick={()=>props.remove(props.person)}>❌</Button>
            </div>
        </div>
    );
};

export default PersonItem;