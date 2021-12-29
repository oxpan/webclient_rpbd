import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Modal from "./UI/Modal/Modal";
import PersonItem from "./PersonItem";
import PhoneNumberItem from "./PhoneNumberItem";

const ReadPhoneNumber = ({currenID, personList, addPhNu,updatePhNumb,deletePhNumb}) => {
    const [visebleAdd,setVisebleAdd] = useState(false);
    const [visebleUpdate,setVisebleUpdate] = useState(false);
    const [visebleDelete,setVisebleDelete] = useState(false);
    const [issNumber,setNumber] = useState({
        inumber:'',
        numberphone:'',
        type:''
    })
    const [clickButton,setClickButton] = useState(true);
    const [pers,setPers] = useState(personList[currenID].phoneNumberSet);
    console.log(pers);

    const addPhNumber = (e) => {
        e.preventDefault();

        if (issNumber.numberphone[1] !== '(' ||
            issNumber.numberphone[5] !== ')' ||
            issNumber.numberphone[9] !== '-' ||
            issNumber.numberphone[12] !== '-'||
            issNumber.numberphone.length !== 15)return;

        const newNumber = {
            id:personList[currenID].id,
            number:issNumber.numberphone,
            type:issNumber.type
        }
        addPhNu(newNumber);
        setVisebleAdd(false);
        const newNumb = {
            number:newNumber.number,
            phoneType:{
                id:newNumber.type
            }
        }
        setPers([...pers,newNumb]);
    }
    const updatePhN = (e) => {
        e.preventDefault();
        // console.log(personList[currenID].phoneNumberSet.length)
        // console.log(parseInt(issNumber.inumber,10))


        if (issNumber.numberphone[1] !== '(' ||
            issNumber.numberphone[5] !== ')' ||
            issNumber.numberphone[9] !== '-' ||
            issNumber.numberphone[12] !== '-'||
            issNumber.numberphone.length !== 15)return;

        if (parseInt(issNumber.inumber,10) > personList[currenID].phoneNumberSet.length)return;

        var intNumm = parseInt(issNumber.inumber,10) -1;
        const newNumber = {
            id:personList[currenID].id,
            inumber:intNumm.toString(),
            number:issNumber.numberphone,
            type:issNumber.type
        }
        // console.log("URA");
        updatePhNumb(newNumber);
        setVisebleUpdate(false);

        const elem = {
            number:newNumber.number,
            phoneType:{
                id:newNumber.type
            }
        }

        pers[intNumm] = elem;

    }
    const deletePhN = (e) => {
        e.preventDefault();

        if (parseInt(issNumber.inumber,10) > personList[currenID].phoneNumberSet.length)return;
        var intNumm = parseInt(issNumber.inumber,10) -1;
        const numbdel = {
            id:personList[currenID].id,
            pos:intNumm.toString()
        }
        deletePhNumb(numbdel);
        setVisebleDelete(false);

        const tmp = pers.splice(numbdel.pos,1);
        console.log(tmp);
    }
    console.log(pers);
    // console.log(personList[currenID].phoneNumberSet);

    return (
        <div>
            <label>Номер телефона:</label>
            <Modal style={{marginTop: 30}} visible={visebleAdd} setVisible={setVisebleAdd}>
                <label>Добавление нового номера</label>
                <h4>1 - Мобильный</h4>
                <h4>2 - Рабочий</h4>
                <h4>3 - Домашний</h4>
                <Input
                    type={'text'}
                    placeholder={"Тип:"}
                    value={issNumber.type}
                    onChange={e => setNumber({...issNumber, type: e.target.value})}
                />
                <h4>Формат ввода - X(XXX)XXX-XX-XX</h4>
                <Input
                    type={'text'}
                    placeholder={"Номер:"}
                    value={issNumber.numberphone}
                    onChange={e => setNumber({...issNumber, numberphone: e.target.value})}
                />
                <hr style={{margin:'15px 0'}}/>
                <Button onClick={addPhNumber}>Добавить</Button>

            </Modal>
            <Modal style={{marginTop: 30}} visible={visebleUpdate} setVisible={setVisebleUpdate}>
                <label>Обновление номера из списка</label>
                <Input
                    type={'text'}
                    placeholder={"Порядковый номер:"}
                    value={issNumber.inumber}
                    onChange={e => setNumber({...issNumber, inumber: e.target.value})}
                />
                <h4>1 - Мобильный</h4>
                <h4>2 - Рабочий</h4>
                <h4>3 - Домашний</h4>
                <Input
                    type={'text'}
                    placeholder={"Тип:"}
                    value={issNumber.type}
                    onChange={e => setNumber({...issNumber, type: e.target.value})}
                />
                <h4>Формат ввода - X(XXX)XXX-XX-XX</h4>
                <Input
                    type={'text'}
                    placeholder={"Номер:"}
                    value={issNumber.numberphone}
                    onChange={e => setNumber({...issNumber, numberphone: e.target.value})}
                />
                <hr style={{margin:'15px 0'}}/>
                <Button onClick={updatePhN}>Обновить</Button>
            </Modal>

            <Modal style={{marginTop: 30}} visible={visebleDelete} setVisible={setVisebleDelete}>
                <label>Удаление номера из списка</label>
                <Input
                    type={'text'}
                    placeholder={"Порядковый номер:"}
                    value={issNumber.inumber}
                    onChange={e => setNumber({...issNumber, inumber: e.target.value})}
                />
                <hr style={{margin:'15px 0'}}/>
                <Button onClick={deletePhN}>Удалить</Button>
            </Modal>

            <div>
                <Button onClick={()=>setVisebleAdd(true)}>➕</Button>
                {
                    personList[currenID].phoneNumberSet !== undefined &&
                    <Button onClick={()=>setVisebleUpdate(true)}>💾</Button>
                }
                {
                    personList[currenID].phoneNumberSet !== undefined &&
                    <Button onClick={()=>setVisebleDelete(true)}>❌</Button>
                }


            </div>

            {/*<span>список номеров</span>*/}
            {/*{*/}
            {/*    personList[currenID].phoneNumberSet === undefined*/}
            {/*    ?*/}
            {/*        <div>НОМЕРОВ НЕТУ</div>*/}
            {/*        :*/}
            {/*        <ol>*/}
            {/*            {*/}
            {/*                personList[currenID].phoneNumberSet.map((numba) =>*/}
            {/*                    <PhoneNumberItem numb={numba.number} phont={numba.phoneType} key={numba.phoneType.id}/>*/}
            {/*                )*/}
            {/*            }*/}
            {/*        </ol>*/}
            {/*}*/}
            <span>список номеров</span>
            {
                pers === undefined
                    ?
                    <div>НОМЕРОВ НЕТУ</div>
                    :
                    <ol>
                        {
                            pers.map((numba) =>
                                <PhoneNumberItem numb={numba.number} phont={numba.phoneType} key={numba.phoneType.id}/>
                            )
                        }
                    </ol>
            }

            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadPhoneNumber;