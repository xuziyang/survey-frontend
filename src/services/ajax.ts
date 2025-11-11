import axios from "axios";

const instance = axios.create({
    timeout: 10 * 1000,
});

instance.interceptors.response.use(res => {
    return res.data;
}, err => {
    return Promise.reject(err);
});

export default instance;

export type ResType = {
    code: number
    msg?: string
    data?: any
}