'use client';

import { useState, useEffect } from 'react';
import JobCard from "./JobCard";
import { Job } from "./Jobs";

// const API_URL = "http://localhost:5000/api/jobs";
const API_URL = "https://quick-hire-server-amber.vercel.app/api/jobs";

export default function FeaturedJobs() {
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
                const mappedJobs: Job[] = data.data.slice(0, 4).map((job: any) => ({
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
            <section className="bg-white pb-10 md:pb-16 lg:pb-20">
                <div className="max-w-360 mx-auto px-31">
                    <p className="text-center text-[#7C8493]">Loading featured jobs...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white pb-10 md:pb-16 lg:pb-20">
            <div className="max-w-360 mx-auto px-31">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[48px] font-bold text-[#25324B]">
                        Featured <span className="text-[#26A4FF]">jobs</span>
                    </h2>

                    <a href="/findjobs" className="font-epilogue text-[#4640DE] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                        Show all jobs <span>→</span>
                    </a>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-4 gap-6">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    );
}
