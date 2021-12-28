import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Loader from "./UI/Loader/Loader";



const PhoneBookForm = ({create}) => {

    const [isCreateLoading,setCreateLoading] = useState(false);

    const [pers,setPers] = useState({
        lastname:"",
        firstname:"",
        fathername:""
    })

    const addPerson = (e) => {
        e.preventDefault();
        setCreateLoading(true);
        setTimeout(()=>{//временный прикол
            const newPerson={
                ...pers,id:Date.now()
            }
            setCreateLoading(false);
            create(newPerson)
        },1000)

        setPers({lastname: "",firstname: "",fathername: ""});

    }

    return (

            <form>
                {isCreateLoading
                    ?
                    <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
                    :
                    <div>
                        <Input
                            type={"text"}
                            placeholder={"Фамилия:"}
                            value={pers.lastname}
                            onChange={e=>setPers({...pers,lastname: e.target.value})}
                        />

                        <Input
                            value={pers.firstname}
                            onChange={e=>setPers({...pers,firstname:e.target.value})}
                            type={"text"}
                            placeholder={"Имя:"}
                        />

                        <Input
                            type={"text"}
                            placeholder={"Отчество:"}
                            value={pers.fathername}
                            onChange={e=>setPers({...pers,fathername: e.target.value})}
                        />

                        <hr style={{margin:'15px 0'}}/>

                        <Button onClick={addPerson}>Создать персону</Button>
                    </div>
                }
            </form>

    );
};

export default PhoneBookForm;