"use client";
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';

const Navbar = () => {
  const { userId } = useAuth();

  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white">
      <div className="text-2xl font-bold">
        <Link href="/">
          <div className="cursor-pointer">
            odit.ai
          </div>
        </Link>
      </div>
      
      <div className="flex space-x-6 items-center">
        <Link href="/pricing">
          <div className="text-gray-300 hover:text-white cursor-pointer transition duration-300">Pricing</div>
        </Link>
        <Link href="/playground">
          <div className="text-gray-300 hover:text-white cursor-pointer transition duration-300">Playground</div>
        </Link>
        <Link href="/docs">
          <div className="text-gray-300 hover:text-white cursor-pointer transition duration-300">Docs</div>
        </Link>
        {!userId && <Link href="/sign-in">
          <button className="py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition duration-300 rounded-full">Get Started</button>
        </Link>}
        <div className="ml-4 bg-gray-800 p-2 rounded-full">

          {!userId && (<div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div> )}
          {userId && (<UserButton></UserButton>)}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
