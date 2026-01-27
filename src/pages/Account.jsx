import React, { useState } from 'react';
import { Mail, Lock, User, Store, Check, ArrowRight } from 'lucide-react';

const Account = () => {
    const [view, setView] = useState('signin'); // 'signin', 'signup', 'dashboard'

    const handleLogin = (e) => {
        e.preventDefault();
        setView('dashboard');
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setView('dashboard');
    };

    if (view === 'dashboard') {
        return <DashboardView />;
    }

    return (
        <div className="bg-slate-950 font-sans text-white min-h-screen pt-20 pb-16 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="w-full max-w-md px-4 relative z-10">
                {/* Auth Toggle */}
                <div className="flex bg-slate-900 p-1 rounded-xl mb-8 border border-white/5">
                    <button
                        onClick={() => setView('signin')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${view === 'signin' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setView('signup')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${view === 'signup' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {view === 'signin' ? (
                    <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 border border-white/10 animate-fade-in-up">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
                            <p className="text-slate-400">Sign in to your RestaurantTech account</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <InputField icon={Mail} id="signin-email" type="email" placeholder="Email address" required />
                            <InputField icon={Lock} id="signin-password" type="password" placeholder="Password" required />

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-slate-400 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-indigo-500 focus:ring-indigo-500" />
                                    <span className="ml-2">Remember me</span>
                                </label>
                                <a href="#" className="text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/25">
                                Sign In
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <SocialLogin />
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 border border-white/10 animate-fade-in-up">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                            <p className="text-slate-400">Start your 14-day free trial today</p>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <InputField icon={User} id="first-name" placeholder="First Name" required />
                                <InputField icon={User} id="last-name" placeholder="Last Name" required />
                            </div>
                            <InputField icon={Mail} id="signup-email" type="email" placeholder="Email address" required />
                            <InputField icon={Store} id="restaurant-name" placeholder="Restaurant Name" required />
                            <InputField icon={Lock} id="signup-password" type="password" placeholder="Password (8+ chars)" required />

                            <div className="text-xs text-slate-400">
                                By signing up, you agree to our <a href="#" className="text-indigo-400">Terms</a> and <a href="#" className="text-indigo-400">Privacy Policy</a>.
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/25">
                                Start Free Trial
                            </button>
                        </form>
                        <div className="mt-6 pt-6 border-t border-white/5 text-center">
                            <SocialLogin />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const DashboardView = () => (
    <div className="bg-slate-950 font-sans text-white min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md w-full px-4 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Check className="text-green-500 w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to RestaurantTech!</h2>
            <p className="text-slate-400 mb-8">Your account has been created successfully. You're now ready to build your dream restaurant website.</p>

            <div className="bg-slate-900 rounded-2xl p-6 border border-white/5 text-left space-y-4 mb-8">
                <DashboardStep icon={Store} title="Build Your Website" desc="Choose a template and customize" />
                <DashboardStep icon={ArrowRight} title="Set Up Menu" desc="Add items and pricing" />
            </div>

            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg">
                Go to Dashboard
            </button>
        </div>
    </div>
);

const InputField = ({ icon: Icon, id, type = "text", placeholder, required }) => (
    <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-slate-500" />
        </div>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            required={required}
            className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
        />
    </div>
);

const SocialLogin = () => (
    <>
        <div className="relative flex justify-center text-xs mb-4">
            <span className="px-2 bg-slate-900 text-slate-500">Or continue with</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 text-sm font-medium">
                Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 text-sm font-medium">
                Facebook
            </button>
        </div>
    </>
);

const DashboardStep = ({ icon: Icon, title, desc }) => (
    <div className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-4">
            <Icon className="text-indigo-400 w-5 h-5" />
        </div>
        <div>
            <h3 className="font-bold text-white text-sm">{title}</h3>
            <p className="text-xs text-slate-400">{desc}</p>
        </div>
    </div>
);

export default Account;
