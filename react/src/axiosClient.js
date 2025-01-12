import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// Thêm interceptor cho các yêu cầu (request)
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");  // Sửa lại từ localStorage.get() thành localStorage.getItem()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Thêm interceptor cho các phản hồi (response)
axiosClient.interceptors.response.use(  
    (response) => {
        return response;
    }, 
    (error) => {
        try {
            const { response } = error;
            if (response && response.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            }
        } catch (err) {
            console.error(err);
        }
        throw error;
    }
);

export default axiosClient;
