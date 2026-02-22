# Real-Time Device Tracker with Node.js, Socket.io & Leaflet

A real-time location tracking web application built using **Node.js**, **Express**, **Socket.io**, and **Leaflet.js**.  
This app allows multiple users to share their live location and see each other on an interactive map in real time.

<img width="1710" height="1075" alt="Screenshot 2026-02-23 at 00 57 11" src="https://github.com/user-attachments/assets/1bf7c9a0-ef02-4f7c-ac70-b76555eefa22" />

---

## Features

- Real-time location sharing using WebSockets
- Live map visualization with Leaflet
- Multi-user tracking support
- Automatic marker updates
- Remove markers when users disconnect
- Works on desktop & mobile browsers
- Low-latency updates

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Realtime Communication:** Socket.io
- **Frontend Map:** Leaflet.js
- **Template Engine:** EJS
- **Styling:** CSS
- **Geolocation:** Browser Geolocation API

---

## Project Structure

```
realtime-tracker/
├── app.js
├── package.json
├── package-lock.json
├── .env
├── public
│ ├── css
│ │ └── style.css
│ └── js
│ └── script.js
├── views
│ └── index.ejs
└── readme.md
```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

Create a .env file in the root directory:

```env
PORT=3000
```

### 4. Run the Server

```bash
npx nodemon app.js
```

### 5. Open in Browser

Open your browser and visit:

```
http://localhost:3000
```

## How It Works

### Backend (Node.js + Socket.io)

- The server listens for user connections.
- When a user sends location data, it is broadcast to all connected users.
- When a user disconnects, their marker is removed.

### Frontend (Leaflet + Socket.io)

- Uses the browser's Geolocation API to get live coordinates.
- Sends location data via Socket.io.
- Displays markers on the map using Leaflet.
- Updates markers in real time.

## Support

If you like this small but cool project, give it a ⭐ on GitHub!
