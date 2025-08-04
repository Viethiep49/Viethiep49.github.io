# Hiepne Photography Gallery

A modern, responsive photography gallery website inspired by Peter McKinnon's portfolio. Built with pure HTML, CSS, and vanilla JavaScript.

## 🌟 Features

### Gallery Layout
- **32 High-Quality Images**: Extensive gallery with diverse photography styles
- **Masonry-style Grid**: Images are displayed in a tight, responsive grid layout with no spacing or borders
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **CSS Grid & Columns**: Uses modern CSS for optimal performance and layout

### Navigation & Sections
- **Fixed Navigation**: Smooth scrolling navigation with active link highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **About Section**: Personal introduction and photography journey
- **Connect Section**: Contact form and social media links
- **Shop Section**: Coming soon section for future e-commerce features

### Cloudinary Integration
- **Optimized Image Loading**: Uses Cloudinary's transformation API for optimized images
- **Multiple Resolutions**: 
  - Gallery thumbnails: `w_800` (800px width)
  - Lightbox images: `w_2000` (2000px width)
- **Automatic Format & Quality**: Uses `f_auto` and `q_auto` for best performance

### PhotoSwipe Lightbox
- **Fullscreen View**: Click any image to open in a beautiful lightbox overlay
- **Navigation**: Swipe, arrow keys, or click to navigate between images
- **High-Resolution Loading**: Large images only load when lightbox opens
- **Anti-Copy Protection**: Right-click disabled in lightbox

### Dark/Light Mode Toggle
- **Theme Persistence**: User preference saved in localStorage
- **Smooth Transitions**: Elegant theme switching with CSS transitions
- **Accessible**: Keyboard navigation and focus indicators

### Anti-Copy Measures
- **Right-Click Disabled**: Context menu disabled across the entire site
- **Image Dragging Prevented**: Images cannot be dragged to desktop
- **Text Selection Disabled**: Prevents easy copying of content
- **Keyboard Shortcuts Blocked**: Prevents Ctrl+S, Ctrl+U, F12
- **Invisible Overlays**: Additional protection layers on images

## 🚀 Quick Start

### 1. Setup Cloudinary
1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name from the dashboard
3. Upload your images to Cloudinary in a `gallery` folder

### 2. Configure the Gallery
Edit `script.js` and update the `GALLERY_CONFIG`:

```javascript
const GALLERY_CONFIG = {
    cloudName: 'your-cloud-name', // Replace with your Cloudinary cloud name
    images: [
        {
            id: 1,
            title: 'Your Photo Title',
            description: 'Photo description',
            filename: 'gallery/your-photo.jpg' // Path in Cloudinary
        },
        // Add more images...
    ]
};
```

### 3. Customize Images
Replace the sample images with your own:
- Upload photos to Cloudinary
- Update the `images` array in `script.js`
- Use descriptive titles and descriptions

### 4. Deploy
- Upload all files to your web server
- Ensure HTTPS is enabled for security features
- Test on different devices and browsers

## 📁 File Structure

```
Viethiep49.github.io/
├── index.html          # Main HTML file with navigation and sections
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## 🎨 Customization

### Colors & Themes
The website uses CSS custom properties for easy theming. Key variables in `styles.css`:

```css
/* Light Mode Colors */
body.light-mode {
    background-color: #ffffff;
    color: #1a1a1a;
}

/* Dark Mode Colors */
body.dark-mode {
    background-color: #0a0a0a;
    color: #ffffff;
}
```

### Gallery Layout
Adjust the grid layout in `styles.css`:

```css
.gallery-grid {
    columns: 4; /* Number of columns on desktop */
    column-gap: 0;
}

@media (max-width: 1200px) {
    .gallery-grid { columns: 3; }
}
@media (max-width: 768px) {
    .gallery-grid { columns: 2; }
}
@media (max-width: 480px) {
    .gallery-grid { columns: 1; }
}
```

### Navigation
Customize the navigation menu in `index.html`:

```html
<ul class="nav-menu">
    <li><a href="#gallery" class="nav-link active">Gallery</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#connect" class="nav-link">Connect</a></li>
    <li><a href="#shop" class="nav-link">Shop</a></li>
</ul>
```

### PhotoSwipe Configuration
Customize the lightbox behavior in `script.js`:

```javascript
const options = {
    bgOpacity: 0.9,
    showHideOpacity: true,
    history: false,
    closeOnVerticalDrag: true,
    // ... more options
};
```

## 🔧 Technical Details

### Performance Optimizations
- **Lazy Loading**: Images load only when needed
- **Intersection Observer**: Efficient scroll-based loading
- **Optimized Images**: Cloudinary handles compression and formats
- **Minimal Dependencies**: Only PhotoSwipe CDN for lightbox

### Security Features
- **Anti-Copy Measures**: Multiple layers of protection
- **Right-Click Disabled**: Prevents easy image saving
- **Keyboard Shortcuts Blocked**: Prevents developer tools access
- **Drag Prevention**: Images cannot be dragged to desktop

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Support**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Works without JavaScript (basic gallery)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (4 columns)
- **Tablet**: 768px - 1199px (3 columns)
- **Mobile**: 480px - 767px (2 columns)
- **Small Mobile**: <480px (1 column)

## 🎯 SEO & Accessibility

- **Semantic HTML**: Proper heading structure and landmarks
- **Alt Text**: All images have descriptive alt attributes
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear focus states for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and roles

## 🔒 Security Considerations

The anti-copy measures are designed to deter casual copying but cannot prevent all methods of image capture. For maximum protection:

1. **Watermark Images**: Add subtle watermarks to your photos
2. **Low Resolution**: Use lower resolution images for web display
3. **Legal Protection**: Consider copyright notices and terms of use
4. **Regular Monitoring**: Check for unauthorized use of your images

## 🐛 Troubleshooting

### Images Not Loading
- Check Cloudinary cloud name in `script.js`
- Verify image paths in Cloudinary
- Ensure images are publicly accessible

### Lightbox Not Working
- Check PhotoSwipe CDN links in `index.html`
- Verify JavaScript console for errors
- Ensure images have proper alt attributes

### Theme Not Saving
- Check localStorage is enabled in browser
- Verify theme toggle button exists in HTML
- Check for JavaScript errors in console

### Navigation Issues
- Ensure all section IDs match navigation links
- Check for JavaScript errors in console
- Verify smooth scrolling is supported by browser

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions or support, please check the troubleshooting section above or create an issue in the repository.

---

**Built with ❤️ for photographers who want to showcase their work beautifully and securely.**