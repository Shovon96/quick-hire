'use client';

import { useState } from 'react';
import { Plus, Menu } from 'lucide-react';
import Sidebar from '../../components/dashboard/Sidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import JobsTable from '../../components/dashboard/JobsTable';
import PostJobForm from '../../components/dashboard/PostJobForm';

export default function ManageJobsPage() {
    const [showPostForm, setShowPostForm] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handlePostSuccess = () => {
        setShowPostForm(false);
        setRefreshKey(prev => prev + 1);
    };

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
                {!showPostForm ? (
                    <div className="p-4 sm:p-6 lg:p-8">
                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <div>
                                <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#25324B] mb-2">
                                    Manage Jobs
                                </h1>
                                <p className="font-epilogue text-[#7C8493] text-sm sm:text-base">
                                    View and manage all your job listings
                                </p>
                            </div>

                            <button
                                onClick={() => setShowPostForm(true)}
                                className="flex items-center cursor-pointer gap-2 bg-[#4640DE] text-white font-epilogue font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#3730c3] transition-colors whitespace-nowrap"
                            >
                                <Plus size={20} />
                                Post a Job
                            </button>
                        </div>

                        {/* Jobs Table */}
                        <div className="overflow-x-auto">
                            <JobsTable key={refreshKey} />
                        </div>
                    </div>
                ) : (
                    <div className="p-4 sm:p-6 lg:p-8">
                        <PostJobForm
                            onClose={() => setShowPostForm(false)}
                            onSuccess={handlePostSuccess}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
