import React from 'react';

const PhoneNumberItem = (props) => {

    return (
        <li className={"phone"}>
            {
                props.phont.id === 1
                ?
                    <span>мобильный - </span>
                    : props.phont.id === 2
                    ?
                        <span>рабочий - </span>
                        : props.phont.id === 3
                        ?
                            <span>домашний - </span>
                            :
                                <span>мусорный - </span>
            }
            <span>{props.numb}</span>
        </li>
    );
};

export default PhoneNumberItem;