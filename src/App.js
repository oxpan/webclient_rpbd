import React from "react";
import Button from "./phonebook/UI/button/Button";
import Input from "./phonebook/UI/input/Input";

function App() {
  return (
    <div className="App">
      {/*<test/>*/}
        <Input
            type={"text"}
            placeholder={"post"}
        />
        <Input
            type={"text"}
            placeholder={"post"}
        />
        <Input
            type={"text"}
            placeholder={"post"}
        />
        <Button>AAAAAA</Button>
    </div>
  );
}

export default App;
