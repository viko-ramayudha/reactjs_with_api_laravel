import './Trainer.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TrainerDelete() {
    const { id } = useParams();

    // Define state
    const [formValue, setFormValue] = useState({
        id: '',
    });

    // useEffect hook
    useEffect(() => {
        // Panggil method "fetchData"
        fetchData();
    }, []);

    // Function "fetchData"
    const fetchData = async () => {
        try {
            // Fetching data
            const response = await axios.get(`http://localhost:8000/api/v1/trainer/${id}`);
            const data = response.data.data;
            // Assign response data to state "formValue"
            setFormValue({
                id: data.id,
            });
            console.log(data);
        } catch (error) {
            console.log(error);
            alert('Data tidak ditemukan atau sudah dihapus!');
        }
    };

    // Handle input changes (jika diperlukan)
    const handleChange = (event) => {
        // Tidak perlu melakukan perubahan pada input, karena hanya menampilkan ID
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Lakukan permintaan DELETE
            const response = await axios.delete(`http://localhost:8000/api/v1/trainer/delete?id=${id}`);
            console.log(response);
            alert('Data berhasil dihapus');
            // Optional: Redirect to another page or update UI as needed
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('Gagal menghapus data');
        }
    };

    return (
        <div className="card">
            <div className="container">
                <div className="Titel">
                    Hapus Data Trainer {id}
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="id"
                            placeholder="ID Trainer"
                            value={formValue.id}
                            onChange={handleChange}
                            readOnly // Jika input ID hanya untuk ditampilkan
                        /><br /><br />
                        <button type="submit" className='btn btn-danger'> Hapus </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrainerDelete;