// Main JavaScript for RestaurantTech Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Template filtering functionality
    const templateFilters = document.querySelectorAll('.template-filter');
    const templateCards = document.querySelectorAll('.template-card');
    
    templateFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active filter
            templateFilters.forEach(f => {
                f.classList.remove('bg-purple-600', 'text-white');
                f.classList.add('bg-gray-200', 'text-gray-700');
            });
            this.classList.remove('bg-gray-200', 'text-gray-700');
            this.classList.add('bg-purple-600', 'text-white');
            
            // Filter templates
            templateCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.classList.add('animate-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Pricing toggle functionality
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Show yearly prices
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                yearlyPrices.forEach(price => price.classList.remove('hidden'));
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                yearlyPrices.forEach(price => price.classList.add('hidden'));
            }
        });
    }
    
    // Feature comparison toggle
    const comparisonToggle = document.getElementById('comparison-toggle');
    const comparisonTable = document.getElementById('comparison-table');
    
    if (comparisonToggle && comparisonTable) {
        comparisonToggle.addEventListener('click', function() {
            comparisonTable.classList.toggle('hidden');
            this.textContent = comparisonTable.classList.contains('hidden') 
                ? 'Show Feature Comparison' 
                : 'Hide Feature Comparison';
        });
    }
    
    // Live chat widget functionality
    const chatWidget = document.querySelector('.chat-widget');
    const chatBubble = document.querySelector('.chat-bubble');
    
    if (chatBubble) {
        chatBubble.addEventListener('click', function() {
            // Simulate opening chat
            alert('Live chat would open here. This is a demo implementation.');
        });
    }
    
    // API Configuration
    const API_BASE_URL = 'http://localhost:5001/api';
    
    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form type
            const formType = this.closest('#signin-form') ? 'signin' : 
                           this.closest('#signup-form') ? 'signup' : 'contact';
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;
            
            try {
                let response;
                let formData = new FormData(this);
                let data = {};
                
                // Convert FormData to object
                for (let [key, value] of formData.entries()) {
                    data[key] = value;
                }
                
                // Handle different form types
                if (formType === 'contact') {
                    response = await fetch(`${API_BASE_URL}/contact`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });
                } else if (formType === 'signup') {
                    response = await fetch(`${API_BASE_URL}/auth/signup`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });
                } else if (formType === 'signin') {
                    response = await fetch(`${API_BASE_URL}/auth/signin`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });
                }
                
                const result = await response.json();
                
                if (result.success) {
                    showNotification(result.message, 'success');
                    
                    if (formType === 'contact') {
                        this.reset();
                    } else if (formType === 'signup' || formType === 'signin') {
                        // Store user data in localStorage
                        localStorage.setItem('user', JSON.stringify(result.user));
                        
                        // Show dashboard or redirect
                        if (document.getElementById('dashboard-preview')) {
                            document.getElementById('signin-form').classList.add('hidden');
                            document.getElementById('signup-form').classList.add('hidden');
                            document.getElementById('dashboard-preview').classList.remove('hidden');
                        }
                    }
                } else {
                    showNotification(result.message, 'error');
                }
                
            } catch (error) {
                console.error('API Error:', error);
                showNotification('Sorry, there was an error processing your request. Please try again.', 'error');
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    });
    
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('scale-105');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('scale-105');
        });
    });
    
    // Testimonial carousel (if exists)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 0) {
        setInterval(() => {
            testimonialCards[currentTestimonial].classList.add('opacity-0');
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            
            setTimeout(() => {
                testimonialCards.forEach(card => card.classList.add('hidden'));
                testimonialCards[currentTestimonial].classList.remove('hidden', 'opacity-0');
            }, 300);
        }, 5000);
    }
    
    // Stats counter animation
    const statsCounters = document.querySelectorAll('.stats-counter');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current).toLocaleString();
                }, 16);
                
                statsObserver.unobserve(counter);
            }
        });
    });
    
    statsCounters.forEach(counter => {
        statsObserver.observe(counter);
    });
    
    // Initialize tooltips (if using a tooltip library)
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            // Tooltip implementation would go here
        });
    });
    
    // Initialize any other interactive elements
    initializeInteractiveElements();
});

// Helper function to initialize interactive elements
function initializeInteractiveElements() {
    // Add any additional interactive functionality here
    
    // Example: Initialize modals
    const modalTriggers = document.querySelectorAll('[data-modal]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
            }
        });
    });
    
    // Example: Initialize dropdowns
    const dropdownTriggers = document.querySelectorAll('[data-dropdown]');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const dropdownId = this.getAttribute('data-dropdown');
            const dropdown = document.getElementById(dropdownId);
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create and show notification
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

