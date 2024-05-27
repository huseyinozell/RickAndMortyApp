import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * You can fetch multiple episodes or single episode using one endpoint 
 * @param {*} episodeIds 
 * @returns 
 */
export const fetchEpisodes = async (episodeIds) => {
    const EPISODE_API_URL = API_BASE_URL + '/episode/';
    try {
        const response = await axios.get(`${EPISODE_API_URL}${episodeIds}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};


/**
 * You can fetch multiple characters or single character using one endpoint
 * @param {*} characterIds 
 * @returns 
 */
export const fetchCharactersById = async (characterIds) => {
    const CHARACTER_API_URL = API_BASE_URL + '/character/';
    try {
        const response = await axios.get(`${CHARACTER_API_URL}${characterIds}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};


