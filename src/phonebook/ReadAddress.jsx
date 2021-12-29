import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadAddress = ({currenID,personList,readAddressPerson}) => {



    const [readAddress,setReadAddress] = useState({
        street: personList[currenID].address.street.streetname,
        home: personList[currenID].address.home,
        appartement: personList[currenID].address.appartement
    })

    return (
        <div>
            <label>Адрес:</label>
            <Input
                type={'text'}
                placeholder={"Улица:"}
                value={readAddress.street}
            />
            <Input
                type={'text'}
                placeholder={"Дом:"}
                value={readAddress.home}
            />
            <Input
                type={'text'}
                placeholder={"Квартира:"}
                value={readAddress.appartement}
            />
            <div>
                <Button>💾</Button>
                <Button>✖</Button>
            </div>
            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadAddress;