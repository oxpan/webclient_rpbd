import React from 'react';

const PhoneNumberItem = (props) => {

    return (
        <div className={"phone"}>
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
        </div>
    );
};

export default PhoneNumberItem;