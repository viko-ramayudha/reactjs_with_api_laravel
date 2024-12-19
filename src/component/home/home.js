import React, { Component } from "react";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="card-home">
            <div className="container">
                <div className="Titel">
                    Home
                </div>
                <hr></hr>
                <div className="contenth">
                    Selamat Datang Di Pelatihan React JS
                </div>
            </div>
        </div>
        );
    }
}

export default Home;