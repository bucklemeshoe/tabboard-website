#!/bin/bash

# TabBoard Website Preview Script
echo "🚀 Starting TabBoard website preview..."
echo ""
echo "Opening website in your default browser..."
echo "File location: $(pwd)/index.html"
echo ""

# Open the website in default browser (works on macOS, Linux, Windows)
if command -v open >/dev/null 2>&1; then
    # macOS
    open index.html
elif command -v xdg-open >/dev/null 2>&1; then
    # Linux
    xdg-open index.html
elif command -v start >/dev/null 2>&1; then
    # Windows
    start index.html
else
    echo "Please manually open index.html in your browser"
    echo "Full path: file://$(pwd)/index.html"
fi

echo ""
echo "✨ Your TabBoard promotional website should now be open!"
echo ""
echo "💡 Tips:"
echo "   • The website is fully responsive - try resizing your browser"
echo "   • Test on mobile devices using browser dev tools"
echo "   • All animations and effects should work smoothly"
echo ""
echo "🚀 Ready to deploy? Check website-overview.md for hosting options!" 