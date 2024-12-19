import './Trainer.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TrainerEdit() {
    const { id } = useParams();

    // Define state
    const [formValue, setFormValue] = useState({
        id: '',
        nama: '',
        email: '',
        password: '',
        nohp: '',
        status: ''
    });

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/trainer/${id}`);
            const data = response.data.data;
            setFormValue(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error as needed
        }
    };

    // Handle input changes
    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put("http://localhost:8000/api/v1/trainer/update", formValue);
            console.log(response.data);
            alert('Data berhasil diubah');
        } catch (error) {
            console.error('Error updating data:', error);
            alert('Gagal mengubah data');
        }
    };

    return (
        <div className="card">
            <div className="container">
                <div className="Titel">
                    Edit Data Trainer
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                    <input
                            type="text"
                            name="id"
                            placeholder="Enter Id"
                            value={formValue.id}
                            onChange={handleChange}
                        /><br /><br />
                        <input
                            type="text"
                            name="nama"
                            placeholder="Masukkan Nama"
                            value={formValue.nama}
                            onChange={handleChange}
                        /><br/><br/>
                        <input
                            type="text"
                            name="email"
                            placeholder="Masukkan Email"
                            value={formValue.email}
                            onChange={handleChange}
                        /><br/><br/>
                        <input
                            type="text"
                            name="password"
                            placeholder="Masukkan Password"
                            value={formValue.password}
                            onChange={handleChange}
                        /><br/><br/>
                        <input
                            type="text"
                            name="nohp"
                            placeholder="Masukkan No. HP"
                            value={formValue.nohp}
                            onChange={handleChange}
                        /><br/><br/>
                        <input
                            type="text"
                            name="status"
                            placeholder="Masukkan Status"
                            value={formValue.status}
                            onChange={handleChange}
                        /><br/><br/>
                        <button type="submit" className='btn btn-primary'> Simpan </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrainerEdit;