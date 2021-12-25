import React from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const PhoneBookForm = () => {
    return (
        <div>
            <Input
                type={"text"}
                placeholder={"Фио:"}
            />
            <Input
                type={"text"}
                placeholder={"Address:"}
            />
            <Input
                type={"text"}
                placeholder={"Number:"}
            />
            <Button>добавить</Button>

            <Button>поиск</Button>
        </div>
    );
};

export default PhoneBookForm;