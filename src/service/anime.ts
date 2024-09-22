import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function topAnime(){
    try {
        const response = await axios.get(`${URL}/top/anime?limit=5`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}