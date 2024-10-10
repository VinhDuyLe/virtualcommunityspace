import axios from 'axios';

const API_BASE_URL = 'http://localhost:5174/api/events'; // Ensure this is correct

const EventsAPI = {
  getAllEvents: async () => {
    const response = await axios.get(API_BASE_URL); // API call
    return response.data; // Return the data from API
  }
};

export default EventsAPI;
