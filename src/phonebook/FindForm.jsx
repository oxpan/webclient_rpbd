import React, {useEffect, useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const FindForm = ({finds4,findFIO, props}) => {

    const [findVar,setFindVar] = useState({
        find4:'',
        findF:'',
        findI:'',
        findO:'',
        findStreet:'',
        findHome:'',
        findApartment:'',
        findPhone:'',
        findPhType:''
    })

    const personFindALL = (e) => {
        e.preventDefault();

        if (findVar.findI === '' || findVar.findF === '' || findVar.findO === '')return;


        if (findVar.findPhType !== '' && findVar.findPhone !== ''){

            if (findVar.findStreet !== '' && findVar.findHome !== '' && findVar.findApartment !== ''){
                console.log("GOFIONUMB2222222");
            }else {
                console.log("GOFIONUMB");
            }


        }else {
            console.log("NoOO");
        }

    }
    const personFindFIO = (e) => {
        e.preventDefault();
        findFIO(findVar.findF.trim(),findVar.findI.trim(),findVar.findO.trim());
    }
    const personFind4 = (e) => {
        e.preventDefault();
        const number = findVar.find4;
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
                    <label>Номер:</label>
                    {
                        findVar.findI !== '' && findVar.findO !== '' && findVar.findF !== ''
                            ?
                            <div>
                                <Input
                                    type={"text"}
                                    placeholder={"Тип:"}
                                    disabled={false}
                                    value={findVar.findPhType}
                                    onChange={e=>setFindVar({...findVar,findPhType: e.target.value})}
                                />

                                <Input
                                    type={"text"}
                                    placeholder={"Номер:"}
                                    disabled={false}
                                    value={findVar.findPhone}
                                    onChange={e=>setFindVar({...findVar,findPhone: e.target.value})}
                                />

                            </div>
                            :

                            <div>

                                <Input
                                    type={"text"}
                                    placeholder={"Тип:"}
                                    value={''}
                                    disabled={true}
                                />


                                <Input
                                    type={"text"}
                                    placeholder={"Номер:"}
                                    disabled={true}
                                    value={''}
                                />

                            </div>
                    }

                    <hr style={{margin:'15px 0'}}/>
                    <label>Адрес:</label>
                    {
                        findVar.findPhType !== '' && findVar.findPhone !== ''
                        ?
                            <div>
                                <Input
                                    type={"text"}
                                    placeholder={"Улица:"}
                                    disabled={false}
                                    value={findVar.findStreet}
                                    onChange={e=>setFindVar({...findVar,findStreet: e.target.value})}
                                />

                                <Input
                                    type={"text"}
                                    placeholder={"Дом:"}
                                    disabled={false}
                                    value={findVar.findHome}
                                    onChange={e=>setFindVar({...findVar,findHome: e.target.value})}
                                />

                                <Input
                                    type={"text"}
                                    placeholder={"Квартира:"}
                                    disabled={false}
                                    value={findVar.findApartment}
                                    onChange={e=>setFindVar({...findVar,findApartment: e.target.value})}

                                />
                            </div>
                        :
                            <div>
                                <Input
                                    type={"text"}
                                    placeholder={"Улица:"}
                                    disabled={true}
                                    value={''}
                                />

                                <Input
                                    type={"text"}
                                    placeholder={"Дом:"}
                                    disabled={true}
                                    value={''}
                                />

                                <Input
                                    type={"text"}
                                    placeholder={"Квартира:"}
                                    disabled={true}
                                    value={''}
                                />
                            </div>
                    }


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