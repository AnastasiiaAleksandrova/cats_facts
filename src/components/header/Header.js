import React from "react";
import "./Header.css";
import { AppBar } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";


function Header() {
    return (
        <AppBar position="static">
            <div className="app-bar">
                <div className="app-bar-text">Do I need a cat?</div>
                <PetsIcon />
            </div>
        </AppBar>
    );
}

export default Header;
