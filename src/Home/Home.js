import React from "react";
import "./home.css";
import roman from "../images/romanefrot.jpg"

const Home = () => {
    return(
        <div className="home">
            <img src={roman} className="picture"/>
            <div className="textcontainer floating">
            <h1 className="text">Hi, I'm Roman!</h1>
            <h3 className="smalltext">I'm a Fullstack Web-Developer based in Bochum, Germany.</h3>
            </div>
        </div>
    )
}

export default Home;