'use client';

import { useState, useEffect, useRef } from 'react';
import JobCard from "./JobCard";
import { Job } from "./Jobs";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// const API_URL = "http://localhost:5000/api/jobs";
const API_URL = "https://quick-hire-server-amber.vercel.app/api/jobs";

export default function FeaturedJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

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

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            return () => container.removeEventListener('scroll', checkScroll);
        }
    }, [jobs]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return (
            <section className="bg-white pb-10 md:pb-16 lg:pb-20 min-h-56">
                <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-31">
                    <p className="text-center text-[#7C8493]">Loading featured jobs...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white pb-10 md:pb-16 lg:pb-20">
            <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-31">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-3xl md:text-[48px] font-bold text-[#25324B]">
                        Featured <span className="text-[#26A4FF]">jobs</span>
                    </h2>

                    <a href="/findjobs" className="hidden font-epilogue text-[#4640DE] font-semibold text-[16px] md:flex items-center gap-2 hover:gap-3 transition-all">
                        Show all jobs <span>→</span>
                    </a>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-4 gap-6">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden">
                    {/* Card Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex-1 overflow-x-auto scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex gap-4 pb-2">
                            {jobs.map((job) => (
                                <div key={job.id} className="shrink-0 w-80">
                                    <JobCard job={job} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center mt-6 justify-between">
                        {/* Show all jobs link */}
                        <a href="/findjobs" className="font-epilogue text-[#4640DE] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                            Show all jobs <span>→</span>
                        </a>
                        <div>
                            {/* Left Button */}
                            <button
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className={`shrink-0 p-2 mr-2 rounded-lg transition-all ${canScrollLeft
                                    ? 'bg-[#4640DE] text-white hover:bg-[#3730c3]'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Right Button */}
                            <button
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className={`shrink-0 p-2 rounded-lg transition-all ${canScrollRight
                                    ? 'bg-[#4640DE] text-white hover:bg-[#3730c3]'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
