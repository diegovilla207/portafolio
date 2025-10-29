# 🖼️ How to Add Your Images

## The Problem

Your image files are currently **empty** (0 bytes). You need to add your actual photos.

## Quick Fix Steps

### 1. Add Your Professional Photo

1. **Locate your professional photo** (the one in the black suit)
2. **Copy it** (right-click → Copy)
3. **Navigate to**: `portafolio/public/images/`
4. **Paste it** and rename to: `profile.jpg`
5. **Delete** the old empty `profile.jpg` file first if needed

### 2. Add Your Robotics Competition Photo

1. **Locate your robotics competition photo**
2. **Copy it**
3. **Navigate to**: `portafolio/public/images/`
4. **Paste it** and rename to: `robotics-competition.jpg`

### 3. Add Your UCSD Photo

1. **Locate your UCSD photo**
2. **Copy it**
3. **Navigate to**: `portafolio/public/images/`
4. **Paste it** and rename to: `ucsd.jpg`

## Alternative: Using Finder (Mac)

1. Open Finder
2. Navigate to: `/Users/diegovillanuevafernandez/portafolio/public/images/`
3. Drag and drop your three images into this folder
4. Make sure they're named exactly:
   - `profile.jpg`
   - `robotics-competition.jpg`
   - `ucsd.jpg`

## After Adding Images

1. **Restart the dev server** if it's running (Ctrl+C and `npm run dev` again)
2. The images should now load!

## Image Format

- Use JPG or PNG format
- Keep file sizes reasonable (under 2MB each for fast loading)
- For profile.jpg: Square format works best (e.g., 512x512px)
- For the other photos: Any aspect ratio is fine

## Troubleshooting

If images still don't work after adding them:
1. Make sure the file extensions are `.jpg` (not `.jpeg` or `.png`)
2. Check that the files are in the correct folder: `public/images/`
3. Clear your browser cache (Cmd+Shift+R)
4. Restart the dev server

