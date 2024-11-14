# SWMS Express API Server

## Overview
This project implements a RESTful API server using Express.js that serves GeoJSON data from a PostgreSQL database with PostGIS extension. The server converts geospatial data into GeoJSON format for client consumption.

## Project Structure
- **dao.mjs**: Data Access Object for PostgreSQL interactions
- **server.mjs**: Express server configuration and routes
- **output.geojson**: Sample GeoJSON output file

## Features
- PostgreSQL database connection with PostGIS support
- GeoJSON data transformation and serving
- CORS enabled for cross-origin requests
- No-cache headers for real-time data updates
- Error handling and logging

## Prerequisites
- Node.js (latest LTS version)
- PostgreSQL with PostGIS extension
- npm or yarn package manager

## Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure database connection in **dao.mjs**

## Project Components

### Data Access Object (dao.mjs)
- Handles database connections using the `pg` module
- Implements the `getGeoData` function that:
  - Establishes PostgreSQL connection
  - Executes PostGIS query to fetch and transform pipe data
  - Returns GeoJSON FeatureCollection

### Express Server (server.mjs)
- Configures HTTP server with:
  - CORS middleware setup
  - GET endpoint at `/`
  - Error handling
  - No-cache headers for real-time data

## API Usage

### GET /
Returns a GeoJSON FeatureCollection containing:
- Geometric properties (MultiLineString coordinates)
- Pipe properties (id, diameter, leak probability)

**Example response:**
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "MultiLineString",
        "coordinates": [
          [[-75.20, 39.95], [-75.21, 39.96]]
        ]
      },
      "properties": {
        "id": 1,
        "diameter": 1000,
        "leak_probability": 0.05
      }
    }
  ]
}
```

## Running the Server
Start the server:
```bash
npm start
```
The server will run on [http://localhost:3000](http://localhost:3000)

## Dependencies

### Main Dependencies
- `express`: ^4.21.1 - Web server framework
- `pg`: ^8.13.1 - PostgreSQL client
- `cors`: ^2.8.5 - Cross-origin resource sharing middleware

### Development Dependencies
- `nodemon`: ^3.1.7 - Development server with auto-reload
- `eslint`: ^9.14.0 - Code linting
- `prettier`: ^3.3.3 - Code formatting
- Additional ESLint and Prettier configuration packages

## License
ISC License
```
