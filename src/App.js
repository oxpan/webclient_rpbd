import React from "react";
import "./styles/App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Persons from "./pages/Persons";
import Navbar from "./phonebook/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./phonebook/AppRouter";

function App() {


    return (
        <Router>
            <Navbar/>

            <AppRouter/>

            {/*<Routes>*/}
            {/*    <Route path={"/"} element={<Persons/>}/>*/}
            {/*    <Route path={"aaaa"} element={<About/>}/>*/}
            {/*</Routes>*/}


        </Router>
    )
}

export default App;
