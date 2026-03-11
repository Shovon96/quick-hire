"use client"

import Image from "next/image";
import logoIcon from "../../../public/assets/logoIcon.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [user, setUser] = useState<any>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("https://quick-hire-server-amber.vercel.app/api/auth/me", {
                method: "GET",
                credentials: "include", 
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const user = await response.json();
            setUser(user.data);
        };

        fetchUser();
    }, []);

    const isAdmin = user?.role === "ADMIN";

    return (
        <nav className="bg-transparent sticky top-0 left-0 right-0 z-50 backdrop-blur-md md:backdrop-blur-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                                <Image src={logoIcon} alt="Logo" width={32} height={32} />
                            </div>
                            <span style={{ fontFamily: 'var(--font-clash)' }} className="text-xl sm:text-2xl font-semibold text-[#25324B]">QuickHire</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/findjobs" className="font-epilogue text-[#515B6F] hover:text-gray-900 font-medium text-base">
                            Find Jobs
                        </Link>
                        <Link href="#" className="font-epilogue text-[#515B6F] hover:text-gray-900 font-medium text-base">
                            Browse Companies
                        </Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="font-epilogue text-[#4640DE] font-bold text-base">
                            Login
                        </Link>
                        <Link
                            href={isAdmin ? "/admin/dashboard" : "/register"}
                            className="font-epilogue bg-[#4640DE] text-white font-bold text-base px-6 py-3 rounded hover:bg-[#3730c3] transition-colors"
                        >
                            {isAdmin ? "Dashboard" : "Sign Up"}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-[#25324B] hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4 pt-4">
                            {/* Mobile Navigation Links */}
                            <Link 
                                href="/findjobs" 
                                className="font-epilogue text-gray-900 font-medium text-base py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Find Jobs
                            </Link>
                            <Link 
                                href="#" 
                                className="font-epilogue text-gray-900 font-medium text-base py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Browse Companies
                            </Link>
                            
                            {/* Mobile Auth Buttons */}
                            <div className="flex flex-col gap-3 pt-2">
                                <Link 
                                    href="/login" 
                                    className="font-epilogue text-[#4640DE] font-bold text-base text-center py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href={isAdmin ? "/admin/dashboard" : "/register"}
                                    className="font-epilogue bg-[#4640DE] text-white font-bold text-base px-6 py-3 rounded text-center hover:bg-[#3730c3] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {isAdmin ? "Dashboard" : "Sign Up"}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
