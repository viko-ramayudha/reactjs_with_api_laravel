import React, { Component } from 'react';
import '../component/profile/profile';
import DataUser from '../controllers/UserControllers';
import DataOwner from '../controllers/OwnerControllers';

class UserList extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <div className="Titel">
                        UserList
                    </div>
                    {/* <hr></hr> */}
                    <div className="conten">
                        <h2>Data Owner</h2>
                        <DataOwner/>
                        <hr></hr>
                        <h2>Data Pengguna</h2>
                        <DataUser/>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;