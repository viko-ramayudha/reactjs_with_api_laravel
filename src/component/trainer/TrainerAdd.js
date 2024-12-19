import './Trainer.css';
import axios from 'axios';
import React from 'react';

function TrainerAdd() {
    const [formValue, setformValue] = React.useState({
        
        nama: '',
        email: '',
        password: '',
        no_hp: '',
        status: ''
    });

    const handleChange = (event) => {
        setformValue({
        ...formValue,
        [event.target.name]: event.target.value
    });
    }

    const handleSubmit = async() => {
        const FormDataInput = new FormData();
        
        FormDataInput.append("nama", formValue.nama)
        FormDataInput.append("email", formValue.email)
        FormDataInput.append("password", formValue.password)
        FormDataInput.append("no_hp", formValue.no_hp)
        FormDataInput.append("status", formValue.status)
        alert('Data berhasil disimpan')
        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:8000/api/v1/trainer/create",
                data: FormDataInput,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response)
        } catch(error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <div className="card">
            <div className="container">
                <div className="Titel">
                    Tambah Data Trainer
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                    
                    <input
                        type="text"
                        name="nama"
                        placeholder="enter a Nama"
                        value={formValue.nama}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="email"
                        placeholder="enter a Email"
                        value={formValue.email}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter a Password"
                        value={formValue.password}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="no_hp"
                        placeholder="enter a No HP"
                        value={formValue.no_hp}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="status"
                        placeholder="enter a Status"
                        value={formValue.status}
                        onChange={handleChange}
                    /><br/><br/>
                    <button type="submit" className='btn btn-primary'>Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrainerAdd;