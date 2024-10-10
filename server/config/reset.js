import { pool } from './database.js';

console.log("Database connection details:");
console.log("User:", process.env.PGUSER);
console.log("Host:", process.env.PGHOST);
console.log("Database:", process.env.PGDATABASE);

const createTables = async () => {
  try {
    const createEventsTable = `
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        remaining INTERVAL,
        image TEXT
      );
    `;

    const createLocationsTable = `
      CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    await pool.query(createEventsTable);
    await pool.query(createLocationsTable);

    console.log('Tables created successfully.');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    pool.end(); // Close the database connection
  }
};

createTables();
