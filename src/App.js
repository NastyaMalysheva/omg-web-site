import './App.scss';
import Header from "./components/Header/Header";
import RenderRoute from "./routes/routes";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
                <div className="container">
                    <RenderRoute/>
                </div>
            <Footer/>
        </div>
    );
}

export default App;
