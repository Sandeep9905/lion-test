import axios from 'axios';

const tokens = localStorage.getItem('jwtToken');


// sending token through header...
const authAxios = axios.create({
    headers: {
        "x-access-token": `Bearer ${tokens}`
    }
});

export function makeCall(method, path, data) {
    return new Promise(async (resolve, reject) => {
        return await authAxios[method](path, data)
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                return reject(err);
            });
    });
}

export function apiCall(method, path, data) {
    return new Promise(async (resolve, reject) => {
        return await axios[method](path, data)
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                return reject(err);
            });
    });
}


