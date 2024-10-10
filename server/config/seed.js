import { pool } from './database.js';

const seedData = async () => {
  try {
    // Insert locations
    await pool.query(`
      INSERT INTO locations (name) VALUES 
      ('Echo Lounge'),
      ('House of Blues'),
      ('Pavilion'),
      ('American Airlines Arena')
      ON CONFLICT DO NOTHING;
    `);

    // Insert events
    await pool.query(`
      INSERT INTO events (title, location, date, time, remaining, image) VALUES 
      ('Live Concert at Echo Lounge', 'Echo Lounge', '2024-11-01', '19:00:00', '3 days', '/images/concert.jpg'),
      ('Jazz Night at House of Blues', 'House of Blues', '2024-11-10', '20:00:00', '5 days', '/images/jazz.jpg'),
      ('Outdoor Festival at Pavilion', 'Pavilion', '2024-12-15', '14:00:00', '1 month', '/images/festival.jpg'),
      ('Basketball Game at American Airlines Arena', 'American Airlines Arena', '2024-10-20', '18:00:00', '1 day', '/images/basketball.jpg')
      ON CONFLICT DO NOTHING;
    `);

    console.log('Data seeded successfully.');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    pool.end(); // Close the database connection
  }
};

// Run the seed function
seedData();
