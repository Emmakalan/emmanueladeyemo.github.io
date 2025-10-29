#!/bin/bash

# Deploy script for Emmanuel Adeyemo Portfolio
echo "🚀 Deploying Emmanuel Adeyemo Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    git add .
    
    # Commit changes
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to main branch
    git push origin main
    
    echo "🎉 Deployment complete!"
    echo "🌐 Your portfolio will be available at: https://emmakalan.github.io/emmanueladeyemo.github.io/"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi
