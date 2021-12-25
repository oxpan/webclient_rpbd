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


  return (
    <div className="App">
      {/*<test/>*/}
        <PersonList persone={persone} title={"Список постов"}/>

    </div>
  );
}

export default App;
