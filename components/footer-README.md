# Footer Component

A reusable footer component for the TabBoard website that can be easily included in any page.

## Features

- **Responsive Design**: Automatically adapts to mobile and desktop screens
- **TabBoard Branding**: Includes the TabBoard logo and branding elements
- **Multiple Sections**: Extension, Resources, and Community links
- **Call-to-Action**: Tip the Creator button with hover effects
- **Easy Integration**: Simple script inclusion with automatic setup

## Files

- `footer.html` - The HTML structure of the footer
- `footer.css` - The CSS styles for the footer
- `footer-include.js` - The JavaScript file that automatically injects the footer into any page

## Usage

### Method 1: Using the Include Script (Recommended)

Simply include the footer-include.js script in your HTML file:

```html
<script src="components/footer-include.js"></script>
```

The footer will be automatically added to the end of the body and styled properly.

### Method 2: Manual Integration

If you prefer manual control, you can:

1. Include the CSS file in your HTML head:
```html
<link rel="stylesheet" href="components/footer.css">
```

2. Copy the HTML content from `footer.html` and paste it where you want the footer to appear.

## Requirements

Your page must have the following CSS variables defined for the footer to display correctly:

```css
:root {
    --primary-color: #60a5fa;
    --dark-bg: #0f172a;
    --dark-secondary: #1e293b;
    --dark-tertiary: #334155;
}
```

## Customization

To customize the footer:

1. Edit `footer.html` to modify the structure and links
2. Edit `footer.css` to change the styling
3. Update `footer-include.js` with your changes

## Responsive Behavior

- **Desktop**: 4-column grid layout with logo and copyright side-by-side
- **Mobile**: Single column layout with logo and copyright stacked vertically

## Links Structure

- **Extension**: Chrome Web Store, Documentation, Support
- **Resources**: Privacy Policy, Contact
- **Community**: GitHub, Feature Requests

## Browser Support

The footer component works in all modern browsers and includes fallbacks for older browsers. 