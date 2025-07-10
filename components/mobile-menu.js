/**
 * Mobile Menu Component JavaScript - Exact working version from TabBoard main site
 * Handles mobile menu toggle, close, and backdrop functionality
 */

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
    
    console.log('Elements found:', {
        toggle: !!mobileMenuToggle,
        close: !!mobileMenuClose,
        menu: !!mobileMenu,
        backdrop: !!mobileMenuBackdrop
    });
    
    function openMobileMenu() {
        console.log('Opening mobile menu');
        if (mobileMenu && mobileMenuBackdrop) {
            mobileMenu.classList.add('active');
            mobileMenuBackdrop.classList.add('active');
            document.body.classList.add('mobile-menu-open');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeMobileMenu() {
        console.log('Closing mobile menu');
        if (mobileMenu && mobileMenuBackdrop) {
            mobileMenu.classList.remove('active');
            mobileMenuBackdrop.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        }
    }
    
    // Add click event to hamburger button
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked');
            openMobileMenu();
        });
        
        // Also add touch event for mobile devices
        mobileMenuToggle.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger touched');
            openMobileMenu();
        });
        
        console.log('Mobile menu toggle listeners attached');
    } else {
        console.log('Mobile menu toggle not found');
    }
    
    // Add click event to close button
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Close button clicked');
            closeMobileMenu();
        });
        
        // Also add touch event for mobile devices
        mobileMenuClose.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Close button touched');
            closeMobileMenu();
        });
        
        console.log('Mobile menu close listeners attached');
    }
    
    // Close mobile menu when clicking on backdrop
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
});

// Alternative initialization function for manual initialization
function initMobileMenu() {
    console.log('Manual mobile menu initialization');
    return {
        openMobileMenu: function() {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
            if (mobileMenu && mobileMenuBackdrop) {
                mobileMenu.classList.add('active');
                mobileMenuBackdrop.classList.add('active');
                document.body.classList.add('mobile-menu-open');
                document.body.style.overflow = 'hidden';
            }
        },
        closeMobileMenu: function() {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
            if (mobileMenu && mobileMenuBackdrop) {
                mobileMenu.classList.remove('active');
                mobileMenuBackdrop.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    };
} 