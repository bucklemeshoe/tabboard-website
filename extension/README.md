# TabBoard Chrome Extension

This directory contains the complete Chrome extension for TabBoard.

## Structure

```
extension/
├── manifest.json           # Extension configuration
├── popup.html              # Main popup interface
├── popup.js                # Core functionality
├── popup.css               # Styling and themes
├── background.js           # Service worker
├── saveprompt.html         # Save prompt modal
├── saveprompt.js           # Save prompt functionality
├── logo_icon_white.png     # Main logo (white version)
├── icons/                  # Extension icons
│   ├── tabboard-icon-16.png
│   ├── tabboard-icon-48.png
│   ├── tabboard-icon-128.png
│   ├── dark_mode_icon@2x.png
│   ├── light_mode_icon@2x.png
│   └── ...
├── assets/                 # Extension assets
│   ├── orange_bg.png
│   └── restoreAnimation.gif
└── README.md              # This file
```

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" 
3. Click "Load unpacked" and select this `extension/` directory
4. The TabBoard extension will be installed

## Development

After making changes:
1. Go to `chrome://extensions/`
2. Click the refresh button on TabBoard extension
3. Test your changes

## Publishing

This extension is ready for Chrome Web Store submission. See the main project documentation for submission guidelines. 