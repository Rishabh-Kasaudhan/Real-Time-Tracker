# Real-Time Tracker

A real-time location tracking application built with Node.js, Express, Socket.IO, and Leaflet maps.

## Features

- Real-time location sharing between connected users
- Interactive map interface using Leaflet
- Automatic location updates via browser geolocation API
- Live markers showing user positions
- User disconnection handling

## Technologies Used

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Templating**: EJS

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd real-time-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Allow location access when prompted by the browser

4. Your location will be shared in real-time with other connected users on the map

## Project Structure

```
real-time-tracker/
├── app.js                 # Main server file
├── package.json           # Project dependencies and scripts
├── public/                # Static files
│   ├── css/
│   │   └── style.css      # Stylesheet
│   └── js/
│       └── script.js      # Client-side JavaScript
└── views/
    └── index.ejs          # Main HTML template
```

## How It Works

1. **Server Setup**: Express server with Socket.IO integration
2. **Location Tracking**: Browser's geolocation API tracks user position
3. **Real-time Updates**: Socket.IO broadcasts location data to all connected clients
4. **Map Visualization**: Leaflet renders user locations as markers on an interactive map
5. **Connection Management**: Handles user connections and disconnections

## API Events

### Client to Server
- `send-location`: Sends user's current latitude and longitude

### Server to Client
- `receive-location`: Receives location data from other users
- `user-disconnected`: Notifies when a user disconnects

## Development

The project uses `nodemon` for development, which automatically restarts the server on file changes.

## License

ISC