import React, { useState, useEffect } from 'react';
import { makeCall } from './apiservice/apiCall';
import Navbar from './Navbar';

export default function EditUser(props) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const [address, setAddress] = useState('');
    const [addr, setAddr] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        getAllData()
    }, []);

    function getAllData() {
        let userid = localStorage.getItem('kkss');
        setId(userid)
        makeCall('get', `http://localhost:5000/profile/${userid}`)
            .then(res => {
                setData(res.data)
                setAddr(res.data.address);
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (address !== '') {
            data.address.push(address)
        }
        makeCall('put', `http://localhost:5000/updateuser/${id}`, data)
            .then(res => {
                console.log('edited')
                setAddress('')
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <>
            <Navbar />
            <div>
                <div className="container">
                    <div className="edit-box">
                        <h1>Edit Profile</h1>
                        <form class="row g-3" onSubmit={handleSubmit}>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email"
                                    class="form-control"
                                    name="email"
                                    id="inputEmail4"
                                    value={data.email}
                                    onChange={handleChange}
                                    readOnly />
                            </div>
                            <div class="col-md-6">
                                <label for="username" class="form-label">Username</label>
                                <input type="text"
                                    name="username"
                                    class="form-control"
                                    id="username"
                                    value={data.username}
                                    onChange={handleChange} />
                            </div>
                            {loading ? <div>Loading...</div> : <div>
                                {addr.map(res => (
                                    <div className="col-12">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text"
                                            name="address"
                                            value={res}
                                            class="form-control"
                                            onChange=''
                                            id="address" />
                                    </div>
                                ))}
                            </div>}



                            <div><button className="btn btn-secondary" onClick={() => setShow(true)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                            </svg> address</button></div>
                            {show ? <div className="col-12">
                                <label for="address" class="form-label">Add New Address</label>
                                <input type="text"
                                    name="addres"
                                    value={address}
                                    class="form-control"
                                    onChange={(event) => setAddress(event.target.value)}
                                    id="address" />
                            </div> : <div></div>}

                            <div className="col-12">
                                <label for="phone" class="form-label">Profile Pic URL</label>
                                <input type="text"
                                    name="avatar"
                                    value={data.avatar}
                                    class="form-control"
                                    onChange={handleChange}
                                    id="phone" />
                            </div>
                            <div className="col-12">
                                <label for="phone" class="form-label">Phone No.</label>
                                <input type="text"
                                    name="mob"
                                    value={data.mob}
                                    class="form-control"
                                    onChange={handleChange}
                                    id="phone" />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                        </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                                <button style={{ marginLeft: '10px' }} type="button" class="btn btn-primary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}