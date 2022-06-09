import axios from "axios";
const KEY = 'https://62989076de3d7eea3c6ab55d.mockapi.io/todoAPI/v1/'
const api = `https://www.mecallapi.com/api`

export const API = async () => {
    try{
        const {data} = await axios.get(`${KEY}/inbox`)
        return data
    }catch (error) {
        return error
    }
}
