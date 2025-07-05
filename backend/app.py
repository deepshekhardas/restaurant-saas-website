from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime
import uuid

app = Flask(__name__)
CORS(app) # Enable CORS for all origins

# Simple in-memory storage (in production, use a proper database)
users_db = {}
contacts_db = []
restaurants_db = {}

# Create data directory if it doesn't exist
if not os.path.exists('data'):
    os.makedirs('data')

@app.route('/')
def home():
    return jsonify({
        'message': 'RestaurantTech Backend API is running!',
        'version': '1.0.0',
        'endpoints': {
            'contact': '/api/contact',
            'auth': {
                'signup': '/api/auth/signup',
                'signin': '/api/auth/signin'
            },
            'restaurants': '/api/restaurants',
            'dashboard': '/api/dashboard'
        }
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Extract form data
        contact_data = {
            'id': str(uuid.uuid4()),
            'first_name': data.get('first-name'),
            'last_name': data.get('last-name'),
            'email': data.get('email'),
            'phone': data.get('phone'),
            'restaurant_name': data.get('restaurant-name'),
            'inquiry_type': data.get('inquiry-type'),
            'subject': data.get('subject'),
            'message': data.get('message'),
            'newsletter': data.get('newsletter', False),
            'timestamp': datetime.now().isoformat()
        }
        
        # Store contact submission
        contacts_db.append(contact_data)
        
        # Save to file (in production, use a proper database)
        with open('data/contacts.json', 'w') as f:
            json.dump(contacts_db, f, indent=2)
        
        print(f"New contact submission from {contact_data['first_name']} {contact_data['last_name']}")
        print(f"Email: {contact_data['email']}")
        print(f"Subject: {contact_data['subject']}")
        print(f"Message: {contact_data['message']}")
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message! We\'ll get back to you within 24 hours.',
            'contact_id': contact_data['id']
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Sorry, there was an error processing your request. Please try again.'
        }), 500

@app.route('/api/auth/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        
        email = data.get('email')
        password = data.get('password')
        first_name = data.get('first-name')
        last_name = data.get('last-name')
        restaurant_name = data.get('restaurant-name')
        
        # Check if user already exists
        if email in users_db:
            return jsonify({
                'success': False,
                'message': 'An account with this email already exists.'
            }), 400
        
        # Create new user
        user_id = str(uuid.uuid4())
        user_data = {
            'id': user_id,
            'email': email,
            'password': password,  # In production, hash this password!
            'first_name': first_name,
            'last_name': last_name,
            'restaurant_name': restaurant_name,
            'created_at': datetime.now().isoformat(),
            'plan': 'free_trial'
        }
        
        users_db[email] = user_data
        
        # Create restaurant profile
        restaurants_db[user_id] = {
            'id': user_id,
            'name': restaurant_name,
            'owner_email': email,
            'status': 'active',
            'created_at': datetime.now().isoformat(),
            'settings': {
                'online_ordering': False,
                'table_reservations': False,
                'loyalty_program': False
            }
        }
        
        # Save to files
        with open('data/users.json', 'w') as f:
            json.dump(users_db, f, indent=2)
        with open('data/restaurants.json', 'w') as f:
            json.dump(restaurants_db, f, indent=2)
        
        return jsonify({
            'success': True,
            'message': 'Account created successfully! Welcome to RestaurantTech.',
            'user': {
                'id': user_id,
                'email': email,
                'first_name': first_name,
                'last_name': last_name,
                'restaurant_name': restaurant_name
            }
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Sorry, there was an error creating your account. Please try again.'
        }), 500

@app.route('/api/auth/signin', methods=['POST'])
def signin():
    try:
        data = request.get_json()
        
        email = data.get('email')
        password = data.get('password')
        
        # Check if user exists and password matches
        if email not in users_db:
            return jsonify({
                'success': False,
                'message': 'Invalid email or password.'
            }), 401
        
        user = users_db[email]
        if user['password'] != password:  # In production, use proper password hashing!
            return jsonify({
                'success': False,
                'message': 'Invalid email or password.'
            }), 401
        
        return jsonify({
            'success': True,
            'message': 'Sign in successful! Welcome back.',
            'user': {
                'id': user['id'],
                'email': user['email'],
                'first_name': user['first_name'],
                'last_name': user['last_name'],
                'restaurant_name': user['restaurant_name'],
                'plan': user['plan']
            }
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Sorry, there was an error signing you in. Please try again.'
        }), 500

@app.route('/api/restaurants', methods=['GET'])
def get_restaurants():
    try:
        return jsonify({
            'success': True,
            'restaurants': list(restaurants_db.values())
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Error fetching restaurants data.'
        }), 500

@app.route('/api/dashboard/<user_id>', methods=['GET'])
def get_dashboard(user_id):
    try:
        if user_id not in restaurants_db:
            return jsonify({
                'success': False,
                'message': 'Restaurant not found.'
            }), 404
        
        # Mock dashboard data
        dashboard_data = {
            'success': True,
            'restaurant': restaurants_db[user_id],
            'stats': {
                'total_orders': 156,
                'revenue_this_month': 12450.00,
                'active_customers': 89,
                'avg_order_value': 35.50
            },
            'recent_orders': [
                {'id': 1, 'customer': 'John Doe', 'amount': 45.50, 'status': 'completed'},
                {'id': 2, 'customer': 'Jane Smith', 'amount': 32.00, 'status': 'preparing'},
                {'id': 3, 'customer': 'Mike Johnson', 'amount': 28.75, 'status': 'delivered'}
            ],
            'notifications': [
                {'type': 'info', 'message': 'New customer review received'},
                {'type': 'warning', 'message': 'Low inventory alert for pasta'},
                {'type': 'success', 'message': 'Monthly revenue goal achieved!'}
            ]
        }
        
        return jsonify(dashboard_data), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Error fetching dashboard data.'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0'
    }), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)


