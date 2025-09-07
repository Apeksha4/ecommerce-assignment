# Vercel Deployment Guide

## ✅ Fixed Configuration

The Vercel deployment has been fixed with the following changes:

### 1. Updated `vercel.json`
- Simplified configuration to use only the Node.js server
- Added proper build command
- Set correct routing for API and static files

### 2. Updated `package.json`
- Added `vercel-build` script
- Ensures React app is built before deployment

### 3. Added `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size and time

## 🚀 Deployment Steps

### 1. Set Environment Variables in Vercel
Go to your Vercel project dashboard and add these environment variables:

```
JWT_SECRET=your_very_secure_jwt_secret_key_here
MONGODB_URI=your_mongodb_atlas_uri
NODE_ENV=production
```

### 2. MongoDB Atlas Setup
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Add a database user
4. Whitelist all IP addresses (0.0.0.0/0)
5. Get the connection string and use it as MONGODB_URI

### 3. Deploy
1. Push your changes to GitHub
2. Vercel will automatically redeploy
3. Or manually trigger deployment from Vercel dashboard

## 🔧 Local Testing

Test the production build locally:

```bash
# Build the React app
npm run vercel-build

# Start the server in production mode
NODE_ENV=production node server.js
```

## 📝 Important Notes

- The app now serves both API and frontend from the same server
- All routes go through the Express server
- Static files are served from `client/build/`
- API routes are prefixed with `/api/`

## 🐛 Troubleshooting

If you still get 404 errors:

1. Check that environment variables are set correctly
2. Verify MongoDB connection string
3. Check Vercel function logs for errors
4. Ensure the build completed successfully

## ✅ Expected Behavior

After successful deployment:
- `https://your-app.vercel.app/` - Frontend
- `https://your-app.vercel.app/api/health` - API health check
- `https://your-app.vercel.app/api/products` - Products API
- `https://your-app.vercel.app/api/auth/login` - Authentication
