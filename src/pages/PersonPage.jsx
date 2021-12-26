import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PersonSevice from "../API/PersonSevice";
import Loader from "../phonebook/UI/Loader/Loader";

const PersonPage = () => {
    const params = useParams();
    // console.log(params);

    const [pers,setPers] = useState({});
    const [fetchPersonById,isLoading,error] = useFetching(async (id) => {
        const response = await PersonSevice.getByID(id);
        setPers(response.data);
    })

    useEffect(()=>{
        fetchPersonById(params.id);
    },[])
    return (
        <div>

            <h1>Не жопа #{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    <div>{pers.id}. {pers.title}</div>
                    <div> {pers.body} </div>
            </div>
            }

            {/*<div>{pers.id}. {pers.title}</div>*/}

            {/*<div>{pers.body}</div>*/}
        </div>
    );
};

export default PersonPage;