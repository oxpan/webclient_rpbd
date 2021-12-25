import React from 'react';
import Button from "./UI/button/Button";

const PersonItem = (props) => {


    return (
        <div className={"person"}>
            <div className={"person_content"}>
                <strong>{props.person.id}. {props.person.title}</strong>
                <div>
                    {props.person.body}
                </div>
            </div>

            <div className={"person__dell"}>
                <Button>❌</Button>
            </div>
        </div>
    );
};

export default PersonItem;