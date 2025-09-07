# E-Commerce Website

A full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Features user authentication, product catalog, shopping cart, and responsive design.

## 🚀 Features

- **User Authentication**: Register, login, and secure JWT-based sessions
- **Product Catalog**: Browse products with filtering and search
- **Shopping Cart**: Add/remove items with persistent cart state
- **Responsive Design**: Mobile-first design with Material-UI components
- **Real-time Updates**: Dynamic cart updates and user state management
- **Secure API**: Protected routes and input validation

## 🛠️ Tech Stack

### Frontend
- React 19.1.1
- Material-UI (MUI) 7.3.2
- React Router DOM 7.8.2
- Axios for API calls
- Context API for state management

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Express Validator for input validation
- CORS enabled

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client && npm install && cd ..
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your values
   nano .env
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Seed the database**
   ```bash
   # Create sample products
   node seed.js
   
   # Create test users
   node createTestUsers.js
   ```

6. **Start the application**
   ```bash
   # Terminal 1 - Backend server
   npm start
   
   # Terminal 2 - Frontend development server
   cd client && npm start
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

## 🔐 Test Credentials

The application comes with pre-created test users:

| Email | Password | Role |
|-------|----------|------|
| john@example.com | password123 | User |
| jane@example.com | password123 | User |
| admin@example.com | admin123 | Admin |

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Start all services**
   ```bash
   docker-compose up -d
   ```

2. **Seed the database**
   ```bash
   docker-compose exec backend node seed.js
   docker-compose exec backend node createTestUsers.js
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Using Docker only

1. **Build the image**
   ```bash
   docker build -t ecommerce-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 5000:5000 -e MONGODB_URI=your_mongodb_uri ecommerce-app
   ```

## ☁️ Cloud Deployment

### Heroku

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew install heroku/brew/heroku
   ```

2. **Login and create app**
   ```bash
   heroku login
   heroku create your-ecommerce-app-name
   ```

3. **Set environment variables**
   ```bash
   heroku config:set JWT_SECRET=your_very_secure_jwt_secret_key_here
   heroku config:set MONGODB_URI=your_mongodb_atlas_uri
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Railway

1. **Connect GitHub repository**
   - Go to https://railway.app
   - Connect your GitHub account
   - Select your repository

2. **Set environment variables**
   - Go to Variables tab
   - Add required environment variables

3. **Deploy**
   - Railway will automatically deploy when you push to your repository

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables**
   - In Vercel dashboard
   - Go to Settings > Environment Variables
   - Add the required environment variables

## 📁 Project Structure

```
client/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── package.json
├── models/                # MongoDB models
│   ├── User.js
│   └── Product.js
├── server.js              # Express server
├── config.js              # Configuration
├── seed.js                # Database seeding
├── createTestUsers.js     # Test user creation
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product

### User
- `GET /api/profile` - Get user profile (protected)

### Health
- `GET /api/health` - Health check

## 🎨 Frontend Features

- **Home Page**: Product showcase with categories
- **Product Catalog**: Filterable product grid
- **Product Details**: Individual product pages
- **Shopping Cart**: Add/remove items with quantity control
- **User Authentication**: Login/register forms
- **Responsive Design**: Mobile-first approach

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS configuration
- Protected API routes
- Environment variable protection

## 🚀 Performance Optimizations

- React Context for efficient state management
- Material-UI for optimized components
- MongoDB indexing for fast queries
- Image optimization with placeholder URLs
- Code splitting and lazy loading ready

## 🧪 Testing

```bash
# Run frontend tests
cd client && npm test

# Run backend tests (if implemented)
npm test
```

## 📝 Environment Variables

Create a `.env` file with the following variables:

```env
JWT_SECRET=your_very_secure_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](DEPLOYMENT.md#troubleshooting) in DEPLOYMENT.md
2. Create an issue in the repository
3. Contact the development team

## 🎯 Roadmap

- [ ] Payment integration (Stripe/PayPal)
- [ ] Order management system
- [ ] Product reviews and ratings
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Wishlist functionality
- [ ] Multi-language support

---

**Happy Shopping! 🛒**