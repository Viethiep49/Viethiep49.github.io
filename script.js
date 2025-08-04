// Gallery Configuration
const GALLERY_CONFIG = {
    // Replace with your actual Cloudinary cloud name
    cloudName: 'your-cloud-name',
    // Gallery images data - replace with your actual images
    images: [
        {
            id: 1,
            title: 'Mountain Vista',
            description: 'Captured during golden hour',
            filename: 'gallery/photo1.jpg'
        },
        {
            id: 2,
            title: 'City Lights',
            description: 'Urban exploration at night',
            filename: 'gallery/photo2.jpg'
        },
        {
            id: 3,
            title: 'Forest Path',
            description: 'Peaceful morning walk',
            filename: 'gallery/photo3.jpg'
        },
        {
            id: 4,
            title: 'Ocean Waves',
            description: 'Serenity by the sea',
            filename: 'gallery/photo4.jpg'
        },
        {
            id: 5,
            title: 'Golden Hour',
            description: 'Perfect timing',
            filename: 'gallery/photo5.jpg'
        },
        {
            id: 6,
            title: 'Nature\'s Details',
            description: 'Close-up beauty',
            filename: 'gallery/photo6.jpg'
        },
        {
            id: 7,
            title: 'Street Life',
            description: 'Urban moments',
            filename: 'gallery/photo7.jpg'
        },
        {
            id: 8,
            title: 'Beach Sunset',
            description: 'Coastal beauty',
            filename: 'gallery/photo8.jpg'
        },
        {
            id: 9,
            title: 'Mountain Peak',
            description: 'High altitude adventure',
            filename: 'gallery/photo9.jpg'
        },
        {
            id: 10,
            title: 'Urban Architecture',
            description: 'Modern cityscape',
            filename: 'gallery/photo10.jpg'
        },
        {
            id: 11,
            title: 'Forest Canopy',
            description: 'Green cathedral',
            filename: 'gallery/photo11.jpg'
        },
        {
            id: 12,
            title: 'Desert Dunes',
            description: 'Sandy landscapes',
            filename: 'gallery/photo12.jpg'
        },
        {
            id: 13,
            title: 'Street Photography',
            description: 'Life in motion',
            filename: 'gallery/photo13.jpg'
        },
        {
            id: 14,
            title: 'Portrait Session',
            description: 'Human connection',
            filename: 'gallery/photo14.jpg'
        },
        {
            id: 15,
            title: 'Food Photography',
            description: 'Culinary art',
            filename: 'gallery/photo15.jpg'
        },
        {
            id: 16,
            title: 'Travel Documentary',
            description: 'Journey captured',
            filename: 'gallery/photo16.jpg'
        },
        {
            id: 17,
            title: 'Abstract Art',
            description: 'Creative vision',
            filename: 'gallery/photo17.jpg'
        },
        {
            id: 18,
            title: 'Wildlife Shot',
            description: 'Nature\'s beauty',
            filename: 'gallery/photo18.jpg'
        },
        {
            id: 19,
            title: 'Event Coverage',
            description: 'Special moments',
            filename: 'gallery/photo19.jpg'
        },
        {
            id: 20,
            title: 'Product Photography',
            description: 'Commercial art',
            filename: 'gallery/photo20.jpg'
        },
        {
            id: 21,
            title: 'Landscape Masterpiece',
            description: 'Natural wonder',
            filename: 'gallery/photo21.jpg'
        },
        {
            id: 22,
            title: 'Urban Decay',
            description: 'Beauty in ruins',
            filename: 'gallery/photo22.jpg'
        },
        {
            id: 23,
            title: 'Macro Photography',
            description: 'Tiny details',
            filename: 'gallery/photo23.jpg'
        },
        {
            id: 24,
            title: 'Night Photography',
            description: 'After dark',
            filename: 'gallery/photo24.jpg'
        },
        {
            id: 25,
            title: 'Street Art',
            description: 'Urban creativity',
            filename: 'gallery/photo25.jpg'
        },
        {
            id: 26,
            title: 'Wedding Photography',
            description: 'Love captured',
            filename: 'gallery/photo26.jpg'
        },
        {
            id: 27,
            title: 'Fashion Shoot',
            description: 'Style and grace',
            filename: 'gallery/photo27.jpg'
        },
        {
            id: 28,
            title: 'Architectural Detail',
            description: 'Design elements',
            filename: 'gallery/photo28.jpg'
        },
        {
            id: 29,
            title: 'Nature\'s Patterns',
            description: 'Organic forms',
            filename: 'gallery/photo29.jpg'
        },
        {
            id: 30,
            title: 'Street Market',
            description: 'Local culture',
            filename: 'gallery/photo30.jpg'
        },
        {
            id: 31,
            title: 'Industrial Photography',
            description: 'Urban machinery',
            filename: 'gallery/photo31.jpg'
        },
        {
            id: 32,
            title: 'Minimalist Art',
            description: 'Less is more',
            filename: 'gallery/photo32.jpg'
        }
    ]
};

// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme(theme) {
        this.body.className = `${theme}-mode`;
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update toggle button icon
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveNavLink();
    }

    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }

    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                }
            });
        });
    }
}

