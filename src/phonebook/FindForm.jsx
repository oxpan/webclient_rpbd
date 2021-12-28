import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const FindForm = ({finds4,findFIO, props}) => {

    const [findVar,setFindVar] = useState({
        find4:'',
        findF:'',
        findI:'',
        findO:'',
        findALL:''
    })

    const personFindALL = (e) => {
        e.preventDefault();
        console.log("Jopa");

        findFIO(findVar.findF.trim(),findVar.findI.trim(),findVar.findO.trim());
    }
    const personFindFIO = (e) => {
        e.preventDefault();
        console.log("JopaJopa");
    }
    const personFind4 = (e) => {
        e.preventDefault();

        const number = findVar.find4;
        // console.log(number[2]);
        finds4(number[0],number[1],number[2],number[3]);
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
                        value={findVar.find4}
                        onChange={e=>setFindVar({...findVar,find4: e.target.value})}
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
                                value={findVar.findF}
                                onChange={e=>setFindVar({...findVar,findF: e.target.value})}
                            />

                            <Input
                                type={"text"}
                                placeholder={"Имя:"}
                                value={findVar.findI}
                                onChange={e=>setFindVar({...findVar,findI: e.target.value})}
                            />

                            <Input
                                type={"text"}
                                placeholder={"Отчество:"}
                                value={findVar.findO}
                                onChange={e=>setFindVar({...findVar,findO: e.target.value})}
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