import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="card-contact">
            <div className="container">
                <div className="Titel">
                    Contact
                </div>
                <hr></hr>
                <div className="content">
                    <b className="contt">Developer :</b> Mukhamad Viko Ramayudha <br/>
                    <b className="contt">Email :</b> viko.ramayudha@gmail.com <br/> <a href="mailto:%20viko.ramayudha@gmail.com"></a>
                    <b className="contt">Referensi :</b> https://www.askcoding.com/<br/>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;