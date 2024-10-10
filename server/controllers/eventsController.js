import { pool } from '../config/database.js';

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get event by location
export const getEventsByLocation = async (req, res) => {
  const { location } = req.params;
  try {
    const result = await pool.query('SELECT * FROM events WHERE location = $1', [location]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events for location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
