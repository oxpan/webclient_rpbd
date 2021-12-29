import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PersonSevice from "../API/PersonSevice";
import Loader from "../phonebook/UI/Loader/Loader";
import Button from "../phonebook/UI/button/Button";
import ReadPersonFIO from "../phonebook/ReadPersonFIO";
import ReadAddress from "../phonebook/ReadAddress";
import ReadPhoneNumber from "../phonebook/ReadPhoneNumber";
import Modal from "../phonebook/UI/Modal/Modal";
import {AutchContext} from "../phonebook/context";

const PersonPage = () => {
    const {isPersonList,setPersonList} = useContext(AutchContext);
    // console.log(isPersonList);
    const params = useParams();
    // console.log(params);

    const [visebleDel,setVisebleDel] = useState(false);

    const [pers,setPers] = useState(isPersonList);
    console.log(pers);
    const [fetchPersonById,isLoading,error] = useFetching(async (id) => {
        // const response = await PersonSevice.getByID(id);
        // const persone = {
        //     lastname:'Zayakin',
        //     firstname:'Igor',
        //     fathername:'Ivanovich',
        //     id:3345,
        //     home:23,
        //     apartment:228,
        //     street:"Nemirovicha"
        // }
        // setPers(response.data);
        // setPers(persone);
        // console.log(persone);
    })
    const [fetchPersonUpdate,isPersonUpdateLoading,personUpdateError] = useFetching(async (pers)=>{
        const lperson = await PersonSevice.putUpdateFIO(pers)
        console.log(pers);
    })
    const [fetchPersonUpdateAddress,isPersonUpdateAddressLoading,personUpdateAddressError] = useFetching(async (pers)=>{
        const lperson = await PersonSevice.putUpdateAddress(pers);
        console.log(pers);
    })
    const [fetchPersonDeleteAddress,isPersonDeleteAddressLoading,personDeleteAddressError] = useFetching(async (idAddress)=>{
        const lperson = await PersonSevice.deleteAddress(idAddress);
        console.log(pers);
    })
    const [fetchPersonDelete,isPersonDeleteLoading,personDeleteError] = useFetching(async (id)=>{
        const lperson = await PersonSevice.deletePerson(id);
        console.log(pers);
    })
    const [fetchPersonAddPhonN,isPersonAddPhonNLoading,personAddPhonNError] = useFetching(async (perslocal)=>{
        const lperson = await PersonSevice.postAddPhone(perslocal);
        console.log(perslocal);
        // const newNumb = {
        //     number:perslocal.number,
        //     phoneType:{
        //         id:perslocal.type
        //     }
        // }
        // setPers([...pers.phoneNumberSet,newNumb]);
    })

    useEffect(()=>{
        fetchPersonById(params.id);
    },[])

    const updateAddress = (pers) => {
      // console.log(pers);
      fetchPersonUpdateAddress(pers);
    }
    const removeAddress = (idAddress) => {
      console.log(idAddress);
      fetchPersonDeleteAddress(idAddress)
    }
    const updateFio = (pers) => {
      // console.log(pers);
      fetchPersonUpdate(pers);
    }
    const deletePerson = () => {
        fetchPersonDelete(isPersonList[params.id-1].id);
    }
    const addPhone = (pers) => {
        console.log(pers);
        fetchPersonAddPhonN(pers);
    }

    return (
        <div>

            <h1>Режим редактора</h1>
            {error &&
                <div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>⛈</h1></div>
            }
            <ReadPersonFIO personList={isPersonList} currenID={params.id - 1} toChangeFIO={updateFio}/>
            <ReadAddress personList={isPersonList} currenID={params.id - 1} readAddressPerson={updateAddress} removeAddress={removeAddress}/>

            {/*{*/}
            {/*    isPersonList[params.id-1].phoneNumberSet === undefined*/}
            {/*    ?*/}
            {/*        <div>НОМЕРОВ НЕТУ</div>*/}
            {/*        :*/}
            <ReadPhoneNumber personList={isPersonList} currenID={params.id - 1} addPhNu={addPhone}/>
            {/*}*/}
            <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
                <Button onClick={deletePerson}>❌</Button>
            </div>
        </div>
    );
};

export default PersonPage;