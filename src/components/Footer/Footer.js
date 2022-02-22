import React from "react";
import envelope from "../../assets/img/envelope.png";
import telegram from "../../assets/img/telegram.svg";
import speak from "../../assets/img/speak.png";
import vector from "../../assets/img/vector.png";
import "./footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <button className="languages">EN<img src={vector} alt="vec"/></button>
            <div className="buttons">
                <img src={envelope} alt="envelope"/>
                <img className="telegram" src={telegram} alt="telegram"/>
                <div className="speak"><img src={speak} alt="speak"/></div>
            </div>
        </footer>
    )
}

export default Footer