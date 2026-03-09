'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Job } from "./Jobs";

const API_URL = "http://localhost:5000/api/jobs";

const tagColors: Record<string, string> = {
    Marketing: "bg-[#FFA500]/10 text-[#FFA500]",
    Design: "bg-[#00D084]/10 text-[#00D084]",
    Business: "bg-[#7C3AED]/10 text-[#7C3AED]",
    Technology: "bg-[#EF4444]/10 text-[#EF4444]",
};

export default function LatestJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (!response.ok) throw new Error('Failed to fetch jobs');

                const data = await response.json();
                const mappedJobs: Job[] = data.data.slice(0, 6).map((job: any) => ({
                    id: job._id,
                    title: job.title,
                    description: job.description,
                    jobType: job.jobType,
                    jobLocation: job.jobLocation || 'Location not specified',
                    experience: job.experience || 'Not specified',
                    salary: job.salary,
                    employmentType: job.employmentType,
                    jobCategory: Array.isArray(job.jobCategory) ? job.jobCategory : [job.jobCategory],
                    vacancy: job.vacancy || '1',
                    applicationDeadline: job.applicationDeadline || '',
                    status: job.status,
                    postedBy: job.postedBy,
                    company: {
                        name: job.company?.name || 'Company',
                        logo: job.company?.logo || "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
                        location: job.company?.location || job.jobLocation || 'Location not specified',
                        website: job.company?.website || ''
                    }
                }));

                setJobs(mappedJobs);
            } catch (err) {
                console.error("Fetch error:", err);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return (
            <section className="py-10 md:py-16 bg-gray-50">
                <div className="max-w-360 mx-auto px-31">
                    <p className="text-center text-[#7C8493]">Loading latest jobs...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-360 mx-auto px-31">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[48px] font-bold text-[#25324B]">
                        Latest <span className="text-[#26A4FF]">jobs open</span>
                    </h2>

                    <a href="/findjobs" className="font-epilogue text-[#4640DE] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                        Show all jobs <span>→</span>
                    </a>
                </div>

                {/* Jobs List Grid */}
                <div className="grid grid-cols-2 gap-8">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="border border-[#E8E8F0] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white flex items-start gap-6"
                        >
                            {/* Logo */}
                            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                                <Image
                                    src={job.company.logo}
                                    alt={job.company.name}
                                    width={56}
                                    height={56}
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Job Title */}
                                <h3 style={{ fontFamily: 'var(--font-clash)' }} className="font-semibold text-[20px] text-[#25324B] mb-1">
                                    {job.title}
                                </h3>

                                {/* Company and Location */}
                                <p className="font-epilogue text-[#7C8493] text-[14px] mb-4">
                                    {job.company.name} • {job.company.location}
                                </p>

                                {/* Tags */}
                                <div className="flex gap-2 flex-wrap">
                                    <span className="text-xs px-3 py-1.5 rounded-full font-epilogue font-medium bg-blue-50 text-blue-600">
                                        {job.employmentType.replace('_', ' ')}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
