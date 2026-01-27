import React from 'react';
import {
    Calendar, Truck, Star, BarChart, Users, ShieldCheck,
    ShoppingCart, Paintbrush, Megaphone, Bot, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center pt-16 pb-20 relative overflow-hidden">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                            <span className="text-indigo-200 text-sm font-medium tracking-wider uppercase">Premium Restaurant Solutions</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
                            Redefining
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-100 to-white drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"> Excellence</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            Experience the future of restaurant management. Where <span className="text-indigo-300 font-medium">limitless customization</span> meets <span className="text-indigo-300 font-medium">stunning design</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/account" className="group relative px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] hover:-translate-y-1">
                                Start Free Trial
                                <span className="hidden group-hover:inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                            <a href="#features-grid" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full text-lg font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md">
                                Explore Features
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features-grid" className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Core Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        <FeatureCard
                            icon={Calendar}
                            title="Table Reservation"
                            desc="Allow customers to book tables online. Manage capacity and prevent overbooking with our smart system."
                        />
                        <FeatureCard
                            icon={Truck}
                            title="Delivery Management"
                            desc="Streamline your delivery operations. Integration with major delivery partners and real-time tracking."
                        />
                        <FeatureCard
                            icon={Star}
                            title="Reviews & Ratings"
                            desc="Collect and manage customer reviews. Build trust and improve your reputation with automated feedback loops."
                        />
                        <FeatureCard
                            icon={BarChart}
                            title="Analytics Dashboard"
                            desc="Gain insights into your business performance. Track sales, popular items, and customer trends."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Staff Management"
                            desc="Manage simplified scheduling, payroll, and performance tracking for your entire team."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Secure Payments"
                            desc="Accept payments securely with integrated processing. Support for all major cards and digital wallets."
                        />
                    </div>

                    {/* Feature Highlights (Alternating) */}
                    <FeatureHighlight
                        icon={ShoppingCart}
                        iconColor="text-green-500"
                        iconBg="bg-green-500/10"
                        title="Online Ordering System"
                        desc="Complete online ordering solution with payment processing, delivery management, and real-time order tracking."
                        list={[
                            "Integrated payment processing",
                            "Real-time order tracking",
                            "Delivery zone management",
                            "Mobile-optimized experience"
                        ]}
                        cta="Get Started"
                        ctaLink="/pricing"
                        imageSlot={<div className="bg-white/5 border border-white/10 rounded-2xl h-80 flex items-center justify-center"><p className="text-slate-500">App Interface Preview</p></div>}
                    />

                    <FeatureHighlight
                        icon={Paintbrush}
                        iconColor="text-blue-500"
                        iconBg="bg-blue-500/10"
                        title="Website Builder"
                        desc="Create stunning restaurant websites with our intuitive drag-and-drop builder. No technical skills required."
                        list={[
                            "50+ professional templates",
                            "Drag-and-drop visual editor",
                            "SEO optimization tools",
                            "Custom domain support"
                        ]}
                        cta="View Templates"
                        ctaLink="/templates"
                        reversed
                        imageSlot={<div className="bg-white/5 border border-white/10 rounded-2xl h-80 flex items-center justify-center"><p className="text-slate-500">Builder Interface Preview</p></div>}
                    />

                    <FeatureHighlight
                        icon={Bot}
                        iconColor="text-orange-500"
                        iconBg="bg-orange-500/10"
                        title="AI-Powered Chat"
                        desc="24/7 AI customer support that handles orders, answers questions, and provides personalized recommendations."
                        list={[
                            "Natural language processing",
                            "Order taking & modifications",
                            "Menu recommendations",
                            "Seamless human handoff"
                        ]}
                        cta="Try Demo"
                        ctaLink="/contact"
                        imageSlot={<div className="bg-white/5 border border-white/10 rounded-2xl h-80 flex items-center justify-center"><p className="text-slate-500">AI Chat Preview</p></div>}
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-indigo-900/20 border-t border-indigo-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/50"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to transform your restaurant?
                    </h2>
                    <p className="text-xl text-indigo-200 mb-10">
                        Join thousands of restaurants already using RestaurantTech to grow their business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/account" className="bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-colors duration-200">
                            Start Free Trial
                        </Link>
                        <Link to="/contact" className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.2)]">
        <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-white/5">
            <Icon className="text-indigo-400 w-7 h-7 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-light">{desc}</p>
    </div>
);

const FeatureHighlight = ({ icon: Icon, iconColor, iconBg, title, desc, list, cta, ctaLink, reversed, imageSlot }) => (
    <div className={`flex flex-col lg:flex-row gap-16 items-center mb-32 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1">
            <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className={`${iconColor} w-6 h-6`} />
                </div>
                <h2 className="text-3xl font-bold text-white">{title}</h2>
            </div>
            <p className="text-lg text-slate-400 mb-8 font-light leading-relaxed">
                {desc}
            </p>
            <ul className="space-y-4 mb-10">
                {list.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                            <ArrowRight className="text-indigo-400 w-3 h-3" />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>
            <Link to={ctaLink} className={`inline-flex items-center gap-2 ${iconColor} font-semibold hover:text-white transition-colors`}>
                {cta} <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
        <div className="flex-1 w-full">
            {imageSlot}
        </div>
    </div>
);

export default Features;
