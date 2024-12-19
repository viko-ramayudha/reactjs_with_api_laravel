import React, { useState, useEffect} from 'react';
import'./Trainer.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function DataTrainer () {
    //define state
    const [datatrainer, setDatatrainer] = useState([]);

    //useEffect hook
    useEffect(() => {
        //panggil method "fetchData"
        fectData();
    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:8000/api/v1/trainer');
        //get response data
        const data = await response.data;
        
        //assign response data to state "datamahasiswa"
        setDatatrainer(data);
        console.log(data);
    }

    const columns = [{
        name: 'ID',
        selector: row => row.id,
        sortable: true
    },
    {
        name: 'Nama',
        selector: row => row.nama,
        sortable: true
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true
    },
    {
        name: 'Password',
        selector: row => row.password,
        sortable: true
    },
    {
        name: 'No Hp',
        selector: row => row.no_hp,
        sortable: true
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true
    },
    {
        name: 'Ubah',
        selector: row => <Link to ={"/datatrainer_edit/"+row.id} className="btn btn-primary">Edit</Link>,
        sortable: true
    },
    {
        name: 'Hapus',
        selector: row => <Link to ={"/datatrainer_delete/"+row.id} className="btn btn-danger">Delete</Link>,
        sortable: true
    },

];

    return (
        <div className="card">
            <div className="container">
                <div className="Titel">
                    Data Trainer
                </div>
                <div className="conten">
                    <h2>Data Trainer</h2>
                    <Link to="/datatrainer_add" className="btn btn-primary">+ Data Trainer</Link>
                    <DataTable
                    columns={columns}
                    data={datatrainer.data}
                    pagination/>
                </div>
            </div>
        </div>
    );
}

export default DataTrainer;
