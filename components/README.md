# TabBoard Mobile Menu Component

A fully responsive mobile menu component that matches the TabBoard website design exactly. This component provides a slide-out mobile navigation menu with smooth animations and touch-friendly interactions.

## Features

- ✅ **Full-width mobile menu** with pink accent border
- ✅ **Smooth slide-in animations** from the right
- ✅ **Touch-friendly interactions** with proper event handling
- ✅ **Backdrop overlay** for easy closing
- ✅ **Keyboard navigation** (Escape key to close)
- ✅ **Auto-close on link click** for seamless navigation
- ✅ **Responsive design** that only appears on mobile devices
- ✅ **Exact TabBoard styling** with proper colors and typography

## Quick Start

### Method 1: All-in-One Include (Recommended)

The easiest way to add the mobile menu to any page:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Page</title>
    <!-- Your existing CSS -->
    <style>
        /* Make sure you have these CSS variables defined */
        :root {
            --primary-color: #60a5fa;
            --primary-dark: #2563eb;
            --secondary-color: #8b5cf6;
            --accent-color: #ec4899;
            --text-dark: #1f2937;
            --text-light: #64748b;
            --light-gray: #f8fafc;
            --border-color: #e2e8f0;
        }
    </style>
</head>
<body>
    <!-- Your existing navigation -->
    <nav>
        <a href="#" class="logo">Your Logo</a>
        <!-- Mobile menu toggle will be automatically added here -->
    </nav>
    
    <!-- Your page content -->
    
    <!-- Include the mobile menu component -->
    <script src="components/mobile-menu-include.js"></script>
</body>
</html>
```

That's it! The mobile menu will be automatically added to your page.

### Method 2: Manual Include

If you prefer more control, you can include the components manually:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Page</title>
    <!-- Include the mobile menu CSS -->
    <link rel="stylesheet" href="components/mobile-menu.css">
    
    <!-- Make sure you have the required CSS variables -->
    <style>
        :root {
            --primary-color: #60a5fa;
            --primary-dark: #2563eb;
            --secondary-color: #8b5cf6;
            --accent-color: #ec4899;
            --text-dark: #1f2937;
            --text-light: #64748b;
            --light-gray: #f8fafc;
            --border-color: #e2e8f0;
        }
    </style>
</head>
<body>
    <!-- Your navigation with mobile menu toggle -->
    <nav>
        <a href="#" class="logo">Your Logo</a>
        <button class="mobile-menu-toggle" aria-label="Open menu">☰</button>
    </nav>
    
    <!-- Include the mobile menu HTML -->
    <div class="mobile-menu-backdrop" id="mobileMenuBackdrop"></div>
    <div class="mobile-menu" id="mobileMenu">
        <!-- Mobile menu content from mobile-menu.html -->
    </div>
    
    <!-- Include the mobile menu JavaScript -->
    <script src="components/mobile-menu.js"></script>
</body>
</html>
```

### Method 3: Copy from Documentation Page

You can also copy the exact implementation from `documentation.html` which has the complete working mobile menu with inline styles.

## File Structure

```
components/
├── mobile-menu.css              # Mobile menu styles
├── mobile-menu.js               # Mobile menu functionality
├── mobile-menu.html             # Mobile menu HTML template
├── mobile-menu-include.js       # All-in-one include script
├── mobile-menu-example.html     # Working example
└── README.md                    # This file
```

## CSS Variables Required

Make sure your page defines these CSS variables:

```css
:root {
    --primary-color: #60a5fa;        /* Light blue */
    --primary-dark: #2563eb;         /* Dark blue */
    --secondary-color: #8b5cf6;      /* Purple */
    --accent-color: #ec4899;         /* Pink (for borders and highlights) */
    --text-dark: #1f2937;            /* Dark text */
    --text-light: #64748b;           /* Light text */
    --light-gray: #f8fafc;           /* Light background */
    --border-color: #e2e8f0;         /* Border color */
}
```

## Customization

### Changing Links

Edit the `mobile-menu.html` file or modify the `mobileMenuHTML` variable in `mobile-menu-include.js` to change the navigation links.

### Styling

The mobile menu uses CSS variables for easy customization. You can override any of the variables in your main CSS file:

```css
:root {
    --accent-color: #your-brand-color;  /* Changes the pink highlights */
    --primary-dark: #your-cta-color;    /* Changes the CTA button color */
}
```

### Logo

Update the logo image path in the HTML:

```html
<img src="path/to/your/logo.png" alt="Your Logo">
```

## Browser Support

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ iOS Safari
- ✅ Android Chrome

## Technical Details

- **Breakpoint**: Mobile menu appears on screens ≤ 768px
- **Z-index**: Menu uses z-index 1000, backdrop uses 999
- **Animation**: 0.3s ease transition for smooth sliding
- **Touch**: Includes both click and touchend events for mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Troubleshooting

### Mobile menu not appearing
- Check that you have the CSS variables defined
- Ensure you're testing on a screen width ≤ 768px
- Check browser console for JavaScript errors

### Styles not matching
- Verify all CSS variables are defined correctly
- Make sure you're using the latest version of the component files
- Check for CSS conflicts with your existing styles

### Touch events not working
- The component includes both click and touchend events
- Test on an actual mobile device or use browser dev tools mobile emulation

## Example

See `mobile-menu-example.html` for a complete working example.

## Updates

This component is based on the exact working implementation from the TabBoard main site. Any updates to the main site mobile menu will be reflected in these component files. 