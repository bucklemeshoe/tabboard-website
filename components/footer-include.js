/**
 * Footer Component Include Script
 * This script automatically adds the footer to any page when included
 * 
 * Usage:
 * 1. Include this script in your HTML: <script src="components/footer-include.js"></script>
 * 2. Make sure your page has the required CSS variables
 * 3. The footer will be automatically added to the end of the body
 */

(function() {
    'use strict';

    // Footer CSS (extracted from index.html)
    const footerCSS = `
        /* Footer Component CSS */
        .footer {
            background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);
            color: white;
            padding: 80px 0 60px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
            margin-bottom: 60px;
            text-align: left;
        }

        .footer-section h3 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .footer-section p {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            margin-bottom: 8px;
        }

        .footer-section:first-child p {
            max-width: 400px;
        }

        .footer-section a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-section a:hover {
            color: var(--primary-color);
        }

        .footer-bottom {
            border-top: 1px solid var(--dark-tertiary);
            padding-top: 30px;
            color: rgba(255, 255, 255, 0.5);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }

        .footer-logo img {
            width: 24px;
            height: 24px;
        }

        .footer-logo span {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
        }

        .footer-copyright {
            color: rgba(255, 255, 255, 0.5);
        }

        .footer-cta-button {
            background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 50%, #e53e3e 100%);
            color: white !important;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 20px;
            box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
        }

        .footer-cta-button:link,
        .footer-cta-button:visited,
        .footer-cta-button:active {
            color: white !important;
        }

        .footer-cta-button:hover {
            background: linear-gradient(135deg, #ff8a80 0%, #ff6b6b 50%, #ff5252 100%);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
            color: #fdf2f8 !important;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 30px;
            }
            
            .footer-section:first-child p {
                max-width: 100%;
                margin: 0 auto;
            }
            
            .footer-bottom {
                flex-direction: column;
                gap: 12px;
                text-align: center;
            }
        }
    `;

    // Footer HTML
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>TabBoard</h3>
                        <p>Advanced tab session manager for Chrome. Built for productivity, designed for privacy.</p>
                        <a href="https://ko-fi.com/bucklemeshoe" class="footer-cta-button">
                            <span>❤️</span> Tip the Creator
                        </a>
                    </div>
                    <div class="footer-section">
                        <h3>Extension</h3>
                        <p><a href="https://chrome.google.com/webstore/detail/tabboard/">Chrome Web Store</a></p>
                        <p><a href="documentation.html">Documentation</a></p>
                        <p><a href="privacy-policy.html">Privacy Policy</a></p>
                        <p><a href="support.html">Support</a></p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <a href="index.html" class="footer-logo">
                        <img src="assets/tabboard-icon-48.png" alt="TabBoard">
                        <span>TabBoard</span>
                    </a>
                    <div class="footer-copyright">
                        <p>&copy; 2025 TabBoard. Built for people who need better tab management.</p>
                    </div>
                </div>
            </div>
        </footer>
    `;

    // Function to inject CSS
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = footerCSS;
        document.head.appendChild(style);
    }

    // Function to inject HTML
    function injectHTML() {
        // Remove existing footer if it exists
        const existingFooter = document.querySelector('.footer');
        if (existingFooter) {
            existingFooter.remove();
        }

        // Add footer to the end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Initialize the footer when DOM is ready
    function init() {
        injectCSS();
        injectHTML();
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(); 