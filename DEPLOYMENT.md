# Deployment Guide

This guide will help you deploy the E-Commerce website to various platforms.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- Git repository
- Platform account (Heroku, Vercel, etc.)

## Environment Variables

Create a `.env` file with the following variables:

```env
JWT_SECRET=your_very_secure_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=production
```

## Heroku Deployment

### 1. Install Heroku CLI
```bash
# macOS
brew install heroku/brew/heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

### 2. Login to Heroku
```bash
heroku login
```

### 3. Create Heroku App
```bash
heroku create your-ecommerce-app-name
```

### 4. Set Environment Variables
```bash
heroku config:set JWT_SECRET=your_very_secure_jwt_secret_key_here
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set NODE_ENV=production
```

### 5. Deploy
```bash
git add .
git commit -m "Initial deployment"
git push heroku main
```

### 6. Seed Database (Optional)
```bash
heroku run node seed.js
```

## MongoDB Atlas Setup

### 1. Create MongoDB Atlas Account
- Go to https://www.mongodb.com/cloud/atlas
- Create a free account
- Create a new cluster

### 2. Configure Database Access
- Go to Database Access
- Add a new database user
- Set username and password

### 3. Configure Network Access
- Go to Network Access
- Add IP address (0.0.0.0/0 for all IPs)

### 4. Get Connection String
- Go to Clusters
- Click "Connect"
- Choose "Connect your application"
- Copy the connection string
- Replace `<password>` with your database user password

## Vercel Deployment

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel
```

### 4. Set Environment Variables
In Vercel dashboard:
- Go to your project
- Go to Settings > Environment Variables
- Add the required environment variables

## Railway Deployment

### 1. Connect GitHub Repository
- Go to https://railway.app
- Connect your GitHub account
- Select your repository

### 2. Set Environment Variables
- Go to Variables tab
- Add required environment variables

### 3. Deploy
Railway will automatically deploy when you push to your repository.

## Local Development Setup

### 1. Clone Repository
```bash
git clone <your-repository-url>
cd assignment-internshala
```

### 2. Install Dependencies
```bash
npm install
cd client && npm install && cd ..
```

### 3. Set Up Environment
```bash
# Create .env file
cp .env.example .env
# Edit .env with your values
```

### 4. Start MongoDB
```bash
# If using local MongoDB
mongod
```

### 5. Seed Database
```bash
node seed.js
```

### 6. Start Development Servers
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd client && npm start
```

## Production Checklist

- [ ] Set secure JWT secret
- [ ] Use production MongoDB URI
- [ ] Set NODE_ENV=production
- [ ] Test all API endpoints
- [ ] Verify authentication works
- [ ] Test cart functionality
- [ ] Check responsive design
- [ ] Verify all filters work
- [ ] Test user registration/login

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check MongoDB URI format
   - Verify network access settings
   - Ensure database user has proper permissions

2. **JWT Token Issues**
   - Verify JWT_SECRET is set
   - Check token expiration settings
   - Ensure consistent secret across deployments

3. **CORS Issues**
   - Check CORS configuration in server.js
   - Verify frontend URL is allowed

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

### Logs

```bash
# Heroku logs
heroku logs --tail

# Vercel logs
vercel logs

# Railway logs
railway logs
```

## Performance Optimization

1. **Database Indexing**
   - Add indexes for frequently queried fields
   - Index on category, price, name fields

2. **Image Optimization**
   - Use CDN for product images
   - Implement image compression

3. **Caching**
   - Implement Redis for session storage
   - Cache frequently accessed data

4. **Frontend Optimization**
   - Implement code splitting
   - Use lazy loading for images
   - Optimize bundle size

## Security Considerations

1. **Environment Variables**
   - Never commit .env files
   - Use strong, unique secrets
   - Rotate secrets regularly

2. **API Security**
   - Implement rate limiting
   - Add input validation
   - Use HTTPS in production

3. **Database Security**
   - Use strong passwords
   - Limit network access
   - Regular backups

## Monitoring

1. **Error Tracking**
   - Implement Sentry or similar
   - Monitor API errors
   - Track user experience

2. **Performance Monitoring**
   - Use New Relic or similar
   - Monitor response times
   - Track database performance

3. **Analytics**
   - Implement Google Analytics
   - Track user behavior
   - Monitor conversion rates
