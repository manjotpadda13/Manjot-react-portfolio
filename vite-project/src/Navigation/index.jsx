import React from "react";
import "./style.css";

export default function Navigation(props) {
    return(
            <h2 className={`navOption ${props.current?"current":""}`} onClick={() => props.clickHandler(props.id)}>{props.name}</h2>
    )
}