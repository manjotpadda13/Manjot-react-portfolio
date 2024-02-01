import React from "react";
import "./style.css";
import Navigation from "../Navigation";
import { useState } from "react";

export default function Header({ setSelectedOption }) {

    const [Options, setOptions] = useState([{
        id: 1,
        name: "About Me",
        current: true,
    },{
        id: 2,
        name: "Portfolio",
        current: false,
    },{
        id: 3,
        name: "Contact",
        current: false,
    },{
        id: 4,
        name: "Resume",
        current: false
    }]);

    // when the user click in a navOption, set it to current. Change it's color and show content
    const setCurrent = (id) => {
        const newOptions = Options.map((option) => {
            // find the id that was clicked and change the prop to current: true
            if(option.id === id){
                return {...option, current: true}
            } else {
                // change all the others to current: false
                return {...option, current: false}
            }
        });
        setOptions(newOptions)
        setSelectedOption(id)
    }

    return(
        <header>
            <h1>Manjot Padda</h1>
            <div className="navContainer">
                {Options.map(navOption => <Navigation name={navOption.name} current={navOption.current} key={navOption.id} id={navOption.id} clickHandler={setCurrent}/>)}
            </div>            
        </header>
    )
}