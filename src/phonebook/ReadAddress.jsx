import React from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadAddress = () => {
    return (
        <div>
            <label>Адрес:</label>
            <Input
                type={'text'}
                placeholder={"Улица:"}
            />
            <Input
                type={'text'}
                placeholder={"Дом:"}
            />
            <Input
                type={'text'}
                placeholder={"Квартира:"}
            />
            <div>
                <Button>💾</Button>
                <Button>✖</Button>
            </div>
            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadAddress;