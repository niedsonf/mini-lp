import axios from "axios"

const BASE = import.meta.env.VITE_API_IMG

export const APIimg = {
    upload: async (formData) => {
        const response = await axios.post(`${BASE}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': '$2a$08$gegyzZLOl8GtBFu0LaKxjesn4uISWco3RWazqcOz3sk4sGLoybI2C'
            }
        })
        return response.data
    },
    delUpload: async (id) => {
        const response = await axios.delete(`${BASE}/upload/${id}`)
        return response.data
    }
}