import axios from "axios";

export const ListNoticias = async () => {
    const response = await axios.get('http://192.168.1.10:5000/articles')
    const datos = await response.data
    return datos
}


