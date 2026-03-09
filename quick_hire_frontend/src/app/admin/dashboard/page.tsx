'use client';

import Sidebar from '../../components/dashboard/Sidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import StatCard from '../../components/dashboard/StatCard';
import JobStatistics from '../../components/dashboard/JobStatistics';
import JobOpenSummary from '../../components/dashboard/JobOpenSummary';

export default function DashboardPage() {
    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <DashboardHeader />

                {/* Content */}
                <div className="p-8">
                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
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
                    <div className="grid grid-cols-3 gap-8">
                        {/* Left Column - Job Statistics */}
                        <div className="col-span-2">
                            <JobStatistics />
                        </div>

                        {/* Right Column - Job Open Summary */}
                        <div className="col-span-1">
                            <JobOpenSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
