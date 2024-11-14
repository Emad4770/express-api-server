# SWMS Express API Server

## Overview
This project implements a RESTful API server using Express.js that serves GeoJSON data from a PostgreSQL database with PostGIS extension. The server provides endpoints for accessing both nodes and pipes data in GeoJSON format.

## Project Structure
- [`dao.mjs`](dao.mjs ) - Data Access Object for PostgreSQL interactions
- [`server.mjs`](server.mjs ) - Express server configuration and routes
- [`output/`](output/ ) - Directory containing GeoJSON output files

## Features
- PostgreSQL database connection with PostGIS support
- Separate endpoints for nodes and pipes data
- GeoJSON data transformation
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

3. Configure database connection in [`dao.mjs`](dao.mjs ):
```javascript
const connectionParams = {
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'postgres'
};
```

## API Endpoints

### GET /nodes
Returns GeoJSON data for network nodes (junctions)

### GET /pipes
Returns GeoJSON data for network pipes

Example response format:
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",  // or "LineString" for pipes
        "coordinates": [...]
      },
      "properties": {
        "id": 1,
        "other_properties": "..."
      }
    }
  ]
}
```

## Project Components

### Data Access Object ([`dao.mjs`](dao.mjs ))
- Implements two main functions:
  - [`getNodes()`](dao.mjs ) - Retrieves junction data
  - [`getPipes()`](dao.mjs ) - Retrieves pipe network data

### Express Server ([`server.mjs`](server.mjs ))
- Configures HTTP server with:
  - Two GET endpoints: `/nodes` and `/pipes`
  - CORS middleware
  - Error handling
  - No-cache headers

## Running the Server
```bash
node server.mjs
```
Server runs at `http://localhost:3000`

## Dependencies
- [`express`](/C:/Users/Emad/AppData/Local/Microsoft/TypeScript/5.6/node_modules/@types/express/index.d.ts ): ^4.21.1
- [`pg`](/C:/Users/Emad/AppData/Local/Microsoft/TypeScript/5.6/node_modules/@types/pg/index.d.ts ): ^8.13.1
- [`cors`](/C:/Users/Emad/AppData/Local/Microsoft/TypeScript/5.6/node_modules/@types/cors/index.d.ts ): ^2.8.5
- Development tools (ESLint, Prettier, nodemon)

## License
ISC License