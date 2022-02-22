import React from "react";

import envelope from "../../assets/img/envelope.png";
import telegram from "../../assets/img/telegram.svg";
import exit from "../../assets/img/exit.png";

import "./contact-us-module.scss"


function ContactUsModule() {
    return (
        <div className="contact-us-module">
            <img className="exit" src={exit} alt="exit"/>
            <div className="inputs">
                <div className="left-inputs">
                    <input placeholder="Name"/>
                    <input placeholder="Phone number"/>
                </div>
                <div className="right-inputs">
                    <input placeholder="Email"/>
                    <input placeholder="Country"/>
                </div>
            </div>
            <input className="text" placeholder="Tell us  about you idea  or project"/>
            <button className="lets-talk">Let`s talk</button>
            <p>or</p>
            <div className="message">
                <img src={envelope} alt="envelope"/>
                <img className="telegram" src={telegram} alt="telegram"/>
            </div>
        </div>

    )
}

export default ContactUsModule