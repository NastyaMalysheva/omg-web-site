import React from "react"
import {Routes, Route} from "react-router";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import PortfolioTests from "../pages/Portfolio/PortfolioTests/PortfolioTests";
import PortfolioCm from "../pages/Portfolio/PortfolioCm/PortfolioCm";
import PortfolioKavapp from "../pages/Portfolio/PortfolioKavapp/PortfolioKavapp";
import Contacts from "../components/Contacts/Contacts";


function RenderRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route
                path="/home"
                element={<Home/>}
            />
            <Route
                path="/portfolio"
                element={<Portfolio/>}
            />
            <Route
                path="/portfolioKavapp"
                element={<PortfolioKavapp/>}
            />
            <Route
                path="/portfolioCm"
                element={<PortfolioCm/>}
            />
            <Route
                path="/portfolioTests"
                element={<PortfolioTests/>}
            />
            <Route
                path="/Contacts"
                element={<Contacts/>}
            />
        </Routes>
    )
}

export default RenderRoute;
