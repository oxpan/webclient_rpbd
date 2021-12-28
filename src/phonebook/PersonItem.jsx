import React, {useState} from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from "react-router-dom";

const PersonItem = (props) => {
    const router = useNavigate();
    const [isShow,setShow] = useState(false);

    function handleClick(){
        router(`/link/${props.person.id}`);
    }

    function onOnClick(){
        if (isShow)
            setShow(false);
        else
            setShow(true);
    }

    return (
        <div className={"person"}>
            <div className={"person_content"}>
                <strong>{props.number}. {props.person.lastname} {props.person.firstname} {props.person.fathername}</strong>
                {
                    isShow &&
                    <div>
                        <div>
                            Улица {props.person.street}
                        </div>
                        <div>
                            Дом №{props.person.home}
                        </div>
                        <div>
                            Квартира №{props.person.apartment}
                        </div>
                    </div>
                }
            </div>

            <div className={"person__btns"}>
                <Button onClick={onOnClick}>🔷</Button>

                <Button onClick={handleClick}> _↗_ </Button>

                <Button onClick={()=>props.remove(props.person)}>❌</Button>
            </div>
        </div>
    );
};

export default PersonItem;