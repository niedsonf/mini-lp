import axios from "axios"

const BASE = import.meta.env.VITE_API_MAKE

export const MAKE = {
    webhook: async (nome,telefone,email,linkImg ) => {
        const response = await axios.post(`${BASE}`, {
            nome,telefone,email,linkImg
        })
        return response.data
    }
}