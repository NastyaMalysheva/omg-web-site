import React from "react";
import Header from "./components/Header/Header";
import RenderRoute from "./routes/routes";
import {BrowserRouter} from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <RenderRoute/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
