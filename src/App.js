import React, {useRef, useState} from "react";
import Button from "./phonebook/UI/button/Button";
import Input from "./phonebook/UI/input/Input";
import PersonItem from "./phonebook/PersonItem";
import "./styles/App.css"
import PersonList from "./phonebook/PersonList";
import PhoneBookForm from "./phonebook/PhoneBookForm";
import Select from "./phonebook/UI/select/Select";
import PersonFilter from "./phonebook/PersonFilter";

function App() {
    const [persone,setPerson] = useState([
        {title:'FFFFFFFFF', body:'fdfdfd',id:1},
        {title:'GGGGGGGGG', body:'fdfdfd',id:2},
        {title:'DDDDDDDDD', body:'fdfdfd',id:3},
        {title:'AAAAAAAAA', body:'fdfdfd',id:4},
    ])

    // const [selectedFind,setSelectedFind] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')

    const [filter,setFilter] = useState({find:'',querty:''})

    const createPerson = (newPerson) => {
      setPerson([...persone,newPerson])
    }
    const removePerson = (person) => {
        setPerson(persone.filter(p=>p.id !== person.id))
    }

  return (
    <div className="App">

        <PhoneBookForm create={createPerson}/>


        <PersonFilter filter={filter} setFilter={setFilter}/>


        {persone.length
            ?
            <PersonList remove={removePerson} persone={persone} title={"Список персон"}/>
            :
            <h1 style={{textAlign:'center'}}>
                Персон не существует!
            </h1>
        }



    </div>
  );
}

export default App;
