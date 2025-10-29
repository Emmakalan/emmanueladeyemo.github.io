# Emmanuel Adeyemo - Portfolio

Modern, single-page personal portfolio website showcasing Product Management expertise in Fintech, Government, Education, IDV & S-IAM, and AI-Powered Systems.

## 🚀 Deployment Guide

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account with repository access

### Option 1: Deploy to GitHub Pages

1. **Clone your repository locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Copy all project files to your repository**

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Update `vite.config.ts`** if deploying to a repository path:
   ```typescript
   base: '/YOUR_REPO_NAME/', // Only needed if not using custom domain
   ```

5. **Build and test locally:**
   ```bash
   npm run build
   npm run preview
   ```

6. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

7. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

8. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **gh-pages** branch
   - Click **Save**
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (steps 1-6 above)

2. **Visit [vercel.com](https://vercel.com)**

3. **Import your GitHub repository:**
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"

4. **Configure custom domain** (optional):
   - Go to project Settings → Domains
   - Add `emmanueladeyemo.com`
   - Follow DNS configuration instructions

### Option 3: Deploy to Netlify

1. **Push your code to GitHub** (steps 1-6 above)

2. **Visit [netlify.com](https://netlify.com)**

3. **Import your repository:**
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

4. **Configure custom domain** (optional):
   - Go to Site settings → Domain management
   - Add custom domain `emmanueladeyemo.com`

## 📧 EmailJS Configuration

The contact form uses EmailJS. To set it up:

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Update credentials in `/components/Contact.tsx`:
   ```typescript
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams,
     'YOUR_PUBLIC_KEY'
   )
   ```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Google Tag Manager

GTM tracking is already configured with ID: `GTM-K8Z8ZGNX`

## 🎨 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4.0
- **UI Components:** Shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)
- **Forms:** React Hook Form
- **Charts:** Recharts
- **Notifications:** Sonner

## 📝 License

© 2025 Emmanuel Adeyemo. All rights reserved.
