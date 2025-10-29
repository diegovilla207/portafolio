# 🖼️ Image Setup Guide

## Quick Instructions

You mentioned you have two photos ready to add:
1. **Professional headshot** (black suit, white shirt, grey tie)
2. **Robotics competition photo** (you working on a robot)

Here's how to add them to your portfolio:

## Step 1: Add Your Images

### Method 1: Using Finder/File Explorer
1. Open Finder (Mac) or File Explorer (Windows)
2. Navigate to your portfolio folder: `/Users/diegovillanuevafernandez/portafolio/public/images/`
3. Drag and drop your two photos into this folder
4. Rename them to match these exact filenames:
   - Professional photo → `profile.jpg`
   - Robotics competition → `robotics-competition.jpg`

### Method 2: Using Terminal
```bash
# Navigate to the images folder
cd public/images

# Add your images (adjust the paths to where your images are currently stored)
cp ~/Downloads/my-professional-photo.jpg profile.jpg
cp ~/Downloads/my-robotics-photo.jpg robotics-competition.jpg
```

## Step 2: Uncomment the Image Code

After adding your images, you need to uncomment the image tags in the code:

### For the Profile Picture (`components/About.tsx`)
1. Open `components/About.tsx`
2. Find this section around lines 40-50:
```tsx
{/* Actual profile photo - Comment out fallback above when adding image */}
{/* Uncomment this when you add your profile.jpg image */}
{/* 
<Image
  src="/images/profile.jpg"
  alt="Diego Villanueva Fernandez"
  width={256}
  height={256}
  className="rounded-full object-cover w-full h-full shadow-2xl"
  priority
/>
*/}
```
3. **Uncomment** (remove the `{/* */}`) and **comment out** the fallback circle above it

### For the Robotics Competition Photo (`components/Projects.tsx`)
1. Open `components/Projects.tsx`
2. Find this section around lines 40-50:
```tsx
{/* Actual Image - Uncomment when you add robotics-competition.jpg */}
{/* 
<Image
  src="/images/robotics-competition.jpg"
  alt="Diego working on a robot at a robotics competition"
  width={1200}
  height={800}
  className="rounded-xl w-full h-auto object-cover shadow-2xl"
  priority
/>
*/}
```
3. **Uncomment** the Image tag and **remove** the placeholder div above it

## Quick Checklist

- [ ] Professional photo saved as `public/images/profile.jpg`
- [ ] Robotics competition photo saved as `public/images/robotics-competition.jpg`
- [ ] Uncommented Image tag in `components/About.tsx`
- [ ] Uncommented Image tag in `components/Projects.tsx`
- [ ] Ran the site to verify images appear

## Image Recommendations

- **Profile photo**: Square format (512x512px recommended), JPG or PNG
- **Robotics photo**: Landscape format (1200x800px recommended), JPG or PNG
- Keep file sizes under 1MB each for faster loading

## After Adding Images

Run the dev server to see your photos:
```bash
npm run dev
```

Your professional headshot will appear in the **About** section, and your robotics competition photo will appear in the new **Projects** section!

## Need Help?

If you have any issues or need more photos added, just let me know! The portfolio is fully prepared to display both images beautifully. 🌟

