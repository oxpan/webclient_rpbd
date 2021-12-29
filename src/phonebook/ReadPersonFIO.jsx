import React, {useEffect, useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadPersonFIO = ({currenID, personList,toChangeFIO}) => {

    const [readeFIO,setReadFIO] = useState({last:personList[currenID].lastname,
        first:personList[currenID].firstname,
        father:personList[currenID].fathername
    })

    const readFIOPers = (e) => {
        e.preventDefault();
        console.log(readeFIO.last);

        const upPers = {
            lastname:readeFIO.last,
            firstname:readeFIO.first,
            fathername:readeFIO.father,
            id:personList[currenID].id
        }

        toChangeFIO(upPers);
    }

    return (
        <div>
            <label>ФИО:</label>
            <Input
                type={'text'}
                placeholder={"Фамилия:"}
                value={readeFIO.last}
                onChange={e=>setReadFIO({...readeFIO,last: e.target.value})}
                />
            <Input
                type={'text'}
                placeholder={"Имя:"}
                value={readeFIO.first}
                onChange={e=>setReadFIO({...readeFIO,first: e.target.value})}
            />
            <Input
                type={'text'}
                placeholder={"Отчество:"}
                value={readeFIO.father}
                onChange={e=>setReadFIO({...readeFIO,father: e.target.value})}
            />
            <div>
                <Button onClick={readFIOPers}>💾</Button>
            </div>
            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadPersonFIO;