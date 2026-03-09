'use client';

import { Bell } from 'lucide-react';

export default function DashboardHeader() {
    return (
        <div className="bg-white border-b border-[#E8E8F0] px-6 py-3.5 flex items-center justify-between">
            <div>
                <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-[18px] font-semibold text-[#25324B]">
                   Here is your job listings statistic report
                </h1>
            </div>

                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors mr-5 border">
                    <Bell size={24} className="text-[#7C8493]" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
        </div>
    );
}
