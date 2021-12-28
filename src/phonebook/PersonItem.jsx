import React, {useState} from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from "react-router-dom";
import PhoneNumberItem from "./PhoneNumberItem";

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
                            <hr style={{margin:'15px 0'}}/>
                            <h4>Адрес:</h4>
                            {
                                props.person.address === undefined
                                ?
                                 <div>
                                     нет адреса!
                                 </div>
                                 :
                                 <div>
                                     <span> Улица: {props.person.address.street.streetname}    </span>
                                     <span> Дом №{props.person.address.home}    </span>
                                     <span> Квартира №{props.person.address.apartement}   </span>
                                 </div>
                            }

                        </div>
                        <div>
                            <hr style={{margin:'15px 0'}}/>
                            <h4>Номера:</h4>
                            {
                                props.person.phoneNumberSet === undefined || props.person.phoneNumberSet.length === 0
                                ?
                                    <div>
                                        Нет номеров!
                                    </div>
                                    :
                                    <div>
                                        {props.person.phoneNumberSet.map((numba,)=>
                                            <PhoneNumberItem numb={numba.number} phont={numba.phoneType} key={numba.phoneType.id}/>
                                        )}
                                    </div>
                            }
                        </div>
                    </div>
                }
            </div>
            <div className={"person__btns"}>
                <Button onClick={onOnClick}>🔷</Button>

                <Button onClick={handleClick}> _↗_ </Button>

                <Button onClick={()=>props.remove(props.person)}>📍</Button>
            </div>
        </div>
    );
};

export default PersonItem;