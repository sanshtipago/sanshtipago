import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Добредојдовте во Сан Штипаго</h1>
                </header>
                <p className="App-intro">Ова страна ќе биде за Штип.</p>
            </div>
        );
    }
}

export default App;
