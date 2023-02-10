import React, {useState} from "react";
import Slider from "../../components/Slider/Slider";
import portfolio from "../../assets/img/portfolio.png";
import arrow from "../../assets/img/arrow.png";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../../i18n"

import "./home.scss"


function Home() {
    const [showPopUp, setShowPopUp] = useState(false)
    const {t, i18n} = useTranslation();
    const $form = document.getElementById('contact-us');

    const scrollToBlock = () => {
        return (
            $form.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth',
            })
        )
    }

    const closePopUp = () => {
        return (
            setTimeout(() => {
                setShowPopUp(false)
            }, 6000)
        )
    }

    const openPopup = () => {
        const inputValue = document.getElementsByTagName("input")
        for (let i = 0;  i < inputValue.length; i++) {
            inputValue[i].value = '';
        }
        return (
            setShowPopUp(true),
            closePopUp()
        )
    }

    return (
        <div>
            <div className="home-wrapper">
                <div className="title-wrapper">
                    <div className="left-block">
                   <span className="title">{t('app')}<br/>
                       <p>{t('development')}</p>
                   </span>
                        <button onClick={scrollToBlock} className="lets-talk">{t('talk')}</button>
                    </div>
                </div>
                <div className="service">
                    <div className="service-title"><span className="text">{t('service')}</span></div>
                    <Slider/>
                </div>
                <div className="portfolio-block">
                    <div className="portfolio-title">
                        <div className="title">{t("portfolio")}</div>
                    </div>
                    <span className="text">
                    {t("portfolio_block_text")}
                </span>
                    <NavLink to="/portfolio" className="view">
                        <p>{t('View_work')}</p>
                        <img src={arrow} alt="arrow"/>
                    </NavLink>
                </div>
                <div id="contact-us" className="contact-us">
                    <div className="contact-us-block">
                        <div className="contact-us-title">{t("contact_us")}</div>
                        <div className="inputs">
                            <div className="left-inputs">
                                <input placeholder={t("name")}/>
                                <input placeholder={t("phone_number")}/>
                            </div>
                            <div className="right-inputs">
                                <input placeholder={t("email")}/>
                                <input placeholder={t("country")}/>
                            </div>
                        </div>
                        <input className="text" placeholder={t("tell_us_about_idea")}/>
                        <button onClick={openPopup} className="lets-talk">{t("send")}</button>
                    </div>
                </div>
                {showPopUp ?
                    (<div onClick={() => setShowPopUp(false)} className="pop-up-container">
                        <div className="pop-up-body">
                            <p>{t("pop_up_text")}</p>
                        </div>
                    </div>)
                    : null}
            </div>
        </div>
    )
}

export default Home

