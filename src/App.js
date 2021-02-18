import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Service";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Service/>
            <Footer/>
        </div>
    );
}

export default App;
