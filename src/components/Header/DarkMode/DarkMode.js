import React from "react";
import { ReactComponent as Sun } from "../../../assets/img/Sun.svg";
import { ReactComponent as Moon } from "../../../assets/img/Moon.svg";
import "./DarkMode.scss";

const DarkMode = ({setDark , dark}) => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'  onClick={()=> setDark(!dark)}>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
