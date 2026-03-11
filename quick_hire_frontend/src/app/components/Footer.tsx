'use client';

import Image from "next/image";
import logoIcon from "../../../public/assets/logoIcon.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto px-4 md:px-12 lg:px-31 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <Image src={logoIcon} alt="Logo" width={32} height={32} />
              </div>
              <span style={{ fontFamily: 'var(--font-clash)' }} className="text-xl sm:text-2xl font-semibold text-[#fafcff]">QuickHire</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-white font-semibold text-sm">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Advice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-white font-semibold text-sm">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Help Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between pr-6 md:hidden">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">About</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Help Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm">Get job notifications</h3>
            <p className="text-gray-400 text-sm">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left">
            2021 © QuickHire. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-.001.02c.001.110.003.221.003.331 0 3.418-2.601 7.361-7.361 7.361-1.462 0-2.823-.428-3.968-1.165.202.024.407.036.615.036 1.213 0 2.329-.414 3.216-1.109-1.132-.021-2.087-.768-2.413-1.798.158.03.319.046.484.046.236 0 .467-.031.688-.089-1.184-.238-2.077-1.282-2.077-2.533v-.032c.349.194.749.31 1.177.324-.695-.465-1.153-1.259-1.153-2.159 0-.475.128-.921.351-1.304 1.275 1.563 3.182 2.594 5.329 2.703-.044-.189-.067-.384-.067-.583 0-1.413 1.147-2.561 2.561-2.561.736 0 1.403.311 1.871.809.584-.115 1.133-.328 1.628-.621-.191.598-.597 1.1-1.125 1.418.519-.062 1.012-.2 1.471-.407-.343.512-.777.966-1.276 1.329z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm3.5 11.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-7 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.938 1.708 0 .949-.746 1.707-1.986 1.707zm1.582 11.02H3.819V9.806h3.1v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
