
import mobile from "../../assets/img/mobile.png";
import web from "../../assets/img/web.png";
import design from "../../assets/img/design.png";
import line from "../../assets/img/line.png";
import portfolio from "../../assets/img/portfolio.png";
import one from "../../assets/img/one.png";
import arrow from "../../assets/img/arrow.png";
import telegram from "../../assets/img/telegram.svg";
import envelope from "../../assets/img/envelope.png";
import dandelion from "../../assets/img/dandelion.png";

import "./home.scss"


function Home() {
    return (
        <div>
            <div className="title-wrapper">
                <div className="left-block">

               <span className="title">Web and Mobile App <br/>
                   <p>Development</p>
               </span>
                    <button className="lets-talk">Let`s talk</button>
                    {/*<img className="dandelion" src={dandelion} alt="dandelion"/>*/}
                    <img className="line" src={line} alt="line"/>
                </div>
                <div className="service-title">Service</div>
            </div>
            <div className="service-wrapper">
                <div className="mobile">
                    <div className="mobile-title">Mobile</div>
                    <div className="block">
                          <span className="text">
                           <p>Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.<br/></p>
                            Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.<br/>
                            Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.
                          </span>
                        <img src={mobile} alt="mobile"/>
                    </div>
                </div>
            </div>
            <div className="web-wrapper">
                <div className="web">
                    <div className="web-title">WEB</div>
                    <div className="block">
                        <img src={web} alt="web"/>
                        <span className="text">
                            <p>
                             Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.<br/>
                            </p>
                            Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.<br/>
                            Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.
                          </span>
                    </div>
                </div>
            </div>
            <div className="design-wrapper">
                <div className="design">
                    <div className="design-title">Design</div>
                    <div className="block">
                          <span className="text">
                            <p>Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.<br/></p>
                            Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.<br/>
                            Mobile apps for iOS and Android are designed to help you quickly and <br/>
                            efficiently prepare for certification or admission to government agencies.
                          </span>
                        <img src={design} alt="design"/>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="portfolio-title">Portfolio</div>
            </div>
            <div className="portfolio-block">
                <img src={portfolio} alt="portfolio"/>
                <div className="right-block">
                    <img src={one} alt="one"/>
                    <span className="text">
                        We build state of the <br/>
                        art apps that delight<br/>
                        both clients and<br/> users
                    </span>
                    <button className="view"><p>View our work</p> <img src={arrow} alt="arrow"/> </button>
                </div>
            </div>
            <div className="contact-us">
                <div className="contact-us-title-block">
                    <div className="contact-us-title">Contact us</div>
                </div>
                <div className="contact-us-block">
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
            </div>

        </div>
    )
}

export default Home