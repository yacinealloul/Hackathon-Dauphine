"use client";
"use strict";
import React, { useState } from 'react';

const Playground: React.FC = () => {
    const [code, setCode] = useState('');

    const handleRun = () => {
        // Handle running the code or analyzing the smart contract here
        console.log('Code to analyze:', code);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-20 px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-5xl font-extrabold mb-3">Smart Contract Playground</div>
                    <div className="text-xl text-gray-600">Write, import, and analyze your contracts in real-time.</div>
                </div>
                
                {/* Code Editor and Control */}
                <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row gap-8 mb-12">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-grow bg-gray-900 text-white p-4 rounded-md shadow-inner resize-none"
                        style={{ minHeight: '300px', fontFamily: 'monospace' }}
                        placeholder="Write your contract code here or import using the address..."
                    ></textarea>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleRun}
                            className="py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition duration-300 rounded-md text-white font-semibold shadow-md"
                        >
                            Run Analysis
                        </button>

                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Contract Address..."
                                className="flex-grow p-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <button
                                className="py-3 px-5 bg-gray-700 hover:bg-gray-600 transition duration-300 rounded-r-md text-white"
                            >
                                Import
                            </button>
                        </div>

                        <div className="text-gray-600 text-sm">
                            The import will fetch the contract from the provided address.
                        </div>
                    </div>
                </div>

                {/* Output Console */}
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                    <div className="font-semibold mb-4">Analysis Output:</div>
                    <pre className="bg-gray-900 text-white p-4 rounded-md shadow-inner" style={{ fontFamily: 'monospace', minHeight: '200px' }}>
                        {/* Your code analysis output will appear here */}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Playground;
