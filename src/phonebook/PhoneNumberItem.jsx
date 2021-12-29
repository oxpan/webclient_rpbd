import React from 'react';

const PhoneNumberItem = (props) => {
    console.log(props.phont.id);
    return (
        <li className={"phone"}>
            {
                Number(props.phont.id) === 1
                    ?
                    <span>мобильный - </span>
                    : Number(props.phont.id) === 2
                        ?
                        <span>рабочий - </span>
                        : Number(props.phont.id) === 3
                            ?
                            <span>домашний - </span>
                            :
                            <span>*обновление - </span>
            }
            <span>{props.numb}</span>
        </li>
    );
};

export default PhoneNumberItem;