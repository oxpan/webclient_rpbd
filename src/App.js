import React, {useRef, useState} from "react";
import Button from "./phonebook/UI/button/Button";
import Input from "./phonebook/UI/input/Input";
import PersonItem from "./phonebook/PersonItem";
import "./styles/App.css"
import PersonList from "./phonebook/PersonList";
import PhoneBookForm from "./phonebook/PhoneBookForm";

function App() {
    const [persone,setPerson] = useState([
        {title:'FFFFFFFFF', body:'fdfdfd',id:1},
        {title:'GGGGGGGGG', body:'fdfdfd',id:2},
        {title:'DDDDDDDDD', body:'fdfdfd',id:3},
        {title:'AAAAAAAAA', body:'fdfdfd',id:4},
    ])

    const createPerson = (newPerson) => {
      setPerson([...persone,newPerson])
    }
    const removePerson = (person) => {
        setPerson(persone.filter(p=>p.id !== person.id))
    }

  return (
    <div className="App">

        <PhoneBookForm create={createPerson}/>
        <Button>🔎</Button>
        <PersonList remove={removePerson} persone={persone} title={"Список персон"}/>

    </div>
  );
}

export default App;
