import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadAddress = ({currenID,personList,readAddressPerson,removeAddress}) => {



    const [readAddress,setReadAddress] = useState({
        street: personList[currenID].address.street.streetname,
        home: personList[currenID].address.home,
        appartement: personList[currenID].address.appartement
    })

    const readAddressPers = (e) => {
        e.preventDefault();

        const newPersAddress = {
            id:personList[currenID].id,
            home:readAddress.home,
            street:readAddress.street,
            appartement:readAddress.appartement
        }
        // console.log(newPersAddress);
        readAddressPerson(newPersAddress);
    }
    const deleteAddress = (e) => {
        e.preventDefault();
        // console.log("remove");
        removeAddress(personList[currenID].id)
    }


    return (
        <div>
            <label>Адрес:</label>
            <Input
                type={'text'}
                placeholder={"Улица:"}
                value={readAddress.street}
                onChange={e=>setReadAddress({...readAddress,street: e.target.value})}
            />
            <Input
                type={'text'}
                placeholder={"Дом:"}
                value={readAddress.home}
                onChange={e=>setReadAddress({...readAddress,home: e.target.value})}
            />
            <Input
                type={'text'}
                placeholder={"Квартира:"}
                value={readAddress.appartement}
                onChange={e=>setReadAddress({...readAddress,appartement: e.target.value})}
            />
            <div>
                <Button onClick={readAddressPers}>💾</Button>
                <Button onClick={deleteAddress}>✖</Button>
            </div>
            <hr style={{margin:'15px 0'}}/>
        </div>
    );
};

export default ReadAddress;