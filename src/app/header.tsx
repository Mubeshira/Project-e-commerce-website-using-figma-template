"use client"
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from 'react';




// 


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-5 bg-gray-100">
        <div className="flex items-center space-x-5">
          <h1 className="text-4xl font-bold">GREENMIND</h1>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {/* Simple hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links - visible on medium screens and up */}
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex items-center space-x-8">
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/products">Products</Link>
              </li>
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/contact">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Icons section */}
        <div className="hidden md:flex items-center space-x-5">
          <FaShoppingCart className="text-xl" />
          <IoPersonAddOutline className="text-xl" />
        </div>
      </header>

      {/* Mobile menu - toggled with the hamburger button */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-5">
          <nav>
            <ul className="space-y-4">
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/products">Products</Link>
              </li>
              <li className="hover:bg-teal-500 p-2 rounded-lg">
                <Link href="/contact">Contacts</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-5 mt-4">
            <FaShoppingCart className="text-xl" />
            <IoPersonAddOutline className="text-xl" />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;