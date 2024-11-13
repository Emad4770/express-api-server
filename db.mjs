// Import the pg module
import pg from "pg";

// Database connection details
const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "admin",
  database: "postgres",
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database", err.stack);
  }
}

async function disconnect() {
  try {
    await client.end();
    console.log("Disconnected from the database");
  } catch (err) {
    console.error("Error disconnecting from the database", err.stack);
  }
}

async function getGeoData() {
  try {
    await connect();
    const res = await client.query(`SELECT id, ST_AsGeoJSON(geom) AS geometry
      FROM public.pipes
      WHERE ST_Intersects(
        geom,
        ST_MakeEnvelope(-180, -90, 180, 90, 4326)  -- Adjust coordinates as needed
      )
      LIMIT 10`);
    return res.rows;
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
}

getGeoData().then((data) => {
  console.log(data);
  disconnect();
});