// Form Management
class FormManager {
    constructor() {
        this.contactForm = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.contactForm);
        const name = this.contactForm.querySelector('input[type="text"]').value;
        const email = this.contactForm.querySelector('input[type="email"]').value;
        const message = this.contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            this.showMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 10px;
            text-align: center;
            font-weight: 500;
            ${type === 'success' ? 'background: rgba(76, 175, 80, 0.1); color: #4caf50;' : 'background: rgba(244, 67, 54, 0.1); color: #f44336;'}
        `;
        
        this.contactForm.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Gallery Management
class GalleryManager {
    constructor() {
        this.galleryGrid = document.getElementById('galleryGrid');
        this.photoSwipe = null;
        
        this.init();
    }

    init() {
        this.loadGallery();
        this.initPhotoSwipe();
        this.setupAntiCopyMeasures();
    }

    // Generate Cloudinary URLs
    getCloudinaryUrl(filename, width = 800, quality = 'auto', format = 'auto') {
        return `https://res.cloudinary.com/${GALLERY_CONFIG.cloudName}/image/upload/w_${width},q_${quality},f_${format}/${filename}`;
    }

    // Load gallery images
    loadGallery() {
        this.galleryGrid.innerHTML = '';
        
        GALLERY_CONFIG.images.forEach((image, index) => {
            const galleryItem = this.createGalleryItem(image, index);
            this.galleryGrid.appendChild(galleryItem);
        });
    }

    // Create gallery item element
    createGalleryItem(image, index) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);
        
        // Create image element
        const img = document.createElement('img');
        img.src = this.getCloudinaryUrl(image.filename, 800);
        img.alt = image.title;
        img.loading = 'lazy';
        
        // Add click event for PhotoSwipe
        item.addEventListener('click', (e) => {
            e.preventDefault();
            this.openPhotoSwipe(index);
        });
        
        item.appendChild(img);
        return item;
    }

    // Initialize PhotoSwipe
    initPhotoSwipe() {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#galleryGrid',
            children: 'a',
            pswpModule: PhotoSwipe
        });

        // Configure PhotoSwipe options
        lightbox.on('uiRegister', function() {
            lightbox.pswp.ui.registerElement({
                name: 'custom-caption',
                order: 9,
                isButton: false,
                appendTo: 'wrapper',
                onInit: (el, pswp) => {
                    lightbox.pswp.on('change', () => {
                        const currSlideElement = lightbox.pswp.currSlide.data.element;
                        const captionEl = el;
                        if (currSlideElement) {
                            const title = currSlideElement.querySelector('img').alt;
                            captionEl.innerHTML = title;
                        }
                    });
                }
            });
        });

        // Disable right-click in PhotoSwipe
        lightbox.on('uiRegister', function() {
            lightbox.pswp.on('uiRegister', function() {
                lightbox.pswp.container.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    return false;
                });
            });
        });

        lightbox.init();
        this.photoSwipe = lightbox;
    }

    // Open PhotoSwipe with specific image
    openPhotoSwipe(index) {
        const items = GALLERY_CONFIG.images.map(image => ({
            src: this.getCloudinaryUrl(image.filename, 2000),
            width: 2000,
            height: 1500,
            alt: image.title,
            title: image.description
        }));

        const options = {
            index: index,
            bgOpacity: 0.9,
            showHideOpacity: true,
            history: false,
            closeOnVerticalDrag: true,
            closeOnScroll: false,
            allowPanToNext: true,
            allowMouseDrag: true,
            allowTouchDrag: true,
            allowToSwipeUp: false,
            allowToSwipeDown: false,
            paddingFn: () => {
                return {
                    top: 30,
                    bottom: 30,
                    left: 70,
                    right: 70
                };
            }
        };

        const gallery = new PhotoSwipe({
            dataSource: items,
            ...options
        });

        // Disable right-click in PhotoSwipe
        gallery.on('uiRegister', function() {
            gallery.container.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
        });

        gallery.init();
    }

    // Setup anti-copy measures
    setupAntiCopyMeasures() {
        // Disable right-click context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // Disable keyboard shortcuts for saving
        document.addEventListener('keydown', (e) => {
            // Prevent Ctrl+S, Ctrl+U, F12
            if (
                (e.ctrlKey && (e.key === 's' || e.key === 'u')) ||
                e.key === 'F12'
            ) {
                e.preventDefault();
                return false;
            }
        });

        // Disable drag on images
        document.addEventListener('dragstart', (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });

        // Disable text selection
        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });
    }
}

// Anti-copy overlay system
class AntiCopyOverlay {
    constructor() {
        this.setupOverlays();
    }

    setupOverlays() {
        // Add invisible overlay to each image
        const images = document.querySelectorAll('.gallery-item img');
        images.forEach(img => {
            const overlay = document.createElement('div');
            overlay.className = 'anti-copy-overlay';
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: transparent;
                z-index: 10;
                pointer-events: none;
            `;
            
            const parent = img.parentElement;
            parent.style.position = 'relative';
            parent.appendChild(overlay);
        });
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.setupLazyLoading();
        this.setupIntersectionObserver();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        });
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        }, options);

        document.querySelectorAll('img[data-src]').forEach(img => {
            observer.observe(img);
        });
    }
}

// Error handling
class ErrorHandler {
    static handleImageError(img) {
        img.onerror = () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
            img.alt = 'Image not available';
        };
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const themeManager = new ThemeManager();
    const navigationManager = new NavigationManager();
    const formManager = new FormManager();
    const galleryManager = new GalleryManager();
    const antiCopyOverlay = new AntiCopyOverlay();
    const performanceOptimizer = new PerformanceOptimizer();

    // Add error handling to all images
    document.querySelectorAll('img').forEach(img => {
        ErrorHandler.handleImageError(img);
    });

    // Console message for developers
    console.log('🎨 Hiepne Photography Gallery loaded successfully!');
    console.log('📸 Features: Dark/Light mode, PhotoSwipe lightbox, Anti-copy measures');
    console.log('🔧 Remember to update the Cloudinary configuration in script.js');
});

// Additional security measures
(function() {
    // Disable developer tools (basic)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            return false;
        }
    });

    // Disable view source
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
    });
})(); 