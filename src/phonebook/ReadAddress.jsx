import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ReadAddress = ({currenID,personList,readAddressPerson,removeAddress}) => {
    // console.log(personList);
    let curstreet,curhome,curappartement;
    if (personList[currenID].address === undefined){
        curstreet = '';
        curhome = '';
        curappartement = '';
    }else {
        curstreet = personList[currenID].address.street.streetname;
        curhome = personList[currenID].address.home;
        curappartement = personList[currenID].address.appartement;
    }

    const [readAddress, setReadAddress] = useState({
        street: curstreet,
        home: curhome,
        appartement:curappartement
    });
    // console.log(readAddress);

    const readAddressPers = (e) => {
        e.preventDefault();

        if (removeAddress.home === '' || removeAddress.appartement ==='' || removeAddress.street === '')return;

        const newPersAddress = {
            id:personList[currenID].id,
            home:readAddress.home.trim(),
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