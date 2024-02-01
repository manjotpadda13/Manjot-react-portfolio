import React from "react";
import "./style.css";
import gitHub from "../assets/Github.png"
import stack from "../assets/StackOverflow.png"
import linkedin from "../assets/LinkedIn.png"

export default function Footer() {
    return(
        <>
            <footer>
                <a href="https://github.com/manjotpadda13"><img src={gitHub} alt="github logo" className="logo"/></a>

                <a href="https://stackoverflow.com/users/23330460/manjot-padda"><img src={stack} alt="stack-overflow logo" className="logo"/></a>

                <a href="https://www.linkedin.com/in/manjot-padda-4494672b2/"><img src={linkedin} alt="linkedin logo" className="logo"/></a>
            </footer>
        </>
    )
};