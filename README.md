# Full-Stack Project - React + Node.js + MongoDB

This is a full-stack application with a React (Vite) frontend and Node.js/Express/MongoDB backend.

## Project Structure

```
cp/
├── backend/          # Node.js + Express + MongoDB backend
│   ├── server.js     # Main server file
│   ├── .env          # Environment variables
│   └── package.json  # Backend dependencies
└── frontend/         # React (Vite) frontend
    ├── src/          # Source files
    └── package.json  # Frontend dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Edit the `.env` file to set your MongoDB connection string
   - Default: `mongodb://localhost:27017/myapp`

4. Start the backend server:
   ```bash
   npm run dev    # Development mode with nodemon
   # OR
   npm start      # Production mode
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## API Endpoints

### Backend Routes

- `GET /` - Welcome message
- `GET /api/test` - Test API endpoint

## Development

### Running Both Servers

You'll need two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Making API Calls from Frontend

The frontend can make API calls to the backend using axios:

```javascript
import axios from 'axios';

// Example API call
axios.get('http://localhost:5000/api/test')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

## Technologies Used

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client

## Next Steps

1. Create MongoDB models in `backend/models/`
2. Add API routes in `backend/routes/`
3. Build React components in `frontend/src/components/`
4. Connect frontend to backend API endpoints
5. Add authentication (JWT)
6. Deploy to production

## Notes

- Backend runs on port 5000
- Frontend runs on port 5173
- Make sure MongoDB is running before starting the backend
- CORS is enabled for cross-origin requests
