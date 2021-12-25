import React from "react";
import Button from "./phonebook/UI/button/Button";
import Input from "./phonebook/UI/input/Input";

function App() {
  return (
    <div className="App">
      {/*<test/>*/}
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


    </div>
  );
}

export default App;
