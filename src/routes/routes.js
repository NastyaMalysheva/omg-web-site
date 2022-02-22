import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import PortfolioTests from "../pages/Portfolio/PortfolioTests/PortfolioTests";
import ContactUsModule from "../components/ContactUsModule/ContactUsModule";
import PortfolioCm from "../pages/Portfolio/PortfolioCm/PortfolioCm";
import PortfolioKavapp from "../pages/Portfolio/PortfolioKavapp/PortfolioKavapp";


function RenderRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
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
                    path="/ContactUsModule"
                    element={<ContactUsModule/>}
                />
            </Routes>
        </BrowserRouter>


    )
}

export default RenderRoute
