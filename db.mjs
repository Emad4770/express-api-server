// Import the pg module
import pg from 'pg';

// Database connection details
const client = new pg.Client({
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'postgres'
});

async function connect() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database', err.stack);
    }
}

async function disconnect() {
    try {
        await client.end();
        console.log('Disconnected from the database');
    } catch (err) {
        console.error('Error disconnecting from the database', err.stack);
    }
}


export { connect, disconnect };