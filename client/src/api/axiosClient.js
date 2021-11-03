import axios from "axios"

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
})

const request = config => config
const response = response => response
const error = error => {
  throw error
}

axiosClient.interceptors.request.use(request)

axiosClient.interceptors.response.use(response, error)

export default axiosClient
