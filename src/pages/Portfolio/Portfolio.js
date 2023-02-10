import React from "react";
import kavapp from "../../assets/img/kavapp.png"
import cm from "../../assets/img/сm.png"
import tests from "../../assets/img/tests.png"
import "./portfolio.scss"
import {NavLink} from "react-router-dom";

function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <div className="kavapp-wrapper">
                <div className="left-block">
                    <span className="title">KavApp</span>
                    <div className="block">
                        <div className="buttons">
                            <button>Flutter</button>
                            <button>iOS & Android</button>
                            <button>React</button>
                            <button>WEB</button>
                        </div>
                        <span className="text">
                        KavApp is a multifunctional and <br/>
                        comprehensive system for automating<br/>
                        coffee shops, mini-cafes and car cafes.
                    </span>
                        <span className="categories">The system is divided into 3 categories <br/>
                        - Personal account (Admin) - for the administrator<br/>
                        - Sales program (Seller) - for the barista<br/>
                        - Warehouse and delivery (Delivery) - for the logistician.
                    </span>
                    </div>
                    <NavLink to="/portfolioKavapp" className="view">View the project</NavLink>
                </div>
                <img src={kavapp} alt="kavapp"/>
            </div>
            <div className="cm">
                <img src={cm} alt="cm"/>
                <div className="right-block">
                    <span className="title">Coffee Mobile</span>
                    <div className="block">
                        <div className="buttons">
                            <button>Flutter</button>
                            <button>iOS & Android</button>
                            <button>React</button>
                            <button>WEB</button>
                        </div>
                        <span className="text">
                            The mobile application is designed for<br/>
                            visitors Coffee Mobile.
                    </span>
                        <span className="categories">
                            The main purpose of the application is a convenient and <br/>
                            affordable discount system for customers of the coffee chain.<br/>
                            The application has an individual design, user-friendly<br/>
                            interface and extensive functionality.
                    </span>
                    </div>
                    <NavLink to="/portfolioCm" className="view">View the project</NavLink>
                </div>
            </div>
            <div className="tests-wrapper">
                <div className="left-block">
                    <span className="title">Testing for civil servants</span>
                    <div className="block">
                        <div className="buttons">
                            <button>Swift</button>
                            <button>Cotlin</button>
                            <button>iOS & Android</button>
                        </div>
                        <span className="text">
                             Mobile apps for iOS and Android are<br/>
                            designed to help you quickly and efficiently<br/>
                            prepare for certification or admission to<br/>
                            government agencies.
                         </span>
                    </div>
                    <NavLink to="/portfolioTests" className="view">View the project</NavLink>
                </div>
                <img src={tests} alt="tests"/>
            </div>
        </div>
    )
}

export default Portfolio