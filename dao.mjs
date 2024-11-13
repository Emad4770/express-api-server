import pg from "pg";
import fs from "fs";

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

    const res = await client.query(`
        SELECT jsonb_build_object(
          'type', 'FeatureCollection',
          'features', jsonb_agg(
            jsonb_build_object(
              'type', 'Feature',
              'geometry', ST_AsGeoJSON(geom)::jsonb,
              'properties', to_jsonb(row) - 'geom'
            )
          )
        ) AS geojson
        FROM (SELECT * FROM public.pipes) row;
      `);

    const geoJSON = res.rows[0].geojson;

    fs.writeFileSync(
      "./output/output.geojson",
      JSON.stringify(geoJSON, null, 2)
    );
    console.log("GeoJSON data written to output.geojson");

    return geoJSON;
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
}

// getGeoData().then((data) => {
//   console.log(data);
//   disconnect();
// });

export default { getGeoData };
