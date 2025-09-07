# E-commerce Application

A modern e-commerce application with separated frontend and backend for easy deployment.

## Project Structure

```
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   └── services/
│   ├── package.json
│   └── ...
├── backend/           # Node.js/Express backend API
│   ├── models/
│   ├── server.js
│   ├── package.json
│   └── ...
├── package.json       # Root package.json with scripts
└── vercel.json        # Vercel deployment configuration
```

## Features

### Frontend
- React with TypeScript
- Material-UI components
- Authentication context (mock)
- Shopping cart functionality
- Responsive design
- Mock data for standalone deployment

### Backend
- Node.js/Express server
- MongoDB with Mongoose
- JWT authentication
- RESTful API endpoints
- User and product management

## Quick Start

### Install Dependencies
```bash
npm run install:all
```

### Development

#### Frontend Only (Standalone)
```bash
npm run dev:frontend
```
Visit: http://localhost:3000

#### Backend Only
```bash
npm run dev:backend
```
API: http://localhost:5000

#### Full Stack
```bash
# Terminal 1
npm run dev:backend

# Terminal 2
npm run dev:frontend
```

## Deployment

### Frontend (Vercel)
The frontend is configured for Vercel deployment with mock data:
- No backend dependencies
- Standalone React application
- Mock authentication and products

### Backend (Heroku/Railway/Docker)
The backend can be deployed to any Node.js hosting service:
- Heroku
- Railway
- Docker containers
- AWS/GCP/Azure

## Available Scripts

### Root Level
- `npm run build:frontend` - Build frontend for production
- `npm run start:frontend` - Start frontend in production mode
- `npm run start:backend` - Start backend server
- `npm run dev:frontend` - Start frontend in development mode
- `npm run dev:backend` - Start backend in development mode
- `npm run install:frontend` - Install frontend dependencies
- `npm run install:backend` - Install backend dependencies
- `npm run install:all` - Install all dependencies

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## Environment Variables

### Backend
Create `backend/.env`:
```
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Frontend
No environment variables needed for standalone deployment.

## Mock Data

The frontend includes mock data for:
- User authentication
- Product catalog
- Shopping cart functionality

This allows the frontend to be deployed independently without a backend.

## API Endpoints (Backend)

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## Technologies Used

### Frontend
- React 19
- TypeScript
- Material-UI
- React Router DOM
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS

## License

MIT