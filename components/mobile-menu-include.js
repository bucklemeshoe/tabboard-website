/**
 * Mobile Menu Component Include Script - Exact working version from TabBoard main site
 * This script automatically adds the mobile menu to any page when included
 * 
 * Usage:
 * 1. Include this script in your HTML: <script src="components/mobile-menu-include.js"></script>
 * 2. Make sure your page has the required CSS variables
 * 3. The mobile menu will be automatically added and initialized
 */

(function() {
    'use strict';

    // CSS Variables that should be defined in your main CSS
    const requiredCSSVariables = `
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
    `;

    // Mobile Menu CSS
    const mobileMenuCSS = `
        /* Mobile Menu Component CSS - Exact working version from TabBoard main site */
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--text-dark);
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.3s ease;
            z-index: 1001;
            position: relative;
            min-width: 40px;
            min-height: 40px;
            touch-action: manipulation;
        }

        .mobile-menu-toggle:hover {
            background: var(--light-gray);
        }

        .mobile-menu-toggle:active {
            transform: scale(0.95);
            background: var(--border-color);
        }



        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            max-width: 100%;
            height: 100vh;
            background: white;
            z-index: 1000;
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
            border-left: 3px solid var(--accent-color);
        }

        .mobile-menu.active {
            transform: translateX(0);
        }

        body.mobile-menu-open .mobile-menu-toggle {
            display: none !important;
        }

        .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid var(--border-color);
            background: white;
            position: sticky;
            top: 0;
            z-index: 1001;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-header-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .mobile-menu-title {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--accent-color);
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .mobile-menu-close {
            background: var(--light-gray);
            border: none;
            font-size: 18px;
            color: var(--text-dark);
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.3s ease;
            min-width: 40px;
            min-height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            touch-action: manipulation;
        }

        .mobile-menu-close:hover {
            background: var(--border-color);
            transform: scale(0.95);
        }

        .mobile-menu-close:active {
            transform: scale(0.95);
            background: var(--border-color);
        }

        .mobile-menu-content {
            padding: 20px;
        }

        .mobile-menu-section {
            margin-bottom: 40px;
        }

        .mobile-menu-section h3 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--text-dark);
            border-bottom: 2px solid #efefef;
            padding-bottom: 8px;
        }

        .mobile-menu-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .mobile-menu-link {
            color: var(--text-light);
            text-decoration: none;
            padding: 12px 0;
            font-size: 16px;
            font-weight: 500;
            transition: color 0.3s ease;
            border-bottom: 1px solid var(--border-color);
        }

        .mobile-menu-link:hover {
            color: var(--accent-color);
        }

        .mobile-menu-cta {
            background: var(--primary-dark);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            display: block;
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }

        .mobile-menu-cta:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
        }

        .mobile-menu-tip {
            background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 50%, #e53e3e 100%);
            color: white !important;
            padding: 16px 24px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 20px;
            transition: all 0.3s ease;
        }

        .mobile-menu-tip:link,
        .mobile-menu-tip:visited,
        .mobile-menu-tip:active {
            color: white !important;
        }

        .mobile-menu-tip:hover {
            background: linear-gradient(135deg, #ff8a80 0%, #ff6b6b 50%, #ff5252 100%);
            transform: translateY(-2px);
            color: #fdf2f8 !important;
        }

        .mobile-menu-divider {
            height: 1px;
            background: var(--border-color);
            margin: 30px 0;
        }

        .mobile-menu-backdrop {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .mobile-menu-backdrop.active {
            opacity: 1;
            pointer-events: auto;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
            text-decoration: none;
            font-family: 'Poppins', sans-serif;
        }

        .logo-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo-icon img {
            width: 32px;
            height: 32px;
            object-fit: contain;
        }

        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block;
            }
            
            .mobile-menu {
                display: block;
            }
            
            .mobile-menu-backdrop {
                display: block;
            }
        }
    `;

    // Mobile Menu HTML
    const mobileMenuHTML = `
        
        <div class="mobile-menu-backdrop" id="mobileMenuBackdrop"></div>
        
        <div class="mobile-menu" id="mobileMenu">
            <div class="mobile-menu-header">
                <div class="mobile-menu-header-content">
                    <a href="#" class="logo">
                        <div class="logo-icon">
                            <img src="assets/tabboard-icon-48.png" alt="TabBoard Logo">
                        </div>
                        TabBoard
                    </a>
                    <span class="mobile-menu-title">• Menu</span>
                </div>
                <button class="mobile-menu-close" aria-label="Close menu" title="Close Menu">
                    ✕
                </button>
            </div>
            
            <div class="mobile-menu-content">
                <a href="https://chrome.google.com/webstore/detail/tabboard/" class="mobile-menu-cta">Get Extension</a>
                
                <a href="https://ko-fi.com/bucklemeshoe" class="mobile-menu-tip">
                    <span>❤️</span> Tip the Creator
                </a>
                
                <div class="mobile-menu-divider"></div>
                
                <div class="mobile-menu-section">
                    <h3>Extension</h3>
                    <div class="mobile-menu-links">
                        <a href="https://chrome.google.com/webstore/detail/tabboard/" class="mobile-menu-link">Chrome Web Store</a>
                        <a href="documentation.html" class="mobile-menu-link">Documentation</a>
                        <a href="support.html" class="mobile-menu-link">Support</a>
                    </div>
                </div>
                
                <div class="mobile-menu-section">
                    <h3>Resources</h3>
                    <div class="mobile-menu-links">
                        <a href="privacy-policy.html" class="mobile-menu-link">Privacy Policy</a>
                        <a href="contact.html" class="mobile-menu-link">Contact</a>
                        <a href="#" class="mobile-menu-link">Updates</a>
                    </div>
                </div>
                
                <div class="mobile-menu-section">
                    <h3>Community</h3>
                    <div class="mobile-menu-links">
                        <a href="https://github.com/bucklemeshoe/tabboard-website" class="mobile-menu-link">GitHub</a>
                        <a href="contact.html" class="mobile-menu-link">Feedback</a>
                        <a href="feature-requests.html" class="mobile-menu-link">Feature Requests</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to add CSS to the page
    function addCSS() {
        const style = document.createElement('style');
        style.textContent = mobileMenuCSS;
        document.head.appendChild(style);
    }

    // Function to add mobile menu toggle to navigation
    function addMobileMenuToggle() {
        const nav = document.querySelector('nav');
        if (nav && !nav.querySelector('.mobile-menu-toggle')) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-menu-toggle';
            toggleButton.setAttribute('aria-label', 'Open menu');
            toggleButton.textContent = '☰';
            nav.appendChild(toggleButton);
        }
    }

    // Function to add mobile menu HTML to the page
    function addMobileMenuHTML() {
        if (!document.getElementById('mobileMenu')) {
            const mobileMenuContainer = document.createElement('div');
            mobileMenuContainer.innerHTML = mobileMenuHTML;
            
            // Add backdrop and menu to body
            document.body.appendChild(mobileMenuContainer.querySelector('.mobile-menu-backdrop'));
            document.body.appendChild(mobileMenuContainer.querySelector('.mobile-menu'));
        }
    }

    // Function to initialize mobile menu functionality
    function initializeMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
        
        function openMobileMenu() {
            if (mobileMenu && mobileMenuBackdrop) {
                mobileMenu.classList.add('active');
                mobileMenuBackdrop.classList.add('active');
                document.body.classList.add('mobile-menu-open');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeMobileMenu() {
            if (mobileMenu && mobileMenuBackdrop) {
                mobileMenu.classList.remove('active');
                mobileMenuBackdrop.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
        
        // Add event listeners
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openMobileMenu();
            });
            
            mobileMenuToggle.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openMobileMenu();
            });
        }
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
            
            mobileMenuClose.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
        }
        
        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.addEventListener('click', function(e) {
                if (e.target === mobileMenuBackdrop) {
                    closeMobileMenu();
                }
            });
        }
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta').forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Initialize everything when DOM is ready
    function init() {
        addCSS();
        addMobileMenuToggle();
        addMobileMenuHTML();
        initializeMobileMenu();
    }

    // Run initialization when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose public API
    window.MobileMenuComponent = {
        init: init,
        addCSS: addCSS,
        addMobileMenuToggle: addMobileMenuToggle,
        addMobileMenuHTML: addMobileMenuHTML,
        initializeMobileMenu: initializeMobileMenu
    };

})(); 