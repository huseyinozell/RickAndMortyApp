import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';




/**
 * You can fetch multiple episodes or single episode using one endpoint 
 * @param {*} episodeIds 
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




