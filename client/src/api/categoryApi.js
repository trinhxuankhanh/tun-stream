import axiosClient from "./axiosClient"

const data = ["1", "2", "3"]

const categoryApi = {
  getAll: () => {
    return data
  },

  getAllById: () => {},

  updateById: () => {},

  creat: item => {
    data.push(item)

    return true
  },
}

export default categoryApi
