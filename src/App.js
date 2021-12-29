import React, {useState} from "react";
import "./styles/App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Persons from "./pages/Persons";
import Navbar from "./phonebook/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./phonebook/AppRouter";
import {AutchContext} from "./phonebook/context";



function App() {
    const [isPersonList,setPersonList] = useState([]);

    return (
        <AutchContext.Provider value={{
            isPersonList,
            setPersonList
        }}>
            <Router>
                <Navbar/>
                <AppRouter/>
            </Router>
        </AutchContext.Provider>

    )
}

export default App;
