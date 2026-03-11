'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { Job } from '../../../components/home/Jobs';
import JobHeader from '../../../components/jobDetails/JobHeader';
import JobOverview from '../../../components/jobDetails/JobOverview';
import JobDescription from '../../../components/jobDetails/JobDescription';
import JobDetails from '../../../components/jobDetails/JobDetails';
import CompanyCard from '../../../components/jobDetails/CompanyCard';
import ApplyJobForm from '../../../components/jobDetails/ApplyJobForm';

// const API_URL = "http://localhost:5000/api/jobs";
const API_URL = "https://quick-hire-server-amber.vercel.app/api/jobs";

export default function JobDetailsPage() {
    const params = useParams();
    const jobId = params?.id as string;
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!jobId) return;

        const fetchJob = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/${jobId}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (!response.ok) throw new Error('Failed to fetch job details');

                const data = await response.json();
                const jobData = data.data;

                const mappedJob: Job = {
                    id: jobData._id,
                    title: jobData.title,
                    description: jobData.description,
                    jobType: jobData.jobType,
                    jobLocation: jobData.jobLocation || 'Location not specified',
                    experience: jobData.experience || 'Not specified',
                    salary: jobData.salary,
                    employmentType: jobData.employmentType,
                    jobCategory: Array.isArray(jobData.jobCategory) ? jobData.jobCategory : [jobData.jobCategory],
                    vacancy: jobData.vacancy || '1',
                    applicationDeadline: jobData.applicationDeadline || '',
                    status: jobData.status,
                    postedBy: jobData.postedBy,
                    company: {
                        name: jobData.company?.name || 'Company',
                        logo: jobData.company?.logo || "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
                        location: jobData.company?.location || jobData.jobLocation || 'Location not specified',
                        website: jobData.company?.website || ''
                    }
                };

                setJob(mappedJob);
                setError(null);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err instanceof Error ? err.message : 'An error occurred');
                setJob(null);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);

    const handleApplyClick = () => {
        const element = document.getElementById("applicationForm");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    if (loading) {
        return (
            <div>
                <div className="bg-white border-b">
                    <Navbar />
                </div>
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <p className="text-[#7C8493] text-base">Loading job details...</p>
                </div>
            </div>
        );
    }

    if (error || !job) {
        return (
            <div>
                <div className="bg-white border-b">
                    <Navbar />
                </div>
                <div className="min-h-screen bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <div className="text-center">
                            <p className="text-red-600 text-base mb-4">{error || 'Job not found'}</p>
                            <Link href="/findjobs" className="text-[#4640DE] font-semibold hover:underline">
                                ← Back to jobs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-white border-b">
                <Navbar />
            </div>
            <div className="bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    {/* Back Button */}
                    <Link href="/findjobs" className="inline-flex items-center gap-2 text-[#4640DE] font-epilogue font-semibold text-sm sm:text-base mb-6 sm:mb-8 hover:gap-3 transition-all">
                        ← Back to jobs
                    </Link>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Left Column - Job Details */}
                        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                            <JobHeader job={job} onApplyClick={handleApplyClick} />
                            <JobOverview job={job} />
                            <JobDescription job={job} />
                            <JobDetails job={job} />
                        </div>

                        {/* Right Column - Company Info */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20">
                                <CompanyCard job={job} />
                            </div>
                        </div>
                    </div>

                    {/* Apply Form */}
                    <div id="applicationForm" className="mt-8 sm:mt-12">
                        <ApplyJobForm jobId={job.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
