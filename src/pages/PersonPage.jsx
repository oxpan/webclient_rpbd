import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PersonSevice from "../API/PersonSevice";
import Loader from "../phonebook/UI/Loader/Loader";
import Button from "../phonebook/UI/button/Button";
import ReadPersonFIO from "../phonebook/ReadPersonFIO";
import ReadAddress from "../phonebook/ReadAddress";
import ReadPhoneNumber from "../phonebook/ReadPhoneNumber";
import Modal from "../phonebook/UI/Modal/Modal";

const PersonPage = () => {
    const params = useParams();
    console.log(params);

    const [visebleDel,setVisebleDel] = useState(false);

    const [pers,setPers] = useState({});
    const [fetchPersonById,isLoading,error] = useFetching(async (id) => {
        // const response = await PersonSevice.getByID(id);
        const persone = {
            lastname:'Zayakin',
            firstname:'Igor',
            fathername:'Ivanovich',
            id:3345,
            home:23,
            apartment:228,
            street:"Nemirovicha"
        }
        // setPers(response.data);
        setPers(persone);
        console.log(persone);
    })

    useEffect(()=>{
        fetchPersonById(params.id);
    },[])
    return (
        <div>

            <h1>Режим редактора</h1>
            {error &&
                <div style={{display:'flex',justifyContent:'center',marginTop:50}}><h1>⛈</h1></div>
            }
            <ReadPersonFIO/>
            <ReadAddress/>
            <ReadPhoneNumber/>



            <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
                <Button >❌</Button>
            </div>


            {/*<span>{buffPerson}</span>*/}

            {/*{isLoading*/}
            {/*    ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>*/}
            {/*    : <div>*/}
            {/*        <div> {pers.lastname} {pers.firstname} {pers.fathername}</div>*/}
            {/*        <div> {pers.street}  {pers.home} {pers.apartment}</div>*/}

            {/*        <Button>💾</Button>*/}
            {/*        <Button>🗑</Button>*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
};

export default PersonPage;