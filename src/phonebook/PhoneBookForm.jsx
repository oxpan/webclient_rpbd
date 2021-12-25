import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";



const PhoneBookForm = ({create}) => {
    const [pers,setPers] = useState({
        title:"",
        body:""
    })

    const addPerson = (e) => {
        e.preventDefault();
        const newPerson={
            ...pers,id:Date.now()
        }
        create(newPerson)
        // setPerson([...persone,{...pers,id: Date.now()}]);
        // setTitle("");
        // setBody("");
        setPers({title: "",body: ""});
    }

    return (

            <form>
                <Input
                    type={"text"}
                    placeholder={"title:"}
                    value={pers.title}
                    onChange={e=>setPers({...pers,title: e.target.value})}
                />
                <Input
                    value={pers.body}
                    onChange={e=>setPers({...pers,body:e.target.value})}
                    type={"text"}
                    placeholder={"Body:"}
                />
                {/*<Input*/}
                {/*    type={"text"}*/}
                {/*    placeholder={"Number:"}*/}
                {/*/>*/}
                <Button onClick={addPerson}>➕</Button>
            </form>

    );
};

export default PhoneBookForm;