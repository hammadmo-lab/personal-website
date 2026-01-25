#!/bin/bash

echo "=== SEO Testing Script ==="
echo ""

# Test 1: Check if OG image exists
echo "✓ Checking OG Image..."
if [ -f "public/og-image.jpg" ]; then
    echo "  ✓ og-image.jpg exists ($(du -h public/og-image.jpg | cut -f1))"
else
    echo "  ✗ og-image.jpg NOT FOUND"
fi

# Test 2: Check robots.txt
echo ""
echo "✓ Checking robots.txt..."
if [ -f "public/robots.txt" ]; then
    echo "  ✓ robots.txt exists"
    grep -q "Sitemap:" public/robots.txt && echo "  ✓ Sitemap URL present"
else
    echo "  ✗ robots.txt NOT FOUND"
fi

# Test 3: Check sitemap.xml
echo ""
echo "✓ Checking sitemap.xml..."
if [ -f "public/sitemap.xml" ]; then
    echo "  ✓ sitemap.xml exists"
    grep -q "mohamedhammad.com" public/sitemap.xml && echo "  ✓ Correct domain"
    grep -q "og-image" public/sitemap.xml || echo "  ℹ OG image not in sitemap (normal)"
else
    echo "  ✗ sitemap.xml NOT FOUND"
fi

# Test 4: Check meta tags in index.html
echo ""
echo "✓ Checking Meta Tags in index.html..."
grep -q "og:image.*og-image.jpg" index.html && echo "  ✓ OG image meta tag correct"
grep -q "twitter:image.*og-image.jpg" index.html && echo "  ✓ Twitter image meta tag correct"
grep -q "og:title" index.html && echo "  ✓ OG title present"
grep -q "og:description" index.html && echo "  ✓ OG description present"
grep -q "canonical" index.html && echo "  ✓ Canonical URL present"

# Test 5: Check JSON-LD
echo ""
echo "✓ Checking Structured Data..."
grep -q "application/ld+json" index.html && echo "  ✓ JSON-LD script present"
grep -q '"@type": "Person"' index.html && echo "  ✓ Person schema present"

echo ""
echo "=== Testing Complete ==="
echo ""
echo "Next steps:"
echo "1. Deploy to production"
echo "2. Test with: https://metatags.io"
echo "3. Validate with: https://developers.facebook.com/tools/debug/"
echo "4. Submit sitemap to Google Search Console"
