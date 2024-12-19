import React, { Component } from "react";
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="card-prof">
            <div className="container">
                <div className="Titel">
                    Profile
                </div>
                <hr></hr>
                <div className="content">
                    <b className="belajar">Belajar React JS</b> <br/>
                    Membuat website sederhana dengan React JS
                    <br/>
                    <br/>
                    <b className="biodata-dul">Biodata</b>
                </div>
                <div className="biodata-tb">
                    <table>
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td>Mukhamad Viko Ramayudha</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>:</td>
                            <td>Pasuruan, Jawa Timur</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>viko.ramayudha@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Institusi Pendidikan Terakhir</td>
                            <td>:</td>
                            <td>SMK Negeri 1 Pasurua</td>
                        </tr>
                        <tr>
                            <td>Cita-cita</td>
                            <td>:</td>
                            <td>Menjadi Programmer dan Mengabdi kepada Negara (TNI/POLRI)</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;