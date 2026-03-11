'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../../components/dashboard/Sidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import StatCard from '../../components/dashboard/StatCard';
import JobStatistics from '../../components/dashboard/JobStatistics';
import JobOpenSummary from '../../components/dashboard/JobOpenSummary';

export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
                aria-label="Open menu"
            >
                <Menu size={24} className="text-[#25324B]" />
            </button>

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content */}
            <div className="flex-1 w-full">
                {/* Header */}
                <DashboardHeader />

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <StatCard
                            number="76"
                            label="New candidates to review"
                            bgColor="bg-[#4640DE]"
                        />
                        <StatCard
                            number="3"
                            label="Schedule for today"
                            bgColor="bg-[#00D084]"
                        />
                        <StatCard
                            number="24"
                            label="Messages received"
                            bgColor="bg-[#26A4FF]"
                        />
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Left Column - Job Statistics */}
                        <div className="lg:col-span-2">
                            <JobStatistics />
                        </div>

                        {/* Right Column - Job Open Summary */}
                        <div className="lg:col-span-1">
                            <JobOpenSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
