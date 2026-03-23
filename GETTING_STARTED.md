# Getting Started - Local Development & Deployment

## 🚀 Quick Start (5 minutes)

### Option A: Start Development Server
```bash
cd c:\Users\Diya\GitProjects\rmr-website
npm run dev
```
Open http://localhost:5173 in your browser

### Option B: Build for Production
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 to see production build

---

## 🔧 Configure Email Integration (Optional for Testing)

### Without Email Integration (Demo Mode)
- Contact form works and shows success message
- Emails are not actually sent
- Perfect for testing the UI

### With Email Integration (Production)

1. **Create EmailJS Account**
   ```
   https://www.emailjs.com/
   Sign up → Free account
   ```

2. **Create Email Service**
   - Go to Email Services
   - Add Gmail, Outlook, or custom email
   - Verify your email

3. **Create Email Template**
   - Go to Email Templates
   - Create template like:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

4. **Get Your Credentials**
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
   - Public Key (from Account > API Keys)

5. **Update .env.local**
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
   ```

6. **Test**
   ```bash
   npm run dev
   # Go to Contact page and submit form
   # Check your email inbox
   ```

---

## 🗺️ Configure Google Maps (Optional)

### Without Maps API Key
- Shows placeholder text
- Site still works perfectly

### With Google Maps Integration

1. **Create Google Cloud Project**
   ```
   https://console.cloud.google.com
   Create new project "RMR Website"
   ```

2. **Enable Maps Embed API**
   - Go to APIs & Services > Library
   - Search "Maps Embed API"
   - Click Enable

3. **Create API Key**
   - Go to APIs & Services > Credentials
   - Create API Key (Restrict to HTTP referrers)
   - Add your domain(s)

4. **Update .env.local**
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSy_xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

5. **Test**
   ```bash
   npm run dev
   # Go to Contact page
   # You should see Google Maps with Delhi location
   ```

---

## 📦 Project Dependencies

Already installed and ready:
- React 18.3.1
- React Router 7.13.0
- Tailwind CSS 3.4.1
- TypeScript 5.6.3
- Vite 6.3.5
- Lucide React (icons)
- EmailJS (email service)
- Radix UI (accessible components)

To add more packages:
```bash
npm install package-name
```

---

## 📝 Update Content & Images

### 1. Update Company Information
File: `src/app/components/Header.tsx`
```tsx
{/* Update logo and company name */}
<span className="font-bold text-lg text-[#3D4539] hidden sm:inline">
  Your Company Name  // Change this
</span>
```

### 2. Update Contact Information
File: `src/app/pages/Contact.tsx`
```tsx
email: 'your-email@company.com',  // Update
phone: '+91 XXXX XXXX XXXX',      // Update
address: 'Your City, Country',     // Update
```

### 3. Update Team Members
File: `src/app/pages/Team.tsx`
```tsx
const teamMembers = [
  {
    name: 'Your Name',    // Update
    role: 'CEO',          // Update
    bio: 'Your bio...',   // Update
  },
  // Add or remove members
];
```

### 4. Add Images
Create `src/assets/` folder and add images:
```
src/assets/
├── logo.png
├── team/
│   ├── ceo.jpg
│   ├── operations.jpg
│   └── cto.jpg
├── products/
│   ├── iron-ore.jpg
│   ├── coal.jpg
│   ├── bauxite.jpg
│   └── limestone.jpg
└── clients/
    └── client-logos.png
```

Then update components:
```tsx
import logo from '../assets/logo.png';

<img src={logo} alt="Company Logo" />
```

---

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial RMR website commit"
git branch -M main

# Create a new GitHub repo, then:
git remote add origin https://github.com/YOUR_USERNAME/rmr-website.git
git push -u origin main
```

### Step 2: Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
# Follow prompts:
# - Link to GitHub repo
# - Confirm project name
# - Set production domain
```

### Step 3: Configure Environment Variables
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID = your_service_id
   VITE_EMAILJS_TEMPLATE_ID = your_template_id
   VITE_EMAILJS_PUBLIC_KEY = your_public_key
   VITE_GOOGLE_MAPS_API_KEY = your_api_key
   ```
5. Redeploy from Deployments tab

### Step 4: Configure Domain
1. Go to Settings > Domains
2. Add your custom domain or use vercel.app domain
3. Configure DNS if using custom domain

---

## 🧪 Testing Checklist Before Launch

- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Contact form submits (with email configured)
- [ ] Maps display (with API key configured)
- [ ] Images load properly
- [ ] Colors and styling look correct
- [ ] No console errors
- [ ] Mobile responsive layout works
- [ ] Links point to correct pages
- [ ] Contact information is accurate

---

## 📱 Preview Sizes to Test

```
Mobile:   320px - 480px (iPhone, small phones)
Tablet:   481px - 768px (iPad, tablets)
Desktop:  769px+        (Desktop, laptops)
Large:    1440px+       (Large monitors)
```

---

## 🔐 Environment Variables

### Development (.env.local)
```
# Use demo values to test without actual services
VITE_EMAILJS_SERVICE_ID=demo
VITE_EMAILJS_TEMPLATE_ID=demo
VITE_EMAILJS_PUBLIC_KEY=demo
VITE_GOOGLE_MAPS_API_KEY=demo
```

### Production (Vercel Dashboard)
```
# Use real credentials
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
VITE_GOOGLE_MAPS_API_KEY=AIzaSy_xxxxx
```

---

## 🆘 Troubleshooting

### Issue: "Port 5173 already in use"
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: "Cannot find module 'react'"
```bash
# Reinstall dependencies
rm -r node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
```bash
# Clear TypeScript cache
rm -r .tsbuildinfo
npm run build
```

### Issue: Email form not working
- Check .env.local variables are set
- Verify EmailJS service is active
- Check browser console for errors
- Test with demo mode first (without API key)

### Issue: Maps not displaying
- Verify Google Maps API key is correct
- Ensure Maps Embed API is enabled
- Check API key restrictions (should allow your domain)
- Without key, placeholder text displays (site still works)

---

## 📚 Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com
- **EmailJS**: https://www.emailjs.com/docs
- **Google Maps**: https://developers.google.com/maps
- **Vercel**: https://vercel.com/docs
- **React Router**: https://reactrouter.com/docs

---

## 💡 Pro Tips

1. **Use browser DevTools**
   - Check Network tab for image loading
   - Check Console for JavaScript errors
   - Use responsive design mode to test mobile

2. **Git Workflow**
   ```bash
   # Create feature branch
   git checkout -b feature/my-feature
   
   # Make changes
   # Commit
   git add .
   git commit -m "Description of changes"
   git push origin feature/my-feature
   # Create Pull Request on GitHub
   ```

3. **Performance Optimization**
   - Images should be compressed
   - Use next-gen image formats (WebP)
   - Lazy load images off-screen
   - Minimize CSS/JS bundles

4. **SEO Best Practices**
   - Update meta tags in index.html
   - Add meta descriptions
   - Use semantic HTML
   - Add Open Graph tags

---

**You're all set! 🎉 Start developing now:**
```bash
npm run dev
```

Questions? Check the README.md or PROJECT_COMPLETION.md files.
