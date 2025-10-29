# Portfolio Website - Project Overview

## 🎯 Project Summary

A stunning, fully interactive portfolio website for Diego Villanueva Fernandez, built with modern web technologies and best practices. The site features smooth animations, dark/light mode, responsive design, and an immersive user experience inspired by Apple and Tesla's design philosophy.

## ✨ Key Features

### Visual & Design
- **Futuristic, minimal aesthetic** with a focus on robotics and engineering
- **Smooth animations** powered by Framer Motion
- **Dark/Light mode toggle** with system preference detection
- **Gradient effects** and glassmorphism styling
- **Responsive design** for all devices (mobile, tablet, desktop)

### User Experience
- **Floating navigation bar** that highlights active sections
- **Smooth scroll behavior** with animated section transitions
- **Interactive hover effects** on cards and buttons
- **Scroll-triggered animations** for engaging content reveals
- **Active section tracking** for seamless navigation

### Technical Excellence
- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** for utility-first styling
- **Framer Motion** for advanced animations
- **SEO optimized** with proper metadata
- **Performance optimized** with Next.js Image component
- **Accessibility** considerations throughout

## 📁 Project Structure

```
portafolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page composition
│   └── styles/
│       └── globals.css     # Global styles and animations
│
├── components/             # Reusable components
│   ├── Navbar.tsx         # Floating navigation with active tracking
│   ├── Hero.tsx           # Hero section with animations
│   ├── About.tsx          # About section with bio
│   ├── Education.tsx      # Timeline-based education display
│   ├── Experience.tsx     # Expandable experience cards
│   ├── Skills.tsx         # Skills and interests display
│   ├── Contact.tsx        # Contact form and info
│   ├── Footer.tsx         # Footer component
│   └── ThemeProvider.tsx  # Dark/light mode provider
│
├── public/                # Static assets
│   ├── cv.pdf            # CV file (replace with actual)
│   ├── robots.txt        # SEO robots file
│   └── .gitkeep          # Git placeholder
│
├── Configuration Files
│   ├── package.json       # Dependencies
│   ├── tsconfig.json     # TypeScript config
│   ├── tailwind.config.ts # Tailwind configuration
│   ├── next.config.js     # Next.js configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── .eslintrc.json     # ESLint configuration
│
└── Documentation
    ├── README.md          # Project README
    ├── SETUP.md           # Setup guide
    └── PROJECT_OVERVIEW.md # This file
```

## 🎨 Design System

### Color Palette
- **Navy**: `#0B132B` - Primary dark background
- **Electric Blue**: `#3A86FF` - Primary accent color
- **Silver**: `#E0E0E0` - Light accent
- **White**: `#FFFFFF` - Primary light background
- **Gradients**: Electric blue → Purple → Pink

### Typography
- **Font**: Poppins (weights: 300, 400, 500, 600, 700)
- **Headings**: Bold, large sizes with gradient effects
- **Body**: Medium weight, readable line heights

### Components Style
- **Cards**: Glass morphism effect with hover animations
- **Buttons**: Rounded with smooth hover/tap effects
- **Navigation**: Floating bar with active section indicator
- **Forms**: Clean inputs with focus states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
# Install dependencies
npm install

# Add your CV
# Place your CV at /public/cv.pdf

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Customization
See `SETUP.md` for detailed customization instructions including:
- Updating personal information
- Changing colors
- Modifying animations
- Adding profile images

## 📱 Sections Overview

### 1. Hero Section
- Animated background with circuit patterns
- Name, title, and subtitle with stagger animations
- Contact information links (email, phone, LinkedIn, location)
- Call-to-action buttons
- Scroll indicator animation

### 2. About Section
- Profile information
- Bio with personal and professional details
- Social media links with hover effects
- Gradient circular avatar

### 3. Education Section
- Vertical timeline layout
- Animated cards for each degree
- Institution logos/initials
- GPA and honors display
- Responsive design (switches to vertical on mobile)

### 4. Experience Section
- Expandable card design
- Color-coded by role
- Detailed description on expand
- Date and duration display
- Smooth expand/collapse animations

### 5. Skills Section
- Three categories: Technical, Languages, Interests
- Icon-based organization
- Badge-style technology tags
- Hover effects on all elements

### 6. Contact Section
- Two-column layout (contact info + form)
- Interactive contact card hover effects
- Functional contact form
- Links to social media and contact methods

### 7. Footer
- Copyright information
- Technology credits
- Heart icon animation

## 🎭 Animations

### Framer Motion Features
- **Page Load**: Stagger children for sequential appearance
- **Scroll Animations**: Fade in and slide up on scroll
- **Hover Effects**: Scale and color transitions
- **Active States**: Pulse and glow effects
- **Smooth Transitions**: CSS + Framer Motion for 60fps performance

### Animation Types
- `fade-in`: Opacity and y-axis movement
- `scale`: Button and card hover effects
- `stagger`: Sequential children animation
- `slide-in`: Section entrance animations
- `float`: Continuous background elements

## 🌐 SEO & Performance

### SEO Features
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and Open Graph
- Sitemap ready
- Robots.txt configured

### Performance Optimizations
- Code splitting with Next.js
- Image optimization ready
- Font optimization with next/font
- Minimal bundle size
- Lazy loading animations

## 🎓 Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Theming**: next-themes
- **Icons**: Lucide React
- **Font**: Google Fonts (Poppins)

## 📝 Next Steps

1. **Add CV**: Replace `/public/cv.pdf` with your actual CV
2. **Add Profile Image**: Add your photo to `/public/images/`
3. **Update Links**: Verify all social media links are correct
4. **Deploy**: Push to GitHub and deploy on Vercel
5. **Customize**: Adjust colors, animations, or content as needed

## 🎉 Result

A professional, modern portfolio that:
- ✅ Showcases technical excellence
- ✅ Demonstrates design sensibility
- ✅ Provides smooth user experience
- ✅ Maintains professional aesthetics
- ✅ Functions flawlessly on all devices
- ✅ Impresses potential employers/collaborators

## 📧 Contact

**Diego Villanueva Fernandez**
- Email: A01199495@tec.mx
- Phone: +52 8112108138
- LinkedIn: linkedin.com/in/diego-villanueva-fernandez
- Location: Monterrey, Nuevo León, México

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion

