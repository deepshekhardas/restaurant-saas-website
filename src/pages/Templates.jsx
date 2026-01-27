import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Utensils, Coffee, Pizza, Wine, Truck, ArrowRight, Smartphone,
    ShoppingCart, Search, Gauge, Play, Monitor, Smartphone as MobileIcon
} from 'lucide-react';

const Templates = () => {
    const [filter, setFilter] = useState('all');

    const templates = [
        {
            id: 1,
            name: "Elegante",
            category: "fine-dining",
            desc: "Sophisticated design perfect for upscale restaurants and fine dining establishments.",
            icon: Wine,
            color: "from-slate-800 to-slate-900",
            tags: ["Fine Dining", "Dark Theme"]
        },
        {
            id: 2,
            name: "Bistro",
            category: "casual",
            desc: "Warm and inviting design ideal for casual dining restaurants and family establishments.",
            icon: Utensils,
            color: "from-orange-400 to-red-500",
            tags: ["Casual", "Warm Colors"]
        },
        {
            id: 3,
            name: "QuickBite",
            category: "fast-food",
            desc: "Bold and energetic design perfect for fast food chains and quick service restaurants.",
            icon: Pizza,
            color: "from-red-500 to-yellow-500",
            tags: ["Fast Food", "Bold Colors"]
        },
        {
            id: 4,
            name: "Brew & Bean",
            category: "cafe",
            desc: "Cozy and comfortable design tailored for coffee shops and bakeries.",
            icon: Coffee,
            color: "from-amber-600 to-orange-700",
            tags: ["Cafe", "Cozy"]
        },
        {
            id: 5,
            name: "Street Eats",
            category: "food-truck",
            desc: "Fun and vibrant design perfect for food trucks and mobile vendors.",
            icon: Truck,
            color: "from-green-500 to-blue-500",
            tags: ["Food Truck", "Vibrant"]
        },
        {
            id: 6,
            name: "Luxe",
            category: "fine-dining",
            desc: "Ultra-premium design for high-end restaurants and exclusive dining experiences.",
            icon: Wine,
            color: "from-purple-800 to-pink-800",
            tags: ["Luxury", "Premium"]
        },
    ];

    const filteredTemplates = filter === 'all'
        ? templates
        : templates.filter(t => t.category === filter);

    return (
        <div className="bg-slate-950 font-sans text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-slate-950"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Beautiful Restaurant <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Templates</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-light">
                            Choose from our collection of professionally designed templates. Each template is fully customizable and optimized for restaurants.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/account" className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-colors duration-200 shadow-lg shadow-purple-900/40">
                                Start Building
                            </Link>
                            <a href="#templates" className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors duration-200">
                                Browse Templates
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-slate-900 border-y border-white/5 sticky top-16 z-40 backdrop-blur-md bg-slate-900/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        <FilterButton label="All Templates" active={filter === 'all'} onClick={() => setFilter('all')} />
                        <FilterButton label="Fine Dining" active={filter === 'fine-dining'} onClick={() => setFilter('fine-dining')} />
                        <FilterButton label="Casual Dining" active={filter === 'casual'} onClick={() => setFilter('casual')} />
                        <FilterButton label="Fast Food" active={filter === 'fast-food'} onClick={() => setFilter('fast-food')} />
                        <FilterButton label="Cafe & Bakery" active={filter === 'cafe'} onClick={() => setFilter('cafe')} />
                        <FilterButton label="Food Truck" active={filter === 'food-truck'} onClick={() => setFilter('food-truck')} />
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section id="templates" className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTemplates.map(template => (
                            <div key={template.id} className="group bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1">
                                <div className={`aspect-video bg-gradient-to-br ${template.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="text-center text-white relative z-10 transition-transform duration-500 group-hover:scale-110">
                                        <template.icon className="w-12 h-12 mx-auto mb-3 opacity-90" />
                                        <p className="text-lg font-bold">{template.name}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Live Preview
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white">{template.name}</h3>
                                        <div className="flex gap-2">
                                            {template.tags.map((tag, idx) => (
                                                <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-slate-400">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-2 h-10">{template.desc}</p>
                                    <Link to="/account" className="inline-flex items-center text-purple-400 hover:text-white font-semibold transition-colors">
                                        Use Template <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredTemplates.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-500 text-lg">No templates found for this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Live Demo Section */}
            <section className="py-20 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">See Templates in Action</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Experience our templates with real content and interactive features</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DemoCard icon={Monitor} title="Desktop Demo" desc="See how your restaurant website looks on desktop computers" cta="View Desktop Demo" />
                        <DemoCard icon={Smartphone} title="Mobile Demo" desc="Experience the mobile-optimized version of our templates" cta="View Mobile Demo" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Every Template Includes</h2>
                        <p className="text-slate-400">All templates come with these powerful features built-in</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureItem icon={MobileIcon} title="Mobile Responsive" desc="Perfect on all devices" color="text-blue-400" bg="bg-blue-500/10" />
                        <FeatureItem icon={ShoppingCart} title="Online Ordering" desc="Built-in ordering system" color="text-green-400" bg="bg-green-500/10" />
                        <FeatureItem icon={Search} title="SEO Optimized" desc="Better search rankings" color="text-purple-400" bg="bg-purple-500/10" />
                        <FeatureItem icon={Gauge} title="Fast Loading" desc="Optimized performance" color="text-orange-400" bg="bg-orange-500/10" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-purple-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to build your restaurant website?
                    </h2>
                    <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
                        Choose a template and start customizing your restaurant website today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/account" className="bg-white text-purple-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-purple-50 transition-colors duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                        <Link to="/contact" className="border border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-purple-900 transition-colors duration-200">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FilterButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${active
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
    >
        {label}
    </button>
);

const DemoCard = ({ icon: Icon, title, desc, cta }) => (
    <div className="bg-slate-900 rounded-3xl p-8 text-center border border-white/5 hover:border-purple-500/30 transition-all duration-300">
        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon className="text-purple-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 mb-6">{desc}</p>
        <button className="bg-white/5 text-white border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
            {cta}
        </button>
    </div>
);

const FeatureItem = ({ icon: Icon, title, desc, color, bg }) => (
    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
        <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            <Icon className={`${color} w-6 h-6`} />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
    </div>
);

export default Templates;
