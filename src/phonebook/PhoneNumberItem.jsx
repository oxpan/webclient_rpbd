import React from 'react';

const PhoneNumberItem = (props) => {

    return (
        <div className={"phone"}>
            <strong>{props.numb}</strong>
        </div>
    );
};

export default PhoneNumberItem;