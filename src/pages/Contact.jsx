import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, PlayCircle, Users, Book, HelpCircle } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would handle form submission here
        alert("Thanks for your message! This is a demo.");
    };

    return (
        <div className="bg-slate-950 font-sans text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Get in Touch with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Our Team</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto font-light">
                            We're here to help you succeed. Whether you have questions, need support, or want to learn more about our platform, we'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-12 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ContactOption
                            icon={MessageSquare}
                            title="Live Chat"
                            desc="Get instant help from our support team. Available 24/7."
                            cta="Start Chat"
                            color="text-blue-400"
                            bg="bg-blue-500/10"
                            btnColor="bg-blue-600 hover:bg-blue-700"
                        />
                        <ContactOption
                            icon={Mail}
                            title="Email Support"
                            desc="Send us a detailed message and we'll get back to you within 24h."
                            cta="Send Email"
                            color="text-green-400"
                            bg="bg-green-500/10"
                            btnColor="bg-green-600 hover:bg-green-700"
                        />
                        <ContactOption
                            icon={Phone}
                            title="Phone Support"
                            desc="Speak directly with our experts. Available for Pro users."
                            cta="Call Now"
                            color="text-purple-400"
                            bg="bg-purple-500/10"
                            btnColor="bg-purple-600 hover:bg-purple-700"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-slate-900 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Send us a message</h2>
                        <p className="text-slate-400">Fill out the form below and we'll get back to you as soon as possible</p>
                    </div>

                    <div className="bg-slate-950 rounded-3xl shadow-xl p-8 md:p-12 border border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="First name" id="first-name" required />
                                <InputField label="Last name" id="last-name" required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Email address" id="email" type="email" required />
                                <InputField label="Phone number" id="phone" type="tel" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Restaurant name" id="restaurant-name" />
                                <div>
                                    <label htmlFor="inquiry-type" className="block text-sm font-medium text-slate-300 mb-2">Inquiry type *</label>
                                    <select id="inquiry-type" name="inquiry-type" required
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none">
                                        <option value="">Select an option</option>
                                        <option value="general">General Question</option>
                                        <option value="sales">Sales Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Question</option>
                                    </select>
                                </div>
                            </div>

                            <InputField label="Subject" id="subject" required />

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                                <textarea id="message" name="message" rows="6" required
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                                    placeholder="Tell us how we can help you..."></textarea>
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" id="newsletter" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                                <label htmlFor="newsletter" className="ml-2 block text-sm text-slate-400">
                                    I'd like to receive updates and tips about restaurant technology
                                </label>
                            </div>

                            <button type="submit"
                                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-bold text-lg shadow-lg hover:shadow-blue-600/20">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Help Resources */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Help Resources</h2>
                        <p className="text-slate-400">Find answers to common questions and learn how to get the most out of RestaurantTech</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ResourceCard icon={HelpCircle} title="Help Center" desc="Browse our comprehensive knowledge base and tutorials" cta="Visit Help Center" color="text-blue-400" />
                        <ResourceCard icon={Book} title="Documentation" desc="Detailed guides and API documentation for developers" cta="View Docs" color="text-green-400" />
                        <ResourceCard icon={PlayCircle} title="Video Tutorials" desc="Step-by-step video guides to help you get started" cta="Watch Videos" color="text-purple-400" />
                        <ResourceCard icon={Users} title="Community" desc="Connect with other restaurant owners and share tips" cta="Join Community" color="text-orange-400" />
                    </div>
                </div>
            </section>

            {/* Offices */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Offices</h2>
                        <p className="text-slate-400">Visit us at one of our locations worldwide</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <OfficeCard city="San Francisco" address="123 Tech Street, CA 94105" type="Headquarters" color="text-blue-400" bg="bg-blue-500/10" />
                        <OfficeCard city="New York" address="456 Business Ave, NY 10001" type="Sales Office" color="text-green-400" bg="bg-green-500/10" />
                        <OfficeCard city="London" address="789 Innovation Road, UK EC1A 1BB" type="European Office" color="text-purple-400" bg="bg-purple-500/10" />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactOption = ({ icon: Icon, title, desc, cta, color, bg, btnColor }) => (
    <div className="text-center p-8 bg-slate-900 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
            <Icon className={`${color} w-8 h-8`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 mb-8 font-light">{desc}</p>
        <button className={`${btnColor} text-white px-8 py-3 rounded-xl font-bold transition-colors w-full sm:w-auto`}>
            {cta}
        </button>
    </div>
);

const InputField = ({ label, id, type = "text", required }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">{label} {required && '*'}</label>
        <input type={type} id={id} name={id} required={required}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none" />
    </div>
);

const ResourceCard = ({ icon: Icon, title, desc, cta, color }) => (
    <div className="text-center p-6 bg-slate-900 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
        <Icon className={`${color} w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform`} />
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{desc}</p>
        <span className={`${color} font-medium text-sm flex items-center justify-center`}>{cta} →</span>
    </div>
);

const OfficeCard = ({ city, address, type, color, bg }) => (
    <div className="text-center p-8 border border-white/5 rounded-2xl bg-slate-950">
        <div className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <MapPin className={`${color} w-5 h-5`} />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{city}</h3>
        <p className="text-slate-400 mb-2 whitespace-pre-line">{address}</p>
        <p className="text-xs text-slate-500 uppercase tracking-widest">{type}</p>
    </div>
);

export default Contact;
