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

export async function allTopAnime(pageNumber: number) {
  try {
    const response = await axios.get(`${URL}/top/anime?page=${pageNumber}`);
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

export async function allThisSeasonAnime(pageNumber: number) {
  try {
    const response = await axios.get(`${URL}/seasons/now?page=${pageNumber}`);
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

export async function allUpcomingSeasonAnime(pageNumber: number) {
  try {
    const response = await axios.get(`${URL}/seasons/upcoming?page=${pageNumber}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function searchAnime(keyword: string, page: number){
  try {
    const response = await axios.get(`${URL}/anime?q=${keyword}&page=${page}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAnimeById(id: string){
  try {
    const response = await axios.get(`${URL}/anime/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAnimeGenre(){
  try {
    const response = await axios.get(`${URL}/genres/anime`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSeasonList(){
  try {
    const response = await axios.get(`${URL}/seasons`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDynamicSeasonAnime(year: number, season: string, page: number){
  try {
    const response = await axios.get(`${URL}/seasons/${year}/${season}?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTodayAired(page: number){
  try {
    const response = await axios.get(`${URL}/schedules?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

