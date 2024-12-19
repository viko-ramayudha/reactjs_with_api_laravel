// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './component/menu/menu';
import Home from './component/home/home';
import Profile from './component/profile/profile';
import Contact from './component/contact/contact';
import Documentation from './component/documentation/documentation';
import UserList from './views/UserList';
import TrainerEdit from './component/trainer/TrainerEdit';
import TrainerDelete from './component/trainer/TrainerDelete';
import DataUser from './component/users/User';
import UserAdd from './component/users/UserAdd';
import UserDelete from './component/users/UserDelete';
import UserEdit from './component/users/UserEdit';
import DataPelanggan from './component/pelanggan/Pelanggan';
import PelangganAdd from './component/pelanggan/PelangganAdd';
import PelangganEdit from './component/pelanggan/PelangganEdit';
import PelangganDelete from './component/pelanggan/PelangganDelete';
import DataMahasiswa from './component/master_data/Mahasiswa';
import MahasiswaAdd from './component/master_data/MahasiswaAdd';
import MahasiswaEdit from './component/master_data/MahasiswaEdit';
import MahasiswaDelete from './component/master_data/MahasiswaDelete';
import DataTrainer from './component/trainer/Trainer';
import TrainerAdd from './component/trainer/TrainerAdd';


function App() {
  return (
    <Router>
      <div className="app-header">
        <Menu/>
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/documentation" element={<Documentation/>} />
          <Route path="/userlist" element={<UserList/>} />
          <Route path="/datamahasiswa" element={<DataMahasiswa/>} />
          <Route path="/datamahasiswa_add" element={<MahasiswaAdd/>} />
          <Route path="/datamahasiswa_edit/:id" element={<MahasiswaEdit/>} />
          <Route path="/datamahasiswa_delete/:id" element={<MahasiswaDelete/>} />
          <Route path="/datatrainer" element={<DataTrainer/>} />
          <Route path="/datatrainer_add" element={<TrainerAdd/>} />
          <Route path="/datatrainer_edit/:id" element={<TrainerEdit/>} />
          <Route path="/datatrainer_delete/:id" element={<TrainerDelete/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
