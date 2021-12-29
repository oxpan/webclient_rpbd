import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Modal from "./UI/Modal/Modal";

const ReadPhoneNumber = () => {
    const [visebleAdd,setVisebleAdd] = useState(false);
    const [visebleUpdate,setVisebleUpdate] = useState(false);
    const [visebleDelete,setVisebleDelete] = useState(false);


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
                <Button onClick={()=>setVisebleUpdate(true)}>💾</Button>
                <Button onClick={()=>setVisebleDelete(true)}>❌</Button>
            </div>

            {/*    здесь будет список номеров*/}




            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadPhoneNumber;