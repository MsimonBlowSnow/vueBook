import $http from 'axios'

//配置请求的根路径
// $http.defaults.baseURL = "http:/localhost:3000/api/v1/book";
$http.interceptors.request.use(config=>{
    const token =  window.localStorage.getItem('bookToken');
    token && (config.headers.Authorization = token);        
    return config;
})

$http.interceptors.response.use(config=>{
    return config;
})
export default $http;