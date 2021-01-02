import axios from 'axios';

/*
 * TODO: This method makes a call to the weather API
 * We need to call our new player api once it is ready
 */

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const getPlayerByPlayerId = async (query) => {
    const response = await axios.get(API_URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return response.data;
}