// components/Sidebar.js
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className="p-4 fixed top-0 left-0 z-20 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white bg-gray-800 p-2 rounded focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Drawer Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Drawer Sidebar</h2>
          <nav>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">About</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services">
                  <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">Services</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay to close drawer when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
