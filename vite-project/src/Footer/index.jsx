import React from "react";
import "./style.css";
import gitHub from "../assets/github.png"
import stack from "../assets/stack-overflow.png"
import linkedin from "../assets/linkedin.png"

export default function Footer() {
    return(
        <>
            <footer>
                <a href="https://github.com/DavidRodriguez119"><img src={gitHub} alt="github logo" className="logo"/></a>
                <a href="https://meta.stackoverflow.com/users/22249510/david-rodriguez"><img src={stack} alt="stack-overflow logo" className="logo"/></a>
                <a href="https://www.linkedin.com/in/davidrodriguez119/"><img src={linkedin} alt="linkedin logo" className="logo"/></a>
            </footer>
        </>
    )
};