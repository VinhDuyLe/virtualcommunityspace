import express from 'express';
import { getAllEvents, getEventsByLocation } from '../controllers/eventsController.js';

const router = express.Router();

// Route to get all events
router.get('/events', getAllEvents);

// Route to get events by location
router.get('/events/location/:location', getEventsByLocation);

export default router;
