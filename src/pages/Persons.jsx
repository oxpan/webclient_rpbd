import React, {useContext, useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import Button from "../phonebook/UI/button/Button";
import Modal from "../phonebook/UI/Modal/Modal";
import PersonFilter from "../phonebook/PersonFilter";
import Loader from "../phonebook/UI/Loader/Loader";
import PersonList from "../phonebook/PersonList";
import PhoneBookForm from "../phonebook/PhoneBookForm";
import PersonSevice from "../API/PersonSevice";
import FindForm from "../phonebook/FindForm";
import {AutchContext} from "../phonebook/context";

const Persons = () => {
    const [persone,setPerson] = useState([
        // {lastname:'Иванов',
        //     firstname:'Иван',
        //     fathername:'Иванкович',
        //     id:Date.now(),
        //     address:{
        //         home:23,
        //         appartement:228,
        //         street:{
        //             streetname:"Заборная"
        //         }
        //     },
        //     phoneNumberSet:[
        //         {
        //             number:'9(888)789-87-99',
        //             phoneType:{
        //                 id:1
        //             }
        //         },
        //         {
        //             number:'9(324)533-87-99',
        //             phoneType:{
        //                 id:3
        //             }
        //         },
        //     ]
        // }
    ])


    const [filter,setFilter] = useState('');
    const [modalFind,setModalFind] = useState(false);
    const [modal,setModal] = useState(false);
    const [fetchPerson,isPersonLoading,personError] = useFetching(async ()=>{
        const lperson = await PersonSevice.getAll();
        // setPerson([...persone,lperson.data[1]]);
    })
    const [fetchCreatePerson,isCreateLoad,createError] = useFetching(async (personCreate) => {
        const lperson = await PersonSevice.postAddPerson(personCreate);
        const newPerson={
            ...personCreate,id:lperson
        }
        console.log(newPerson);

        setPerson([...persone,newPerson]);
    })
    const [fetchFind4Person,isFind4Load,find4Error] = useFetching(async (a,b,c,d) => {
        const lperson = await PersonSevice.getFind4Person(a,b,c,d);
        console.log(lperson.data.length);
        console.log(lperson);
        setPerson(lperson.data);
    } )
    const [fetchFindFIOPerson,isFindFIOLoad,findFIOError] = useFetching(async (last,first,father) => {
        const lperson = await PersonSevice.getFindFIOPerson(last,first,father);
        console.log(lperson.data.length);
        setPerson(lperson.data);
    })
    const [fetchFindFIOALL,isFindFIOALLLoad,findFIOALLError] = useFetching(async (personFind) =>{
        const lperson = await PersonSevice.getFindFIOphtypeAddress(personFind);
        console.log(lperson.data.length);
        setPerson(lperson.data);
    })
    const [fetchFindFIOEmpty,isFindFIOEmptyLoad,findFIOEmptyError] = useFetching(async (personFind) =>{
        const lperson = await PersonSevice.getFindFIOempty(personFind);
        console.log(lperson.data.length);
        setPerson(lperson.data);
    })

    const createPerson = (newPerson) => {
        fetchCreatePerson(newPerson);
        setModal(false);
    }

    useEffect(()=>{
        fetchPerson();
    },[])

    const removePerson = (person) => {
        setPerson(persone.filter(p=>p.id !== person.id))
    }

    const find4Person = (a,b,c,d) => {
        console.log(a+' '+b+' '+c+' '+d);

        fetchFind4Person(a,b,c,d);
        setModalFind(false);
    }

    const findFIOPerson = (last,first,father) => {
        fetchFindFIOPerson(last,first,father);
        setModalFind(false);
    }

    const findFIOphPerson = (findpers) => {
        fetchFindFIOPerson(findpers);
        setModalFind(false);
    }

    const findFIOALL = (findpers) => {
        fetchFindFIOALL(findpers);
        setModalFind(false);
    }

    const findFIOEmpty = (findpers) => {
        fetchFindFIOEmpty(findpers);
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
                <FindForm
                    finds4={find4Person}
                    findFIO={findFIOPerson}
                    findALL={findFIOALL}
                    findFIOEmpty={findFIOEmpty}
                    findFIOph={findFIOphPerson}
                    filter={filter}/>
            </Modal>

            <hr style={{margin:'15px 0'}}/>
            {personError
                ?<div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>🚫</h1></div>
                :<div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>✔</h1></div>
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
