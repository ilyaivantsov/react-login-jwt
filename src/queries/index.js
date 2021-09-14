import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const AxiosInstance = (history = null) => {
    let headers = {};

    if (localStorage.token) {
        headers.Authorization = `Bearer ${localStorage.token}`;
    }

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers,
    });

    axiosInstance.interceptors.response.use(
        (response) =>
            new Promise((resolve, reject) => {
                resolve(response);
            }),
        (error) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            if (error.response.status === 403) {
                localStorage.removeItem('token');

                if (history) {
                    history.push('/auth/signin');
                } else {
                    window.location = '/auth/signin';
                }
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        }
    );

    return axiosInstance;
};

