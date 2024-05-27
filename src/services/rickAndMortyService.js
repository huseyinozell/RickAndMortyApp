import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';


/**
 * 
 * @param {*} idList 
 * @param {*} url 
 * @returns 
 */
export const fetchData = async (idList, url) => {
    const EPISODE_API_URL = API_BASE_URL + url;
    try {
        const response = await axios.get(`${EPISODE_API_URL}${idList}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};




