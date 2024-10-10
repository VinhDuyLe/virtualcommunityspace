import axios from 'axios';

const API_BASE_URL = '/api/events'; // Ensure this is correct

const EventsAPI = {
  getAllEvents: async () => {
    const response = await axios.get(API_BASE_URL); // API call
    return response.data; // Return the data from API
  }
};

export default EventsAPI;
