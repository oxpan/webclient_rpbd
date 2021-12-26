import React, {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import Button from "../phonebook/UI/button/Button";
import Modal from "../phonebook/UI/Modal/Modal";
import PersonFilter from "../phonebook/PersonFilter";
import Loader from "../phonebook/UI/Loader/Loader";
import PersonList from "../phonebook/PersonList";
import PhoneBookForm from "../phonebook/PhoneBookForm";
import PersonSevice from "../API/PersonSevice";

function Persons() {
    const [persone,setPerson] = useState([
        // {title:'FFFFFFFFF', body:'fdfdfd',id:1},
        // {title:'GGGGGGGGG', body:'fdfdfd',id:2},
        // {title:'DDDDDDDDD', body:'fdfdfd',id:3},
        // {title:'AAAAAAAAA', body:'fdfdfd',id:4},
    ])


    const [filter,setFilter] = useState({find:'',querty:''});
    const [modal,setModal] = useState(false);
    const [fetchPerson,isPersonLoading,personError] = useFetching(async ()=>{
        const lperson = await PersonSevice.getAll();
        setPerson(lperson);
    })

    const createPerson = (newPerson) => {
        setPerson([...persone,newPerson])
        setModal(false)
    }

    useEffect(()=>{
        console.log("AAAA");
        fetchPerson();
    },[])


    const removePerson = (person) => {
        setPerson(persone.filter(p=>p.id !== person.id))
    }

    return (
        <div className="App">


            <hr style={{margin:'15px 0'}}/>
            <label >Создание нового  </label>
            <Button style={{marginTop: 30}} onClick={()=>setModal(true)}>
                ➕
            </Button>

            <Modal style={{marginTop: 30}} visible={modal} setVisible={setModal}>
                <PhoneBookForm create={createPerson}/>
            </Modal>

            <PersonFilter filter={filter} setFilter={setFilter}/>

            {personError &&
                <div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>🚫</h1></div>
                // <h1>Ошибка!!! {personError} у вас нет соединения с сервером</h1>
            }
            {isPersonLoading
                ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
                :<PersonList remove={removePerson} persone={persone} title={"Список персон"}/>
            }
        </div>
    );
}

export default Persons;
