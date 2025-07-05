#!/bin/bash

# RestaurantTech Startup Script
echo "Starting RestaurantTech Full-Stack Application..."

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "Python3 is required but not installed."
    exit 1
fi

# Start backend server in background
echo "Starting backend server on port 5000..."
cd backend
python3 app.py &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "Starting frontend server on port 8000..."
cd restaurant-saas-website
python3 -m http.server 8000 &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ RestaurantTech is now running!"
echo ""
echo "🔗 Frontend: http://localhost:8000"
echo "🔗 Backend API: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Servers stopped."
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait

