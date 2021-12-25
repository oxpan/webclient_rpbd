import React, {useState} from "react";
import Button from "./phonebook/UI/button/Button";
import Input from "./phonebook/UI/input/Input";
import PersonItem from "./phonebook/PersonItem";
import "./styles/App.css"
import PersonList from "./phonebook/PersonList";

function App() {
    const [persone,setPerson] = useState([
        {title:'FFFFFFFFF', body:'fdfdfd',id:1},
        {title:'GGGGGGGGG', body:'fdfdfd',id:2},
        {title:'DDDDDDDDD', body:'fdfdfd',id:3},
        {title:'AAAAAAAAA', body:'fdfdfd',id:4},
    ])
    
    const addPerson = () => {
      
    }


  return (
    <div className="App">
        <Input
            type={"text"}
            placeholder={"Фио:"}
        />
        <Input
            type={"text"}
            placeholder={"Address:"}
        />
        <Input
            type={"text"}
            placeholder={"Number:"}
        />
        <Button>добавить</Button>

        <Button>поиск</Button>
        <PersonList persone={persone} title={"Список персон"}/>

    </div>
  );
}

export default App;
