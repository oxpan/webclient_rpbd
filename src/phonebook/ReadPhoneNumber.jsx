import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Modal from "./UI/Modal/Modal";
import PersonItem from "./PersonItem";
import PhoneNumberItem from "./PhoneNumberItem";

const ReadPhoneNumber = ({currenID, personList, readPhoneNumberPerson}) => {
    const [visebleAdd,setVisebleAdd] = useState(false);
    const [visebleUpdate,setVisebleUpdate] = useState(false);
    const [visebleDelete,setVisebleDelete] = useState(false);
    const [issNumber,setNumber] = useState({})


    console.log(personList[currenID].phoneNumberSet);

    return (
        <div>
            <label>Номер телефона:</label>
            <Modal style={{marginTop: 30}} visible={visebleAdd} setVisible={setVisebleAdd}>
                <label>Добавление нового номера</label>
                <Input
                    type={'text'}
                    placeholder={"Тип:"}

                />
                <Input
                    type={'text'}
                    placeholder={"Номер:"}
                />
                <hr style={{margin:'15px 0'}}/>
                <Button>Добавить</Button>

            </Modal>
            <Modal style={{marginTop: 30}} visible={visebleUpdate} setVisible={setVisebleUpdate}>
                <label>Обновление номера из списка</label>
                <Input
                    type={'text'}
                    placeholder={"Порядковый номер:"}
                />
                <Input
                    type={'text'}
                    placeholder={"Тип:"}
                />
                <Input
                    type={'text'}
                    placeholder={"Номер:"}
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