#!/bin/bash

# This script creates app icons from the logo
# You'll need ImageMagick installed: brew install imagemagick

if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Install it with: brew install imagemagick"
    exit 1
fi

# Check if logo.webp exists
if [ ! -f "public/logo.webp" ]; then
    echo "Error: public/logo.webp not found"
    exit 1
fi

# Create a temporary PNG from webp
convert public/logo.webp -background "#050505" -gravity center -extent 512x512 temp-logo.png

# Generate 192x192 icon
convert temp-logo.png -resize 192x192 -background "#050505" -gravity center -extent 192x192 public/icon-192.png
echo "Created public/icon-192.png"

# Generate 512x512 icon
convert temp-logo.png -resize 512x512 -background "#050505" -gravity center -extent 512x512 public/icon-512.png
echo "Created public/icon-512.png"

# Cleanup
rm temp-logo.png

echo "✓ App icons created successfully!"
