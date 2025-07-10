# TabBoard Website

This directory contains the promotional landing page for TabBoard.

## Structure

```
website/
├── index.html              # Main landing page
├── assets/                 # Website assets
│   ├── browser_bg@2x.png  # Browser frame background
│   ├── extension_image_preview@2x.png  # Extension interface screenshot
│   └── logo_icon_white.png # TabBoard logo (white version)
└── README.md              # This file
```

## Development

To preview the website locally:
```bash
# From the website directory
open index.html
# Or use a local server
python -m http.server 8000
```

## Deployment

The website is ready for deployment to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Assets

- **Browser Background**: Used as container for extension preview
- **Extension Preview**: Screenshot of actual TabBoard interface  
- **Logo**: White version for dark background header 