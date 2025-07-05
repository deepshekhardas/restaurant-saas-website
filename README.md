# RestaurantTech - Restaurant SaaS Website

A complete full-stack restaurant SaaS platform with frontend website and backend API.

## Project Structure

```
restaurant-saas-website/
├── restaurant-saas-website/    # Frontend (HTML/CSS/JS)
│   ├── index.html             # Main landing page
│   ├── css/
│   │   └── styles.css         # Custom styles
│   ├── js/
│   │   └── main.js           # Frontend JavaScript with API integration
│   ├── pages/                # Additional pages
│   │   ├── account.html      # Sign in/Sign up page
│   │   ├── contact.html      # Contact form page
│   │   ├── features.html     # Features page
│   │   ├── pricing.html      # Pricing page
│   │   └── templates.html    # Templates page
│   └── images/               # Image assets
├── backend/                   # Backend API (Flask)
│   ├── app.py                # Main Flask application
│   ├── requirements.txt      # Python dependencies
│   └── data/                 # Data storage (JSON files)
└── README.md                 # This file
```

## Features

### Frontend
- Responsive design with Tailwind CSS
- Modern restaurant SaaS website layout
- Contact form with validation
- User authentication (sign in/sign up)
- Interactive pricing plans
- Template gallery
- Mobile-friendly navigation

### Backend API
- RESTful API built with Flask
- CORS enabled for frontend integration
- Contact form submission handling
- User authentication (signup/signin)
- Restaurant profile management
- Dashboard data endpoints
- JSON file-based data storage

## API Endpoints

- `GET /` - API information and health check
- `POST /api/contact` - Submit contact form
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/restaurants` - Get all restaurants
- `GET /api/dashboard/<user_id>` - Get dashboard data
- `GET /api/health` - Health check endpoint

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

   The backend will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd restaurant-saas-website
   ```

2. Serve the frontend files using a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js serve package
   npx serve .
   ```

   The frontend will be available at `http://localhost:8000`

## Usage

1. Start the backend server first (port 5000)
2. Start the frontend server (port 8000)
3. Open your browser and navigate to the frontend URL
4. Test the contact form and authentication features

## Development Notes

- The backend uses simple JSON file storage for demonstration purposes
- In production, replace with a proper database (PostgreSQL, MySQL, etc.)
- Password hashing should be implemented for security
- Add proper session management and JWT tokens
- Implement proper error handling and logging
- Add input validation and sanitization

## Technologies Used

### Frontend
- HTML5
- CSS3 with Tailwind CSS
- Vanilla JavaScript (ES6+)
- Font Awesome icons
- Google Fonts

### Backend
- Python 3.11
- Flask web framework
- Flask-CORS for cross-origin requests
- JSON for data storage

## License

This project is for demonstration purposes.

