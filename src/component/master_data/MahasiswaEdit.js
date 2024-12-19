import './Mahasiswa.css';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function MahasiswaEdit() {
    const { id } = useParams();

    const [formValue, setformValue] = React.useState({
        mhs_nim: '',
        mhs_nama: ''
    });

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/api/v1/mahasiswa?mhs_nim='+id);
        //get response data
        const data = await response.data.data[0];
        //assign response data to state "formValue"
        setformValue(data); 
        console.log(data);

    }

    const handleChange = (event) => {
            setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async() => {
        const FormDataInput = new FormData();
        FormDataInput.append("mhs_nim", formValue.mhs_nim)
        FormDataInput.append("mhs_nama", formValue.mhs_nama)
        alert('Data berhasil diubah')
        try {
            const response = await axios({
                method: "PUT",
                url: "http://localhost:8000/api/v1/mahasiswa/update"+id,
                data: FormDataInput,
                headers: { "Content-Type": "application/json" },
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
                    Edit Data Mahasiswa
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="mhs_nim"
                        placeholder="enter ID"
                        value={formValue.mhs_nim}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="mhs_nama"
                        placeholder="enter a Nama"
                        value={formValue.mhs_nama}
                        onChange={handleChange}
                    /><br/><br/>
                    <button type="submit" className='btn btn-primary'>Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    );
        
}

export default MahasiswaEdit;