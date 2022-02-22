import React from "react";

import testsMobile from "../../../assets/img/testsmobile.png";
import google from "../../../assets/img/GooglePlay.svg";
import store from "../../../assets/img/AppStore.svg";
import testsPhone from "../../../assets/img/testsPhoneі.png"

import "./portfolio-tests.scss"


function PortfolioTests() {
    return (
        <div className="tests-wrapper">
            <div className="first-block">
                 <div className="block-clock">
                     <div className="block">
                         <span className="title">Testing for civil servants</span>
                         <img src={testsMobile} alt="tests"/>
                     </div>
                     <div className="buttons">
                         <img className="google" src={google} alt="google"/>
                         <img className="store" src={store} alt="google"/>
                     </div>
                 </div>

                <div className="text-block">
                    <span  className="text">
                         <h1>What we did:</h1>
                        <span>
                        - We researched the field of similar applications and formed the features of the applications developed by us<br/>
                        - Developed the structure and design of applications.<br/>
                        - Designed and implemented a global database and API to quickly update issues and store statistics<br/>
                        - Developed applications in compliance with all customer requirements (using Swift, Kotlin, Java, SQLite, PHP, MySQL)<br/>
                        - We tested the applications.<br/>
                        - Published applications in the App Store and Play Market.<br/>
                         </span>
                    </span>
                </div>
            </div>
            <div className="second-block">
                <img src={testsPhone} alt="tests"/>
                <div className="text">
                    <span>
                        <span className="title">Testing for civil servants </span>
                         - Mobile apps for iOS and<br/>
                        Android are designed to help you quickly and efficiently<br/>
                        prepare for certification or admission to government<br/>
                        agencies.
                    </span>
                    <p>
                        The main advantage of ours is the study of the material by<br/>
                        the Leitner method. Its essence is the periodic repetition of<br/>
                        the studied material, where the questions that are given to<br/>
                        the student harder, are repeated more often than those that<br/>
                        are easier to remember. And also introduced anonymous<br/>
                        collection of test results for
                        comparing one's own results with<br/> those of others.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioTests