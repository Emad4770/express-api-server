// Import the pg module
import pg from 'pg';

// Database connection details
const client = new pg.Client({
    host: '127.0.0.1',       // e.g., 'localhost' or the IP of your PostgreSQL server
    port: 5432,                  // default PostgreSQL port
    user: 'postgres',       // your PostgreSQL username
    password: 'admin',   // your PostgreSQL password
    database: 'postgres'    // the name of the database you want to connect to
});

// Async function to connect and query
async function queryDatabase() {
    try {
        // Connect to the database
        await client.connect();
        console.log('Connected to the database');

        // Example query
        const res = await client.query('SELECT * FROM public.pipes LIMIT 10');  // Adjust query as needed
        console.log('Query results:', res.rows);

    } catch (err) {
        console.error('Error querying the database:', err.stack);
    } finally {
        // Close the connection
        await client.end();
        console.log('Disconnected from the database');
    }
}

// Execute the function
queryDatabase();
