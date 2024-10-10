import { pool } from '../config/database.js';

export const getAllLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT location FROM events');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
