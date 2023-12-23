import axios from 'axios';

let token = sessionStorage.getItem('userToken')

const tokenInstance=axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        authorisation: 'Authorization'+token,
        content: 'application/json'
    }
});

const loginInstance=axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        authorisation: 'Authorization'+token,
        content: 'application/json'
    }
});


module.exports = {tokenInstance}