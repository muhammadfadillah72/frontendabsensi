import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const Profile = () => {
    const [employee, setEmployee] = useState("");
    const [nip, setNip] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [tempatLahit, setTempatLahir] = useState("");
    // const [tanggalLahir, setTanggalLahir] = useState("");
    // const [jenisKelamin,setJenisKelamin] = useState("");
    // const [number,setNumber] = useState("");
    // const [alamat,setAlamat] = useState("");
    // const [agama,setAgama] = useState("");
    // const [setatus,setSetatus] = useState("");
    // const [jabatan,setJabatan] = useState("");
    // const [foto, setFoto] = useState(null);
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();
    const {id} = useParams();

  useEffect(() => {
    const getEmployeeById = async () => {
        try {
            const response =  await axios.get(`http://localhost:5000/employee/${id}`);
            setEmployee(response.data);
            setNip(response.data.nip);
            setNamaLengkap(response.data.nama_lengkap);
            setTempatLahir(response.data.tempat_lahir);
            // setTanggalLahir(moment(response.data.tanggal_lahir).format('DD-MM-YYYY'));
            // setJenisKelamin(response.data.jenis_kelamin);
            // setNumber(response.data.no_telepon)
            // setAlamat(response.data.alamat);
            // setAgama(response.data.agama);
            // setSetatus(response.data.setatus);
            // setJabatan(response.data.jabatan);
            // setFoto(response.data.foto);

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    getEmployeeById();
}, [id]);

  return (
    <div>
    <div className="tile is-parent">
        <div className="card tile is-child">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon"><i className="mdi mdi-account default"></i></span>
              Profile
            </p>
          </header>
          <div className="card-content">
            <div className="is-user-avatar image has-max-width is-aligned-centered">
              <img src={employee.foto} alt="" />
            </div>
            <div className="field">
              <label className="label">NIP</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={nip.nip} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Nama Lengkap</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={namaLengkap.nama_lengkap} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Tempat Lahir</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={tempatLahit.tempat_lahit} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Lahir</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={moment(employee.tanggal_lahir).format('DD/MM/YYYY')} className="input is-static"/>
              </div>
            </div>
             <div className="field">
              <label className="label">Jenis Kelamin</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.jenis_kelamin} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Nomor Telepon</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.no_telepon} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.alamat} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Agama</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.agama} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Status</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.setatus} className="input is-static"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Jabatan</label>
              <div className="control is-clearfix">
                <input type="text" readOnly value={employee.jabatan} className="input is-static"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile