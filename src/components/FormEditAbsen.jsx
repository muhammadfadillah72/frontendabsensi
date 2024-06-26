import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const FormEditAbsen = () => {
    const [periodeAbsen, setPeriodeAbsen] = useState("");
    const [tanggalAbsen, setTanggalAbsen] = useState("");
    const [waktuPulang, setWaktuPulang] = useState("");
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getAbsenById = async () => {
            try {
                const response =  await axios.get(`http://localhost:5000/absen/${id}`);
                setPeriodeAbsen(response.data.periode_absen);
                setTanggalAbsen(response.data.tanggal_absen);
                setWaktuPulang(response.data.waktu_pulang);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getAbsenById();
    }, [id]);

    const updateabsen = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/absen/${id}`, {
                periode_absen : periodeAbsen,
                tanggal_absen : tanggalAbsen,
                waktu_pulang : waktuPulang,
            });
            navigate("/absenList");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
        <h1 className='title'>Absen</h1>
        <h2 className='subtitle'>Tambah Absen Pulang</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={updateabsen}>
                        <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                            <label className='label'>Periode Absen</label>
                            <div className="control">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder='Periode Absen'
                                    value={periodeAbsen}
                                    onChange={(e) => setPeriodeAbsen(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="field">
                                <label className='label'>Tanggal Absen</label>
                                <div className="control">
                                    <input 
                                        type="date" 
                                        value={tanggalAbsen}
                                        onChange={(e) => setTanggalAbsen(e.target.value)}
                                        readOnly
                                    />
                                </div>
                            </div>
                        <div className="field">
                            <label className='label'>Waktu Pulang</label>
                            <div className="control">
                                <input 
                                    type="time" 
                                    className="input" 
                                    value={waktuPulang}
                                    onChange={(e) => setWaktuPulang(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type='submit' className='button is-success'>Simpan</button>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditAbsen