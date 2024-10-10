import axios from 'axios';

const API_BASE_URL = '/api/events';

const EventsAPI = {
  getAllEvents: async () => {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  },
  getEventsByLocation: async (location) => {
    const response = await axios.get(`${API_BASE_URL}/location/${location}`);
    return response.data;
  },
};

export default EventsAPI;
