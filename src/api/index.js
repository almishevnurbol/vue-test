import axios from "axios"

const API = axios.create({
    baseURL: "https://data.jsdelivr.com/v1",

    // headers: {
    //     "Access-Control-Allow-Origin": "http://localhost:8080",
    //     "Access-Control-Expose-Headers": "Set-Cookie",
    //     "Access-Control-Allow-Headers": `Origin, X-Requested-With, Access-Control-Expose-Headers,Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Methods, Set-Cookie`,
    //     "Access-Control-Allow-Methods": "GET, OPTIONS, PATCH, POST, PUT, DELETE",
    //     "Access-Control-Allow-Credentials": true,
    // },
})

export default API