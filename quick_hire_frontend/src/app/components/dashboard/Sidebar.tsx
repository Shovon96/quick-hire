'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoIcon from "../../../../public/assets/logoIcon.png";
import { LayoutDashboard, Briefcase, LogOut } from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="w-64 bg-white border-r border-[#E8E8F0] min-h-screen flex flex-col">
            {/* Logo */}
            <Link href="/">
                <div className="flex items-center gap-2 px-6 py-4 border-b">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                        <Image src={logoIcon} alt="Logo" width={32} height={32} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-semibold text-[#25324B]">QuickHire</span>
                </div>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 p-6 space-y-2">
                <Link
                    href="/admin/dashboard"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-epilogue text-[14px] font-medium transition-colors ${isActive('/admin/dashboard')
                        ? 'bg-[#4640DE] text-white'
                        : 'text-[#7C8493] hover:bg-gray-50'
                        }`}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                <Link
                    href="/admin/manage-jobs"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-epilogue text-[14px] font-medium transition-colors ${isActive('/admin/manage-jobs')
                        ? 'bg-[#4640DE] text-white'
                        : 'text-[#7C8493] hover:bg-gray-50'
                        }`}
                >
                    <Briefcase size={20} />
                    Manage Jobs
                </Link>
            </nav>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg font-epilogue text-[14px] font-medium text-red-600 hover:bg-red-50 w-full transition-colors">
                <LogOut size={20} />
                Logout
            </button>
        </div>
    );
}
