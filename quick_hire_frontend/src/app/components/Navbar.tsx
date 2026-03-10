"use client"

import Image from "next/image";
import logoIcon from "../../../public/assets/logoIcon.png";
import Link from "next/link";
import { getUserInfo } from "@/src/utils/getUserToken";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUserInfo();
            setUser(userData);
        };

        fetchUser();
    }, []);
    const isAdmin = user?.role === "ADMIN";

    console.log('isAdmin', isAdmin)

    return (
        <nav className="bg-transparent sticky top-0 left-0 right-0 z-99">
            <div className="max-w-360 mx-auto px-31 py-4 flex items-center justify-between">
                <div className="flex items-center justify-start gap-12">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                                <Image src={logoIcon} alt="Logo" width={32} height={32} />
                            </div>
                            <span style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-semibold text-[#25324B]">QuickHire</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4">
                        <Link href="/findjobs" className="font-epilogue text-[#515B6F] hover:text-gray-900 font-medium text-[16px]">
                            Find Jobs
                        </Link>
                        <Link href="#" className="font-epilogue text-[#515B6F] hover:text-gray-900 font-medium text-[16px]">
                            Browse Companies
                        </Link>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    <Link href="/login" className="font-epilogue text-[#4640DE] font-bold text-[16px]">
                        Login
                    </Link>
                    <Link
                        href={isAdmin ? "/admin/dashboard" : "/register"}
                        className="font-epilogue bg-[#4640DE] text-white font-bold text-[16px] px-6 py-3"
                    >
                        {isAdmin ? "Dashboard" : "Sign Up"}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
