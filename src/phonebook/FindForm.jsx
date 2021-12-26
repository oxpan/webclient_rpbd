import React from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const FindForm = ({finds, props}) => {

    const personFindALL = (e) => {
        e.preventDefault();
        console.log("Jopa");
    }
    const personFindFIO = (e) => {
        e.preventDefault();
        console.log("JopaJopa");
    }
    const personFind4 = (e) => {
        e.preventDefault();
        console.log("JopaJopajopa");
    }

    return (
        <div>
            {props === 'findALL'
                ?
                <div>
                    <label>ФИО:</label>
                    <Input
                        type={"text"}
                        placeholder={"Фамилия:"}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Имя:"}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Отчество:"}
                    />

                    <hr style={{margin:'15px 0'}}/>
                    <label>Адрес:</label>
                    <Input
                        type={"text"}
                        placeholder={"Улица:"}
                    />

                    <Input
                        type={"text"}
                        placeholder={"Дом:"}
                    />

                    <Input
                        type={"text"}
                        placeholder={"Квартира:"}
                    />

                    <hr style={{margin:'15px 0'}}/>
                    <label>Номер:</label>
                    <Input
                        type={"text"}
                        placeholder={"Тип:"}
                    />

                    <Input
                        type={"text"}
                        placeholder={"Номер:"}
                    />

                    <hr style={{margin:'15px 0'}}/>
                    <Button onClick={personFindALL}>Найти персону</Button>
                </div>
                : props === 'Find4'
                ?
                <div>
                    <label>Введите 4 цифры от номера</label>
                    <Input
                        type={"text"}
                        placeholder={"числа:"}
                    />

                    <hr style={{margin:'15px 0'}}/>

                    <Button onClick={personFind4}>Найти персону</Button>
                </div>
                    : props === 'findFIO'
                    ?
                        <div>
                            <label>ФИО:</label>
                            <Input
                                type={"text"}
                                placeholder={"Фамилия:"}
                            />

                            <Input
                                type={"text"}
                                placeholder={"Имя:"}
                            />

                            <Input
                                type={"text"}
                                placeholder={"Отчество:"}
                            />

                            <hr style={{margin:'15px 0'}}/>
                            <Button onClick={personFindFIO}>Найти персону</Button>
                        </div>
                        :
                        <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
                            <h1>⚠</h1>
                        </div>
            }
        </div>
    );
};

export default FindForm;