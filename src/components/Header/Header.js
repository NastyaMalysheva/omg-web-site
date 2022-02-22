import React from "react";

import "../../assets/fonts/mr_vlashu_vlashu.otf"

import "./header.scss"

function Header() {

    return (
        <div className="header">
            <span className="logo">SOFTWARS</span>
           <div className="list">
               <button className="button">Home</button>
               <button  className="button">Service</button>
               <button  className="button">Portfolio</button>
               <button  className="button">Contacts</button>
           </div>
        </div>
    )
}

export default Header