import './User.css';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function UserEdit() {
    const { id } = useParams();

    const [formValue, setformValue] = React.useState({
        nama: '',
        alamat: '',
        role: ''
    });

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await axios.get('https://localhost:7091/api/Users/GetUserById?id_user='+id);
            //get response data
            const data = await response.data.data[0];
            //assign response data to state "formValue"
            setformValue(data); 
            console.log(data);
        } catch(error) {
            console.log(error) 
            console.log(error)
            alert('Data User diubah!!')
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
        FormDataInput.append("nama", formValue.nama)
        // FormDataInput.append("email", formValue.email)
        // FormDataInput.append("password", formValue.password)
        FormDataInput.append("alamat", formValue.alamat)
        FormDataInput.append("role", formValue.role)
        alert('Data berhasil diubah')
        try {
            const response = await axios({
                method: "PUT",
                url: "https://localhost:7091/api/Users/updateUser"+id,
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
                    Delete User
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="id_user"
                        placeholder="enter a ID"
                        value={id}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="nama"
                        placeholder="enter a Nama"
                        value={formValue.nama}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="alamat"
                        placeholder="enter a Alamat"
                        value={formValue.alamat}
                        onChange={handleChange}
                    /><br/><br/>
                    <input
                        type="text"
                        name="role"
                        placeholder="enter a Role"
                        value={formValue.role}
                        onChange={handleChange}
                    /><br/><br/>
                    <button type="submit" className='btn btn-primary'>Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserEdit;