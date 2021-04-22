import React, { useEffect, useState } from 'react';
import { makeCall } from './apiservice/apiCall';
import avatarImage from './images/avatar.webp';

export default function Navbar(props) {
    const [profile, setProfile] = useState('');
    useEffect(() => {
        let userid = localStorage.getItem('kkss');
        makeCall('get', `http://localhost:5000/profile/${userid}`)
            .then(res => {
                debugger;
                setProfile(res.data.avatar)
            }).catch(err => {
                console.log(err)
            })
    }, []);

    const makeWay = () => {
        props.makeLogout();
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Lions Corp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {props.edit && (
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            </ul>
                            <div class="d-flex">
                                <a href='/profile'>
                                    <img className="profile" src={profile || avatarImage} alt="profile"></img>
                                </a>

                            </div>
                            <a style={{ marginLeft: '2em' }} onClick={makeWay} className="btn btn-success">Log out
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}