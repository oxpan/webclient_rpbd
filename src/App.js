import React, {useEffect, useRef, useState} from "react";
import Button from "./phonebook/UI/button/Button";
import Input from "./phonebook/UI/input/Input";
import PersonItem from "./phonebook/PersonItem";
import "./styles/App.css"
import PersonList from "./phonebook/PersonList";
import PhoneBookForm from "./phonebook/PhoneBookForm";
import Select from "./phonebook/UI/select/Select";
import PersonFilter from "./phonebook/PersonFilter";
import Modal from "./phonebook/UI/Modal/Modal";
import axios from "axios";
import PersonSevice from "./API/PersonSevice";
import Loader from "./phonebook/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [persone,setPerson] = useState([
        // {title:'FFFFFFFFF', body:'fdfdfd',id:1},
        // {title:'GGGGGGGGG', body:'fdfdfd',id:2},
        // {title:'DDDDDDDDD', body:'fdfdfd',id:3},
        // {title:'AAAAAAAAA', body:'fdfdfd',id:4},
    ])


    const [filter,setFilter] = useState({find:'',querty:''});
    const [modal,setModal] = useState(false);
    // const [isPersonLoading,setPersonLoading] = useState(false);
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
            <h1>Ошибка!!! {personError}</h1>
        }
        {isPersonLoading
            ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
            :<PersonList remove={removePerson} persone={persone} title={"Список персон"}/>
        }



    </div>
  );
}

export default App;
