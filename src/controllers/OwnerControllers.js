import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const columns =  [
    {
        name: 'Owner',
        selector: row => row.owner,
        sortable: true
    },
    {
        name: 'Alamat',
        selector: row => row.alamat,
        sortable: true
    },
];

const data = [
    {
        id: 1,
        owner: 'Mukhamad Viko Ramayudha',
        alamat: 'Pasuruan',
    },
    {
        id: 2,
        owner: 'Fathian Alfarezi',
        alamat:'Malang'
    },
];

class DataOwner extends Component {
    render() {
        return (
            <DataTable
            columns={columns}
            data={data}
            // pagination
            />
            
        );
    }
}

export default DataOwner;