# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Port**: 5173
- **Language**: TypeScript

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **Port**: 8000
- **Database**: MongoDB (mongoose)

### Database
- **MongoDB**: Running on port 27017

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running locally or a MongoDB Atlas connection string

### Frontend Setup
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Backend Setup
```bash
cd octofit-tracker/backend
npm install

# Create .env file
cp .env.example .env

# Start the backend
npm run dev
```

Backend will be running on `http://localhost:8000`

### MongoDB Setup
Ensure MongoDB is running on port 27017, or update the connection string in `.env`

```bash
# If running MongoDB locally
mongod --port 27017
```

## Project Structure

```
octofit-tracker/
├── frontend/           # React 19 + Vite frontend
│   ├── src/
│   ├── public/
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/            # Node.js + Express backend
│   ├── src/
│   ├── dist/
│   ├── tsconfig.json
│   └── .env.example
└── README.md
```

## Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Development
```bash
cd backend
npm run dev      # Start with ts-node
npm run build    # Compile TypeScript
npm start        # Run compiled JavaScript
```

## API Integration

The frontend is configured to proxy API requests to the backend:
- Frontend requests to `/api/*` are forwarded to `http://localhost:8000`
- See `vite.config.ts` for proxy configuration

## Next Steps

1. Install dependencies for both frontend and backend
2. Configure MongoDB connection
3. Start all three services (MongoDB, backend, frontend)
4. Begin building OctoFit features!

---

Built with ❤️ using GitHub Copilot Agent Mode
