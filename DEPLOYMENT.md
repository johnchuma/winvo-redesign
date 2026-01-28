# GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Create GitHub Repository

```bash
# Go to GitHub.com and create a new repository named "winvo-redesign"
# DO NOT initialize with README, .gitignore, or license (we already have these)
```

### 2. Link Local Repository to GitHub

```bash
# Replace 'yourusername' with your actual GitHub username
git remote add origin https://github.com/yourusername/winvo-redesign.git
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:

- Build the production version (`npm run build`)
- Deploy to the `gh-pages` branch automatically

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select branch: `gh-pages`
5. Click **Save**

### 5. Access Your Site

Your site will be available at:

```
https://yourusername.github.io/winvo-redesign/
```

⏱️ It may take 2-5 minutes for the site to be live after first deployment.

---

## Important Notes

### Base Path Configuration

The `vite.config.js` is already configured with:

```javascript
base: process.env.NODE_ENV === "production" ? "/winvo-redesign/" : "/";
```

**If you name your repository differently**, update the base path in `vite.config.js`:

```javascript
base: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "/";
```

### Future Deployments

After the initial setup, deploying updates is simple:

```bash
git add .
git commit -m "Your update message"
git push
npm run deploy
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

## Troubleshooting

### Assets Not Loading

- Verify the `base` path in `vite.config.js` matches your repository name
- Check browser console for 404 errors

### Site Not Updating

- Wait 2-5 minutes after deployment
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check GitHub Actions tab for deployment status

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Share with Stakeholders

Once deployed, share this URL with stakeholders:

```
https://yourusername.github.io/winvo-redesign/
```

The site features:

- ✨ Premium Fintech Noir aesthetic
- 🎨 Stacking card scroll animations
- 🧮 Interactive calculator
- 📱 Fully responsive design
- ⚡ Optimized performance
