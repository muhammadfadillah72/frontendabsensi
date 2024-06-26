import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/user', {
                username : username,
                email : email,
                password : password,
                confPassword : confPassword,
                role : role
            });
            navigate("/users");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    
  return (
    <div>
        <h1 className='title'>User</h1>
        <h2 className='subtitle'>Tambah User</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveUser}>
                        <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                            <label className='label'>Username</label>
                            <div className="control">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Email</label>
                            <div className="control">
                                <input 
                                    type="email" 
                                    className="input" 
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Password</label>
                            <div className="control">
                                <input 
                                    type="password" 
                                    className="input" 
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Konfirmasi Password</label>
                            <div className="control">
                                <input 
                                    type="password" 
                                    className="input" 
                                    placeholder='Konfirmasi Password'
                                    value={confPassword}
                                    onChange={(e) => setConfPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Role</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
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

export default FormAddUser