# Rathore Minerals & Resources (RMR) Website

Professional B2B website for a mining and resource solutions company.

## Features

- 🏠 Multi-page React application with React Router
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Custom color scheme matching RMR brand
- 🔍 SEO optimized with meta tags
- ♿ Accessibility compliant (ARIA labels, keyboard navigation)
- 📦 12 pages including product detail pages
- 📧 Email integration with EmailJS
- 🗺️ Google Maps integration
- 🚀 Optimized for deployment on Vercel

## Tech Stack

- **Framework:** React 18.3.1
- **Routing:** React Router 7.13.0
- **Styling:** Tailwind CSS 4.1.12
- **Build Tool:** Vite 6.3.5
- **TypeScript:** Latest
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **Email:** EmailJS (client-side, no backend needed)
- **Maps:** Google Maps Embed API

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see Configuration section)

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173

## Configuration

Create a `.env.local` file in the project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

### Setting up EmailJS:
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy your Service ID, Template ID, and Public Key to .env.local

### Setting up Google Maps:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Maps Embed API
4. Create API key
5. Add to .env.local

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

This project is configured for Vercel deployment with proper SPA routing.

```bash
vercel deploy
```

Set environment variables in Vercel dashboard under Project Settings > Environment Variables.

## Pages

1. **Home** - Hero section, core values, services overview
2. **About** - Company mission, vision, competencies
3. **Products** - Overview of minerals and services
4. **Iron Ore** - Detailed specifications and applications
5. **Coal** - Detailed specifications and applications
6. **Bauxite** - Detailed specifications and applications
7. **Limestone** - Detailed specifications and applications
8. **Team** - Leadership team profiles
9. **Process** - Trading and supply chain process
10. **Careers** - Job opportunities and benefits
11. **Contact** - Contact form with email integration and Google Maps
12. **404** - Custom not found page

## Color Scheme

- Primary: #3D4539 (Dark Green/Olive)
- Accent: #C9A961 (Gold/Tan)
- Background: #F5F3EF (Light Cream)

## Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Images

The project currently uses placeholder images. Replace them with actual images in the component files:

- Logo (Header and Footer)
- 5 Client logos (Adani, Jindal, Lloyds, Tata Steel, JSW)
- Mining operations image
- 3 Team member photos (Aryaman, Sandip, Shahab)
- 4 Process images (Mine, Rail Transport, Port Stockpiling, Port Loading)

## Troubleshooting

### Issue: "Cannot find module 'react'"
**Solution:** Run `npm install` again

### Issue: "Port 5173 already in use"
**Solution:** Kill the process or change port:
```bash
npm run dev -- --port 3000
```

### Issue: EmailJS not sending emails
**Solution:** Check .env.local variables are set correctly and service is configured in EmailJS dashboard

### Issue: Google Maps not displaying
**Solution:** Verify API key is valid and Maps Embed API is enabled in Google Cloud Console

## License

© 2026 Rathore Minerals & Resources. All rights reserved.
