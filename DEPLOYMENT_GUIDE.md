# 🚀 Deployment Guide

## Step 1: Push to GitHub

If you haven't already connected to GitHub, follow these steps:

### Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Name it: `portafolio` (or any name you prefer)
4. **Don't initialize with README** (you already have files)
5. Click **Create repository**

### Connect Your Local Repository

Run these commands in your terminal:

```bash
# Check your current remote
git remote -v

# If no remote exists, add it (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portafolio.git

# Push your code
git push -u origin main
```

If you already have a remote, just push:
```bash
git push origin main
```

---

## Step 2: Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps.

### Option A: Quick Deploy (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign up** (use your GitHub account)
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click **Deploy**

**That's it!** Your site will be live in 2-3 minutes.

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
```

---

## Step 3: Environment (No Additional Setup Needed!)

Your portfolio doesn't need any environment variables, so you can deploy immediately.

---

## Step 4: After Deployment

Once deployed, Vercel will give you a URL like:
- `yourname.vercel.app` - Auto-generated
- You can add your own custom domain later!

---

## 🌐 Custom Domain (Optional)

1. Go to your Vercel project settings
2. Add your custom domain
3. Follow Vercel's DNS instructions

---

## 📝 Quick Reference

### Update Your Site

```bash
# Make changes to your code
# Then commit and push
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically redeploy!

---

## 🔗 Alternative: Netlify

If you prefer Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `portafolio` folder
3. Done!

Or connect GitHub for continuous deployment.

---

## 📧 Your Live Portfolio

After deployment, your portfolio will be available at:
- Vercel: `https://yourname.vercel.app`
- You can add this to your CV/resume!

---

## 🎉 You're Done!

Your portfolio is now live on the web!

