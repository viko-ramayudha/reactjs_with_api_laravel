import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const columns =  [
    {
        name: 'Nama',
        selector: row => row.nama,
        sortable: true
    },
    {
        name: 'Hobi',
        selector: row => row.hobi,
        sortable: true
    },
];

const data = [
    {
        id: 1,
        nama: 'Aditya Agusti Divanto',
        hobi: 'Sepak Bola',
    },
    {
        id: 2,
        nama: 'Radith Ainul Yaqien',
        hobi:'Pencak Silat'
    },
];

class DataUser extends Component {
    render() {
        return (
            <DataTable
            columns={columns}
            data={data}
            pagination
            />
        );
    }
}

export default DataUser;