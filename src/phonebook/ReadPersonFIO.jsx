import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadPersonFIO = ({currenID, personList,toChangeFIO}) => {
    console.log(currenID);
    console.log(personList[currenID]);
    console.log(personList[currenID].lastname);
    const [readeFIO,setReadFIO] = useState({last:personList[currenID].lastname,
        first:personList[currenID].firstname,
        father:personList[currenID].fathername
    })

    console.log(readeFIO);

    return (
        <div>
            <label>ФИО:</label>
            <Input
                type={'text'}
                placeholder={"Фамилия:"}
                value={readeFIO.last}
                />
            <Input
                type={'text'}
                placeholder={"Имя:"}
                value={readeFIO.first}
            />
            <Input
                type={'text'}
                placeholder={"Отчество:"}
                value={readeFIO.father}
            />
            <div>
                <Button>💾</Button>
            </div>
            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadPersonFIO;