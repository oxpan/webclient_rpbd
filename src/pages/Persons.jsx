import React, {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import Button from "../phonebook/UI/button/Button";
import Modal from "../phonebook/UI/Modal/Modal";
import PersonFilter from "../phonebook/PersonFilter";
import Loader from "../phonebook/UI/Loader/Loader";
import PersonList from "../phonebook/PersonList";
import PhoneBookForm from "../phonebook/PhoneBookForm";
import PersonSevice from "../API/PersonSevice";
import FindForm from "../phonebook/FindForm";

function Persons() {
    const [persone,setPerson] = useState([
        {lastname:'Zayakin', firstname:'Igor', fathername:'Ivanovich',id:Date.now(),home:23,apartment:228,street:"Nemirovicha"}
    ])


    const [filter,setFilter] = useState('');
    const [modalFind,setModalFind] = useState(false);
    const [modal,setModal] = useState(false);
    const [fetchPerson,isPersonLoading,personError] = useFetching(async ()=>{
        const lperson = await PersonSevice.getAll();
        console.log(lperson);
        console.log(lperson.data)

        setPerson([...persone,lperson.data[1]]);
        // setPerson(lat); //загрузка
    })
    const [fetchCreatePerson,isCreateLoad,createError] = useFetching(async (personCreate) => {
        // console.log(personCreate);
        const lperson = await PersonSevice.postAddPerson(personCreate);
        // console.log(lperson);
        const newPerson={
            ...personCreate,id:lperson
        }
        console.log(newPerson);

        setPerson([...persone,newPerson]);
    })
    const [fetchFind4Person,isFind4Load,find4Error] = useFetching(async (a,b,c,d) => {
        const lperson = await PersonSevice.getFind4Person(a,b,c,d);
        console.log(lperson.data.length);
        setPerson(lperson.data);
    } )

    const createPerson = (newPerson) => {
        fetchCreatePerson(newPerson);
        setModal(false);
    }


    useEffect(()=>{
        console.log("Автозагрузка");
        // fetchPerson();
    },[])

    const removePerson = (person) => {
        setPerson(persone.filter(p=>p.id !== person.id))
    }

    const find4Person = (a,b,c,d) => {
        console.log(a+' '+b+' '+c+' '+d);

        fetchFind4Person(a,b,c,d);
        setModalFind(false);
    }

    return (
        <div className="App">

            <label >Создание нового  </label>
            <Button style={{marginTop: 30}} onClick={()=>setModal(true)}>
                ➕
            </Button>

            <Modal style={{marginTop: 30}} visible={modal} setVisible={setModal}>
                <PhoneBookForm create={createPerson}/>
            </Modal>

            <div>
                <PersonFilter filter={filter} setFilter={setFilter}/>
                <Button onClick={()=>setModalFind(true)}>🔎</Button>
            </div>

            <Modal style={{marginTop: 30}} visible={modalFind} setVisible={setModalFind}>
                {/*<div>{filter}</div>*/}
                <FindForm finds4={find4Person} props={filter}/>
            </Modal>

            <hr style={{margin:'15px 0'}}/>

            {personError
                ?<div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>🚫</h1></div>
                :<div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>✔</h1></div>
                // <h1>Ошибка!!! {personError} у вас нет соединения с сервером</h1>
            }

            <hr style={{margin:'15px 0'}}/>

            {isPersonLoading
                ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
                :<PersonList remove={removePerson} persone={persone} title={"Список персон"}/>
            }
        </div>
    );
}

export default Persons;
