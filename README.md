SWMS Express API Server
Overview
This project implements a RESTful API server using Express.js that serves GeoJSON data from a PostgreSQL database. The server is designed to handle geospatial data stored in PostGIS format and convert it to GeoJSON for client consumption.

Project Structure
dao.mjs - Data Access Object for PostgreSQL interactions
server.mjs - Express server configuration and routes
output.geojson - Sample GeoJSON output file
Features
PostgreSQL database connection with PostGIS support
GeoJSON data transformation and serving
CORS enabled for cross-origin requests
No-cache headers for real-time data updates
Error handling and logging
Prerequisites
Node.js (latest LTS version)
PostgreSQL with PostGIS extension
npm or yarn package manager
Installation
Clone the repository
Install dependencies:
Configure database connection in dao.mjs:
Project Components
Data Access Object (dao.mjs)
Handles database connections and queries using the pg module. The getGeoData function:

Establishes a PostgreSQL connection
Executes a PostGIS query to fetch and transform pipe data into GeoJSON
Returns a structured GeoJSON FeatureCollection
Express Server (server.mjs)
Configures the HTTP server and defines API endpoints:

Sets up CORS middleware
Implements a GET endpoint at '/'
Handles error responses
Configures no-cache headers for real-time data
API Endpoint
GET /
Returns a GeoJSON FeatureCollection containing pipe data with:

Geometric properties (MultiLineString coordinates)
Pipe properties (id, diameter, leak probability)
Running the Server
Start the server with:

The server will run on http://localhost:3000

Dependencies
Project dependencies are listed in package.json:

express: Web server framework
pg: PostgreSQL client
cors: Cross-origin resource sharing middleware
Development Dependencies
eslint: Code linting
prettier: Code formatting
Other development tools as specified in package.json
License
ISC License