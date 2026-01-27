import React from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush, ShoppingCart, Megaphone, Bot, PlayCircle, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="bg-slate-950 font-sans text-white overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center pt-20 pb-20 relative">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
                        >
                            Custom Sites & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">Online Ordering</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            Build beautiful restaurant websites with integrated online ordering, marketing tools, and AI-powered customer chat. Everything you need to grow.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link to="/account"
                                className="px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 active:scale-95"
                            >
                                Start Free Trial
                            </Link>
                            <a href="#demo"
                                className="px-8 py-4 border border-white/20 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 active:scale-95"
                            >
                                See Demo
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Teaser Section */}
            <section className="py-24 bg-slate-900 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Everything you need to <span className="text-indigo-400">succeed</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            From beautiful websites to powerful ordering systems, we've got your restaurant covered.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureTeaser
                            icon={Paintbrush}
                            title="Website Builder"
                            desc="Create stunning restaurant websites with our drag-and-drop builder. No coding required."
                            color="text-indigo-400"
                            bg="bg-indigo-500/10"
                            delay={0.1}
                        />
                        <FeatureTeaser
                            icon={ShoppingCart}
                            title="Online Ordering"
                            desc="Integrated ordering system with payment processing and delivery management."
                            color="text-green-400"
                            bg="bg-green-500/10"
                            delay={0.2}
                        />
                        <FeatureTeaser
                            icon={Megaphone}
                            title="Marketing Tools"
                            desc="Email campaigns, social media integration, and customer loyalty programs."
                            color="text-purple-400"
                            bg="bg-purple-500/10"
                            delay={0.3}
                        />
                        <FeatureTeaser
                            icon={Bot}
                            title="AI Chat"
                            desc="24/7 AI-powered customer support to handle orders and answer questions."
                            color="text-orange-400"
                            bg="bg-orange-500/10"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-900 rounded-3xl shadow-2xl p-4 max-w-5xl mx-auto border border-white/5 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                        <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer border border-white/5">
                            {/* Placeholder Video Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                            <div className="text-center relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                                <PlayCircle className="w-24 h-24 text-white opacity-80 mb-4 mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:text-indigo-400 transition-colors" />
                                <p className="text-white font-medium text-lg">Watch Demo Video</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            What our customers say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="RestaurantTech transformed our delivery business. Orders are up 50% since we launched our new site!"
                            author="Sarah Johnson"
                            role="Owner, The Burger Joint"
                            delay={0.1}
                        />
                        <TestimonialCard
                            quote="The AI chat feature is a game changer. It handles customer questions while we focus on cooking."
                            author="Michael Chen"
                            role="Manager, Golden Dragon"
                            delay={0.2}
                        />
                        <TestimonialCard
                            quote="Setup was incredibly easy. We were live and taking orders in under 24 hours."
                            author="Elena Rodriguez"
                            role="Founder, Bella Pasta"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureTeaser = ({ icon: Icon, title, desc, color, bg, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="text-center group p-6 rounded-3xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5"
    >
        <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
            <Icon className={`${color} w-8 h-8`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-light">{desc}</p>
    </motion.div>
);

const TestimonialCard = ({ quote, author, role, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-slate-900 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
    >
        <div className="flex text-amber-400 mb-6 gap-1">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
        </div>
        <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"{quote}"</p>
        <div>
            <h4 className="font-bold text-white text-lg">{author}</h4>
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wide">{role}</p>
        </div>
    </motion.div>
);

export default Home;
