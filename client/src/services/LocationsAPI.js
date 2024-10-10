import axios from 'axios';

const API_BASE_URL = '/api/locations';

const LocationsAPI = {
  getAllLocations: async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  }
};

export default LocationsAPI;
