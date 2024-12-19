import React, { Component } from "react";
import './Documentation.css';
import docimg from './documentation.png';

class Documentation extends Component {
    render() {
        return (
            <div className="card">
            <div className="container">
                <div className="Titel">
                    Documentation
                </div>
                <hr></hr>
                <div className="conten-docum">
                    <img src={docimg}></img>
                </div>
            </div>
        </div>
        );
    }
}

export default Documentation;