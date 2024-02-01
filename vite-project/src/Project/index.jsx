import React from "react";
import "./style.css";
import githubImg from "../assets/github.png"

export default function Project(props) {
    return(
        <>
            <div className="project" style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
            }}>
                <div id="projectContent">
                    <h3>{props.title}</h3>
                    <a href={props.link}><img src={githubImg} alt="github logo" className="logo"/></a><br />
                    <a href={props.deployed}>Deployed Link</a>
                </div>
                
            </div>
        </>
    )
}