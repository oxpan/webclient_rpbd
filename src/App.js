import React from "react";
import "./styles/App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Persons from "./pages/Persons";

function App() {


    return (
        <BrowserRouter>

            <Routes>
                <Route path={"/"} element={<Persons/>}/>
                <Route path={"aaaa"} element={<About/>}/>
            </Routes>


        </BrowserRouter>
    )
}

export default App;
