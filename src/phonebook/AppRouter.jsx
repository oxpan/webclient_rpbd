import React from 'react';
import {Route, Routes} from "react-router-dom";
import Persons from "../pages/Persons";
import About from "../pages/About";
import Error from "../pages/Error";
import PersonPage from "../pages/PersonPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Persons/>}/>
            <Route exact path={"aaaa"} element={<About/>}/>
            <Route exact path={"aaaa/:id"} element={<PersonPage/>}/>
            <Route path={"*"} element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;