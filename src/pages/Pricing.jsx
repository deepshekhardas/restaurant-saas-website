import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="bg-slate-950 font-sans text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Simple, Transparent <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Pricing</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-light">
                            Choose the perfect plan for your restaurant. Start free and scale as you grow.
                        </p>

                        {/* Pricing Toggle */}
                        <div className="flex items-center justify-center mb-8">
                            <span className={`mr-3 text-lg ${!isYearly ? 'text-white font-medium' : 'text-slate-500'}`}>Monthly</span>
                            <button
                                onClick={() => setIsYearly(!isYearly)}
                                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${isYearly ? 'bg-green-500' : 'bg-slate-700'}`}
                            >
                                <span className="sr-only">Toggle pricing</span>
                                <span
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition duration-300 ease-in-out ${isYearly ? 'translate-x-7' : 'translate-x-1'}`}
                                />
                            </button>
                            <span className={`ml-3 text-lg ${isYearly ? 'text-white font-medium' : 'text-slate-500'}`}>Yearly</span>
                            <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ml-3 border border-green-500/20">Save 20%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Starter Plan */}
                        <PricingCard
                            title="Starter"
                            desc="Perfect for small restaurants getting started"
                            price={isYearly ? "23" : "29"}
                            isYearly={isYearly}
                            features={[
                                "1 Restaurant Location",
                                "Basic Website Builder",
                                "Online Ordering",
                                "5 Menu Categories",
                                "Basic Analytics",
                                "Email Support",
                                "Mobile Responsive"
                            ]}
                        />

                        {/* Pro Plan */}
                        <PricingCard
                            title="Pro"
                            desc="Best for growing restaurants"
                            price={isYearly ? "63" : "79"}
                            isYearly={isYearly}
                            popular={true}
                            features={[
                                "3 Restaurant Locations",
                                "Advanced Website Builder",
                                "Online Ordering + Delivery",
                                "Unlimited Menu Items",
                                "AI Chat Support",
                                "Marketing Tools",
                                "Advanced Analytics",
                                "Priority Support",
                                "Custom Domain"
                            ]}
                        />

                        {/* Enterprise Plan */}
                        <PricingCard
                            title="Enterprise"
                            desc="For restaurant chains and franchises"
                            price={isYearly ? "159" : "199"}
                            isYearly={isYearly}
                            features={[
                                "Unlimited Locations",
                                "White-label Solution",
                                "Multi-location Management",
                                "Advanced Integrations",
                                "Custom Development",
                                "Dedicated Account Manager",
                                "24/7 Phone Support",
                                "SLA Guarantee",
                                "API Access"
                            ]}
                            ctaText="Contact Sales"
                            ctaLink="/contact"
                        />

                    </div>
                </div>
            </section>

            {/* Feature Comparison Link */}
            <section className="py-16 bg-slate-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Not sure which plan is right for you?</h2>
                    <button className="text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                        View Full Feature Comparison
                    </button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-slate-400">
                            Everything you need to know about our pricing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FAQItem
                            question="Is there a free trial?"
                            answer="Yes! We offer a 14-day free trial for all plans. No credit card required to get started."
                        />
                        <FAQItem
                            question="Can I change plans anytime?"
                            answer="Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                        />
                        <FAQItem
                            question="What payment methods do you accept?"
                            answer="We accept all major credit cards, PayPal, and bank transfers for Enterprise customers."
                        />
                        <FAQItem
                            question="Is there a setup fee?"
                            answer="No setup fees for Starter and Pro plans. Enterprise customers get free onboarding and setup assistance."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to get started?
                    </h2>
                    <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
                        Join thousands of restaurants already using RestaurantTech to grow their business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/account" className="bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-colors duration-200 shadow-lg">
                            Start Free Trial
                        </Link>
                        <Link to="/contact" className="border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

const PricingCard = ({ title, desc, price, isYearly, features, popular, ctaText = "Start Free Trial", ctaLink = "/account" }) => (
    <div className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 ${popular ? 'bg-indigo-900/20 border-indigo-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]' : 'bg-slate-900 border-white/10 hover:border-indigo-500/30'}`}>
        {popular && (
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                Most Popular
            </div>
        )}
        <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm h-10">{desc}</p>
        </div>

        <div className="text-center mb-8">
            <div className="flex items-baseline justify-center">
                <span className="text-5xl font-black text-white">${price}</span>
                <span className="text-slate-400 ml-2">/month</span>
            </div>
            {isYearly && <div className="text-sm text-green-400 mt-2 font-medium">Billed annually</div>}
        </div>

        <Link to={ctaLink} className={`block w-full text-center py-4 rounded-xl font-bold transition-colors duration-200 mb-8 ${popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white/10 text-white hover:bg-white/20'}`}>
            {ctaText}
        </Link>

        <ul className="space-y-4 text-left">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${popular ? 'text-indigo-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="bg-slate-900 rounded-xl p-8 border border-white/5 hover:border-white/10 transition-colors">
        <h3 className="text-lg font-bold text-white mb-3">{question}</h3>
        <p className="text-slate-400 leading-relaxed font-light">{answer}</p>
    </div>
);

export default Pricing;
