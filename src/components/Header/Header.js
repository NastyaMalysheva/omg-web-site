import React from "react";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../../assets/fonts/mr_vlashu_vlashu.otf";

import "./header.scss"


function Header() {

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    return (
        <div className="header">
            <span className="logo">OMG<span className="second-part">soft</span></span>
            <div className="right-side">
                <div className="list">
                    <NavLink to="/Home" className="button">{t("home")}</NavLink>
                    <NavLink to="/portfolio" className="button">{t("portfolio")}</NavLink>
                    <NavLink to="/contacts" className="button">{t("contacts")}</NavLink>
                </div>
                <div className="languages">
                    <button className="languages-button" onClick={() => changeLanguage("en")}>EN</button>
                    <p>/</p>
                    <button className="languages-button" onClick={() => changeLanguage("ru")}>RU</button>
                </div>
            </div>
        </div>
    )
}

export default Header