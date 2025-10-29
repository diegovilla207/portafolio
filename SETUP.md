# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your CV**
   - Create a PDF file of your CV
   - Place it at `/public/cv.pdf`
   - Make sure it's named exactly `cv.pdf`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to `http://localhost:3000`

## Customization

### Update Personal Information
Edit the following files to update your information:

- **Hero Section**: `components/Hero.tsx`
  - Update contact information (email, phone, LinkedIn, location)

- **About Section**: `components/About.tsx`
  - Update bio text
  - Replace placeholder image URL (currently using initials "DVF")

- **Education Section**: `components/Education.tsx`
  - Update education history in the `education` array

- **Experience Section**: `components/Experience.tsx`
  - Update work experience in the `experiences` array

- **Skills Section**: `components/Skills.tsx`
  - Update skills in the `skillCategories` array

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  'navy': '#0B132B',          // Dark background
  'electric-blue': '#3A86FF',  // Primary accent
  'silver': '#E0E0E0',         // Light accent
}
```

### Modify Animations

All animations use Framer Motion. Edit individual components to adjust:
- Animation duration
- Delay timing
- Effect styles (fade, slide, scale)

### Add Profile Image

1. Place your profile image in `/public/images/profile.jpg`
2. Update `components/About.tsx`:
   ```tsx
   <Image
     src="/images/profile.jpg"
     alt="Diego Villanueva Fernandez"
     width={256}
     height={256}
     className="rounded-full"
   />
   ```

## Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `/out` folder.

## Project Structure

```
/portafolio
  /app
    layout.tsx              # Root layout with providers
    page.tsx                 # Main page
    /styles
      globals.css            # Global styles
  /components
    Navbar.tsx               # Navigation bar
    Hero.tsx                 # Hero section
    About.tsx                # About section
    Education.tsx            # Education timeline
    Experience.tsx            # Work experience
    Skills.tsx               # Skills and interests
    Contact.tsx              # Contact form
    Footer.tsx               # Footer
    ThemeProvider.tsx        # Dark mode provider
  /public
    cv.pdf                  # Your CV (add this)
    robots.txt               # SEO robots file
  tailwind.config.ts         # Tailwind configuration
  tsconfig.json              # TypeScript configuration
  next.config.js             # Next.js configuration
```

## Features

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth scroll animations
✅ Active section highlighting
✅ Floating navigation bar
✅ Interactive hover effects
✅ Contact form
✅ SEO optimized
✅ Accessible markup

## Support

For issues or questions, please contact Diego Villanueva Fernandez at A01199495@tec.mx

