import axios from "axios";

export function requestGetUser() {
    return axios.request({
        method: 'GET',
        url: 'https://my-json-server.typicode.com/vsaran93/demo/user',
    });
}