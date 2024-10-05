import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function topAnime() {
  try {
    const response = await axios.get(`${URL}/top/anime?limit=6`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function allTopAnime() {
  try {
    const response = await axios.get(`${URL}/top/anime`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function thisSeasonAnime() {
  try {
    const response = await axios.get(`${URL}/seasons/now?limit=6`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function allThisSeasonAnime() {
  try {
    const response = await axios.get(`${URL}/seasons/now`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function upcomingSeasonAnime() {
  try {
    const response = await axios.get(`${URL}/seasons/upcoming?limit=6`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function allUpcomingSeasonAnime() {
  try {
    const response = await axios.get(`${URL}/seasons/upcoming`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function searchAnime(keyword: string){
  try {
    const response = await axios.get(`${URL}/anime?q=${keyword}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}
