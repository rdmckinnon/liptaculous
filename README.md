# Liptaculous - Coming Soon Website

A beautiful "coming soon" page for Liptaculous, a premium lip gloss brand.

## Features

- Elegant design with custom color scheme
- Animated floral and leaf decorations
- Email signup form (ready for Netlify Forms)
- Social media links
- Fully responsive design
- Optimized for Cloudflare Pages

## Color Scheme

- **Platinum**: #d8e2dc
- **Champagne Pink**: #ffe5d9
- **Pink**: #ffcad4
- **Cherry Blossom Pink**: #f4acb7
- **Mountbatten Pink**: #9d8189

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to Pages > Create a project
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher
6. Click "Save and Deploy"

### Option 2: Via Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=liptaculous
```

## Email Form Integration

The form is configured to use **Formspree**. To activate it:

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and copy your form ID
3. Update `src/pages/index.astro` line 92:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

See `EMAIL_SETUP.md` for alternative email collection services.

## Customization

- Update social media links in `src/pages/index.astro` (lines 104-119)
- Modify colors in `src/styles/global.css`
- Adjust fonts in the Google Fonts link (line 16 of index.astro)
- Update brand name and tagline in the logo section

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- Pure CSS animations
- SVG graphics for flowers and leaves
- Google Fonts (Playfair Display & Poppins)
