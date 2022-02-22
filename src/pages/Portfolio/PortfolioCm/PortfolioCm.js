import React from "react";
import cmup from "../../../assets/img/cmup.png"
import cmadmin from "../../../assets/img/cmAdmin.png"
import google from "../../../assets/img/GooglePlay.svg"
import store from "../../../assets/img/AppStore.svg"
import cmMobile from "../../../assets/img/cmMobile.png"
import cmScreens from "../../../assets/img/cmScreens.png"

import "./portfolio-cm.scss"

function PortfolioCm() {
    return (
        <div className="portfolio-cm-wrapper">
            <div className="cm-wrapper">
                <span className="title">Coffee Mobile</span>
                <div className="img-block">
                    <img className="cmup" src={cmup} alt="cmup"/>
                    <div className="buttons">
                        <img className="google" src={google} alt="google"/>
                        <img className="store" src={store} alt="google"/>
                    </div>
                    <img className="cmadmin" src={cmadmin} alt="cmadmin"/>
                </div>
            </div>
            <div className="text-block">
                <span className="text">
                    <h1>What we did:</h1>
                    <p>- Developed the structure and design of the application and admin panel.</p>
                    <p> - Designed and implemented a global database and API to quickly update issues and store statistics<br/> (using PHP, Laravel, MySQL)</p>
                    <p>- Connected the application to the accounting program that uses customer at their points of sale</p>
                    <p>- Developed the application in compliance with all customer requirements (using Dart, Flutter, Hive)</p>
                    <p>- Developed an admin panel to manage the application (using React, JavaScript, CSS and HTML)</p>
                    <p>- Tested the application and the admin panel.</p>
                    <p>- Published an application on the App Store and Play Market.</p>
                </span>
            </div>
            <div className="coffee-mobile-block">
                <img src={cmMobile} alt="cm"/>
                <div className="text">
                        <span className="title">Coffee Mobile</span> - The mobile application is designed for<br/>
                        visitors Coffee Mobile.

                        <p>The main purpose of the application is a convenient and<br/>
                        affordable discount system for customers of the coffee chain.<br/>
                        The application has an individual design, user-friendly<br/>
                        interface and extensive functionality.</p>
                        <p>
                        Users of the application, in addition to using the discount<br/>
                        system, can use weekly and regular tasks, rewarding additional<br/>
                        bonuses, viewing user ratings, and trying to increase rankings,<br/>
                        share bonuses with other users, shop online, which is also in the<br/>
                        application.
                        </p>
                </div>
            </div>
            <div className="admin-block">
                <div className="text">
                    <span><p className="title">Coffee Mobile Admin</p>
                    Complete with the application, we have developed an admin<br/>
                    panel, through which it is convenient to manage all the features<br/>
                    of the application, positions and orders of the online store built<br/>
                    into the application, discount system of coffee shops, as<br/>
                    well as technical support for users
                    </span>
                </div>
                <img src={cmScreens} alt="screens"/>
            </div>
        </div>
    )
}

export default PortfolioCm






