'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import Sidebar from '../../components/dashboard/Sidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import JobsTable from '../../components/dashboard/JobsTable';

export default function ManageJobsPage() {
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
                    {/* Page Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-[32px] font-bold text-[#25324B] mb-2">
                                Manage Jobs
                            </h1>
                            <p className="font-epilogue text-[#7C8493] text-[14px]">
                                View and manage all your job listings
                            </p>
                        </div>

                        <button className="flex items-center gap-2 bg-[#4640DE] text-white font-epilogue font-semibold text-[14px] px-6 py-3 rounded-lg hover:bg-[#3a34b8] transition-colors">
                            <Plus size={20} />
                            Post a Job
                        </button>
                    </div>

                    {/* Jobs Table */}
                    <JobsTable />
                </div>
            </div>
        </div>
    );
}
