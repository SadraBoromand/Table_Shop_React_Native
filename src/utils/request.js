import axios from "axios";

export const base_url = 'https://listicle.deegeehub.com/api';

export const request = ({ url, method, data }) => {
    return axios({
        method: method || 'get',
        url: `${base_url}${url}`,
        data
    });
}