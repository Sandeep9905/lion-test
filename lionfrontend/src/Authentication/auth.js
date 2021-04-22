import axios from 'axios';
import { apiCall } from '../apiservice/apiCall';
import jwt_decode from 'jwt-decode';



export function authUser(userData) {
    return new Promise((resolve, reject) => {
        return apiCall('post', 'http://localhost:5000/signin', userData)
            .then(async (res) => {
                localStorage.setItem("jwtToken", res.data);
                let data = jwt_decode(res.data)
                let id = JSON.parse(data.id);
                let userid = id.$oid;
                localStorage.setItem('kkss', userid)
                setTokenHeaders(res.data);
                resolve(res.data);
            })
            .catch((e) => {
                reject(e);//it will indicate that api call failed
            });
    })
}


function setTokenHeaders(token) {
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["x-access-token"];
    }
}


