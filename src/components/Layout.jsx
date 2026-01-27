import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Utensils, Menu, X, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <div className="font-sans bg-slate-950 text-white selection:bg-indigo-500 selection:text-white antialiased overflow-x-hidden min-h-screen flex flex-col">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                        ? 'bg-slate-950/80 backdrop-blur-xl border-indigo-500/20 py-2 shadow-lg shadow-indigo-500/5'
                        : 'bg-transparent border-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-2 group">
                                <div className="w-10 h-10 mr-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                                    <Utensils className="text-white w-5 h-5" />
                                </div>
                                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 tracking-tight">
                                    RestaurantTech
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink to="/" current={location.pathname}>Home</NavLink>
                            <NavLink to="/features" current={location.pathname}>Features</NavLink>
                            <NavLink to="/templates" current={location.pathname}>Templates</NavLink>
                            <NavLink to="/pricing" current={location.pathname}>Pricing</NavLink>
                            <NavLink to="/contact" current={location.pathname}>Contact</NavLink>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/account" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide hover:underline decoration-indigo-500 underline-offset-4">
                                Sign In
                            </Link>
                            <Link to="/account" className="bg-white text-slate-900 px-5 py-2.5 rounded-full hover:bg-indigo-50 transition-all duration-200 text-sm font-bold tracking-wide shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 active:scale-95">
                                Start Free Trial
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-slate-950 border-t border-indigo-500/20"
                    >
                        <div className="px-4 py-4 space-y-2">
                            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                            <MobileNavLink to="/features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
                            <MobileNavLink to="/templates" onClick={() => setIsMenuOpen(false)}>Templates</MobileNavLink>
                            <MobileNavLink to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</MobileNavLink>
                            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                            <div className="border-t border-indigo-500/20 pt-4 mt-2">
                                <MobileNavLink to="/account" onClick={() => setIsMenuOpen(false)}>Sign In</MobileNavLink>
                                <Link
                                    to="/account"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full px-3 py-3 bg-indigo-600 text-white rounded-xl mx-auto text-center hover:bg-indigo-700 transition-colors duration-200 font-bold"
                                >
                                    Start Free Trial
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* Main Content */}
            <main className="flex-grow pt-0">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-16 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Utensils className="text-white w-4 h-4" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">RestaurantTech</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Empowering restaurants with modern technology solutions for growth and success.
                            </p>
                            <div className="flex space-x-4">
                                <SocialIcon icon={Twitter} />
                                <SocialIcon icon={Facebook} />
                                <SocialIcon icon={Linkedin} />
                                <SocialIcon icon={Instagram} />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Product</h3>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><FooterLink to="/features">Features</FooterLink></li>
                                <li><FooterLink to="/templates">Templates</FooterLink></li>
                                <li><FooterLink to="/pricing">Pricing</FooterLink></li>
                                <li><FooterLink to="#">Integrations</FooterLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Support</h3>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                                <li><FooterLink to="#">Help Center</FooterLink></li>
                                <li><FooterLink to="#">Documentation</FooterLink></li>
                                <li><FooterLink to="#">API Reference</FooterLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h3>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><FooterLink to="#">About Us</FooterLink></li>
                                <li><FooterLink to="#">Blog</FooterLink></li>
                                <li><FooterLink to="#">Careers</FooterLink></li>
                                <li><FooterLink to="#">Privacy Policy</FooterLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">© 2025 RestaurantTech. All rights reserved.</p>
                        <div className="flex space-x-8 text-sm text-slate-500">
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Helper Components
const NavLink = ({ to, children, current }) => {
    const isActive = current === to;
    return (
        <Link
            to={to}
            className={`text-sm font-bold tracking-wide transition-all duration-300 relative py-2 ${isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
        >
            {children}
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] rounded-full"
                />
            )}
        </Link>
    );
};

const MobileNavLink = ({ to, children, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="block px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-xl font-medium"
    >
        {children}
    </Link>
);

const FooterLink = ({ to, children }) => (
    <Link to={to} className="hover:text-indigo-400 transition-colors duration-200 block w-max">
        {children}
    </Link>
);

const SocialIcon = ({ icon: Icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
        <Icon size={18} />
    </a>
);

export default Layout;
