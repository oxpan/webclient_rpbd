import React from 'react';
import {Link} from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className="navbar__links">
                <Button>
                    <Link to="link">🌍</Link>
                </Button>
                <Button>
                    <Link to="/">🏡</Link>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;