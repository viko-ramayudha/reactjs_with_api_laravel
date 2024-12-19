import './Mahasiswa.css';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function MahasiswaDelete() {
    const { id } = useParams();

    const [formValue, setformValue] = React.useState({
        mhs_nim: '',
        mhs_nama: ''
   });

   React.useEffect(() => {
        fetchData();
   }, []);

   const fetchData = async () => {
    try{
        const response = await axios.get('http://localhost:8000/api/v1/mahasiswa?mhs_nim='+id);
        //get response data
        const data = await response.data.data;
        //assign response data to state "formValue"
        setformValue(data); 
        console.log(data);
    } catch(error) {
        console.log(error) 
        console.log(error)
        alert('Data tidak ditemukan atau sudah dihapus!!')
        }
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
        alert('Data berhasil dihapus')
        try {
            const response = await axios({
                method: "DELETE",
                url: "http://localhost:8000/api/v1/mahasiswa/delete"+id,
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
                    Hapus Data Mahasiswa
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="mhs_nim"
                        placeholder="enter NIM"
                        value={id}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="mhs_nama"
                        placeholder="enter a Nama"
                        value={formValue.mhs_nama}
                        onChange={handleChange}
                    /><br/><br/>
                    <button type="submit" className='btn btn-danger'>Delete</button>
                    <button  className='btn btn-danger' href="/datamahasiswa">Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
        
}

export default MahasiswaDelete;