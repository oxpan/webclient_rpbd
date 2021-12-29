import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Modal from "./UI/Modal/Modal";
import PersonItem from "./PersonItem";
import PhoneNumberItem from "./PhoneNumberItem";

const ReadPhoneNumber = ({currenID, personList, addPhNu}) => {
    const [visebleAdd,setVisebleAdd] = useState(false);
    const [visebleUpdate,setVisebleUpdate] = useState(false);
    const [visebleDelete,setVisebleDelete] = useState(false);
    const [issNumber,setNumber] = useState({
        inumber:'',
        numberphone:'',
        type:''
    })
    const [clickButton,setClickButton] = useState(true);

    const addPhNumber = (e) => {
        e.preventDefault();
        if (issNumber.type === '1'){}else if(issNumber.type === '2'){}else if(issNumber.type === '3'){}else return;

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
    }


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
                    onChange={e => setNumber({...issNumber, numberphone: e.target.value})}
                />
                <Input
                    type={'text'}
                    placeholder={"Тип:"}
                    value={issNumber.type}
                    onChange={e => setNumber({...issNumber, type: e.target.value})}
                />
                <Input
                    type={'text'}
                    placeholder={"Номер:"}
                    value={issNumber.numberphone}
                    onChange={e => setNumber({...issNumber, numberphone: e.target.value})}
                />
                <hr style={{margin:'15px 0'}}/>
                <Button>Обновить</Button>
            </Modal>

            <Modal style={{marginTop: 30}} visible={visebleDelete} setVisible={setVisebleDelete}>
                <label>Удаление номера из списка</label>
                <Input
                    type={'text'}
                    placeholder={"Порядковый номер:"}
                />
                <hr style={{margin:'15px 0'}}/>
                <Button>Удалить</Button>
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

            <span>список номеров</span>
            {
                personList[currenID].phoneNumberSet === undefined
                ?
                    <div>НОМЕРОВ НЕТУ</div>
                    :
                    <ol>
                        {
                            personList[currenID].phoneNumberSet.map((numba) =>
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