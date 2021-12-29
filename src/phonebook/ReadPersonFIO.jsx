import React from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadPersonFIO = () => {
    return (
        <div>
            <label>ФИО:</label>
            <Input
                type={'text'}
                placeholder={"Фамилия:"}
                />
            <Input
                type={'text'}
                placeholder={"Имя:"}
            />
            <Input
                type={'text'}
                placeholder={"Отчество:"}
            />
            <div>
                <Button>💾</Button>
            </div>
            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadPersonFIO;