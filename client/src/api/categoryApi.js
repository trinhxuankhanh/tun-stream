import axiosClient from "./axiosClient"
import db from "./firebase/initStore"

const data = ["1", "2", "3"]

const categoryApi = {
  getAll: () => {
    return data
  },

  getAllById: async () => {
    const snapshot = await db.ref("alo").once("value")
    const dataJSON = await Promise.resolve(snapshot.toJSON())
    return dataJSON
  },

  updateById: () => {},

  creat: item => {
    data.push(item)

    return true
  },
}

export default categoryApi
