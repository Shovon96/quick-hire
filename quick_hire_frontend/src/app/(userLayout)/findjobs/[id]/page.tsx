'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { Job } from '../../../components/home/Jobs';

const API_URL = "http://localhost:5000/api/jobs";

const tagColors: Record<string, string> = {
    Marketing: "bg-[#FFA500]/10 text-[#FFA500]",
    Design: "bg-[#00D084]/10 text-[#00D084]",
    Business: "bg-[#7C3AED]/10 text-[#7C3AED]",
    Technology: "bg-[#EF4444]/10 text-[#EF4444]",
};

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
                console.log('response', response)

                if (!response.ok) throw new Error('Failed to fetch job details');

                const data = await response.json();
                console.log('data', data)
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

    if (loading) {
        return (
            <div>
                <div className="bg-white border border-b">
                    <Navbar />
                </div>
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <p className="text-[#7C8493] text-[16px]">Loading job details...</p>
                </div>
            </div>
        );
    }

    if (error || !job) {
        return (
            <div>
                <div className="bg-white border border-b">
                    <Navbar />
                </div>
                <div className="min-h-screen bg-white">
                    <div className="max-w-360 mx-auto px-31 py-16">
                        <div className="text-center">
                            <p className="text-red-600 text-[16px] mb-4">{error || 'Job not found'}</p>
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
            <div className="bg-white border border-b">
                <Navbar />
            </div>
            <div className="bg-white min-h-screen">
                <div className="max-w-360 mx-auto px-31 py-12">
                    {/* Back Button */}
                    <Link href="/findjobs" className="inline-flex items-center gap-2 text-[#4640DE] font-epilogue font-semibold text-[14px] mb-8 hover:gap-3 transition-all">
                        ← Back to jobs
                    </Link>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {/* Left Column - Job Details */}
                        <div className="col-span-2">
                            {/* Header Section */}
                            <div className="border border-[#E8E8F0] rounded-lg p-8 mb-8 bg-white">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-start gap-6">
                                        {/* Company Logo */}
                                        <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                                            <Image
                                                src={job.company.logo}
                                                alt={job.company.name}
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Job Title and Company */}
                                        <div>
                                            <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-[36px] font-bold text-[#25324B] mb-2">
                                                {job.title}
                                            </h1>
                                            <p className="font-epilogue text-[#7C8493] text-[16px] mb-4">
                                                {job.company.name}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="text-xs px-3 py-1.5 rounded-full font-epilogue font-medium bg-blue-50 text-blue-600">
                                                    {job.employmentType.replace('_', ' ')}
                                                </span>
                                                <span className="text-xs px-3 py-1.5 rounded-full font-epilogue font-medium bg-green-50 text-green-600">
                                                    {job.jobType}
                                                </span>
                                                {job.jobCategory.map((tag: string) => (
                                                    <span
                                                        key={tag}
                                                        className={`text-xs px-3 py-1.5 rounded-full font-epilogue font-medium ${tagColors[tag] || "bg-gray-100 text-gray-600"}`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    <button className="bg-[#4640DE] text-white font-epilogue font-semibold text-[16px] px-8 py-3 rounded-lg hover:bg-[#3a34b8] transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* Job Overview */}
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
                                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Salary</p>
                                    <p style={{ fontFamily: 'var(--font-clash)' }} className="font-bold text-[20px] text-[#25324B]">
                                        {job.salary}
                                    </p>
                                </div>

                                <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
                                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Job Type</p>
                                    <p style={{ fontFamily: 'var(--font-clash)' }} className="font-bold text-[20px] text-[#25324B]">
                                        {job.jobType}
                                    </p>
                                </div>

                                <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
                                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Experience</p>
                                    <p style={{ fontFamily: 'var(--font-clash)' }} className="font-bold text-[20px] text-[#25324B]">
                                        {job.experience}
                                    </p>
                                </div>

                                <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
                                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Vacancy</p>
                                    <p style={{ fontFamily: 'var(--font-clash)' }} className="font-bold text-[20px] text-[#25324B]">
                                        {job.vacancy}
                                    </p>
                                </div>
                            </div>

                            {/* Job Description */}
                            <div className="border border-[#E8E8F0] rounded-lg p-8 mb-8 bg-white">
                                <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-bold text-[#25324B] mb-4">
                                    About this job
                                </h2>
                                <p className="font-epilogue text-[#7C8493] text-[16px] leading-relaxed whitespace-pre-wrap">
                                    {job.description}
                                </p>
                            </div>

                            {/* Job Details */}
                            <div className="border border-[#E8E8F0] rounded-lg p-8 bg-white">
                                <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-bold text-[#25324B] mb-6">
                                    Job Details
                                </h2>

                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Location</p>
                                        <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                                            {job.jobLocation}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Employment Type</p>
                                        <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                                            {job.employmentType.replace('_', ' ')}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Application Deadline</p>
                                        <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                                            {job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'Not specified'}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Job Status</p>
                                        <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                                            {job.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Company Info */}
                        <div className="col-span-1">
                            {/* Company Card */}
                            <div className="border border-[#E8E8F0] rounded-lg p-8 bg-white sticky top-24">
                                <h3 style={{ fontFamily: 'var(--font-clash)' }} className="text-[20px] font-bold text-[#25324B] mb-6">
                                    About Company
                                </h3>

                                {/* Company Logo */}
                                <div className="w-full h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden mb-6">
                                    <Image
                                        src={job.company.logo}
                                        alt={job.company.name}
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                </div>

                                {/* Company Name */}
                                <h4 style={{ fontFamily: 'var(--font-clash)' }} className="text-[18px] font-bold text-[#25324B] mb-4">
                                    {job.company.name}
                                </h4>

                                {/* Company Details */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="font-epilogue text-[#7C8493] text-[12px] mb-1">Location</p>
                                        <p className="font-epilogue text-[#25324B] text-[14px] font-semibold">
                                            {job.company.location}
                                        </p>
                                    </div>

                                    {job.company.website && (
                                        <div>
                                            <p className="font-epilogue text-[#7C8493] text-[12px] mb-1">Website</p>
                                            <a
                                                href={job.company.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-epilogue text-[#4640DE] text-[14px] font-semibold hover:underline"
                                            >
                                                Visit Website
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Apply Button */}
                                <button className="w-full bg-[#4640DE] text-white font-epilogue font-semibold text-[16px] px-6 py-3 rounded-lg hover:bg-[#3a34b8] transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
