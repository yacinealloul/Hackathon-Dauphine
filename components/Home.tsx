"use client";
import React, { useState } from 'react';

const Home: React.FC = () => {
    const [contractAddress, setContractAddress] = useState('');

    const handleAudit = () => {
        // Handle the audit logic here
        console.log('Auditing contract at address:', contractAddress);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-6xl font-extrabold text-blue-600 mb-3">AI Contract Auditor</div>
                    <div className="text-2xl text-gray-700 mb-6">Secure your contract with a touch of AI.</div>
                    <div className="text-md text-gray-600">Trusted by leading blockchain developers worldwide.</div>
                </div>

                {/* Main Action Section */}
                <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl mb-16 mx-auto w-full max-w-xl transition-colors">
                    <label htmlFor="contractAddress" className="block text-gray-900 dark:text-gray-100 mb-3 font-medium">Contract Address</label>
                    <div className="flex">
                        <input
                            type="text"
                            id="contractAddress"
                            value={contractAddress}
                            onChange={(e) => setContractAddress(e.target.value)}
                            placeholder="Enter or paste contract address..."
                            className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                        />
                        <button
                            onClick={handleAudit}
                            className="py-3 px-5 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition duration-300 rounded-r-md text-white font-medium"
                        >
                            Analyze
                        </button>
                    </div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Your contract's privacy is our priority.</div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <FeatureCard icon="🚀" title="Fast" description="Experience blazing fast results with our optimized AI." />
                    <FeatureCard icon="🔒" title="Secure" description="Your contract's safety is our top priority." />
                    <FeatureCard icon="💡" title="Innovative" description="Benefit from continuous AI learning and innovation." />
                </div>

                {/* Testimonials */}
                <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl mx-auto w-full max-w-2xl transition-colors">
                    <div className="text-gray-900 dark:text-gray-200 text-xl italic mb-6">"A revolutionary tool that transformed our auditing process!"</div>
                    <div className="flex items-center">
                        <div className="rounded-full bg-gray-300 w-14 h-14 mr-4"></div> {/* Placeholder for user image */}
                        <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Alex Johnson</div>
                            <div className="text-gray-600 dark:text-gray-400">Lead Blockchain Engineer, CryptoTech</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors">
            <div className="text-4xl mb-4">{icon}</div>
            <div className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">{title}</div>
            <div className="text-gray-700 dark:text-gray-400">{description}</div>
        </div>
    );
};

export default Home;
