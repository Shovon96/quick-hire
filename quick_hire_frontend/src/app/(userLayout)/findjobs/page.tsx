'use client';

import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import JobsHeader from "../../components/jobs/JobsHeader";
import SearchBar from "../../components/jobs/SearchBar";
import FilterSection from "../../components/jobs/FilterSection";
import JobsList from "../../components/jobs/JobsList";
import Pagination from "../../components/jobs/Pagination";
import { Job } from "../../components/home/Jobs";

const ITEMS_PER_PAGE = 16;
// const API_URL = "http://localhost:5000/api/jobs";
const API_URL = "https://quick-hire-server-amber.vercel.app/api/jobs";

export default function FindJobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch jobs from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch jobs: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                // Map API response to Job type - using correct structure
                const mappedJobs: Job[] = data.data.map((job: any) => ({
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

                console.log("Mapped Jobs:", mappedJobs);
                setJobs(mappedJobs);
                setError(null);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err instanceof Error ? err.message : 'An error occurred');
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);



    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company?.name?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || selectedCategory === 'All' || job.jobCategory?.includes(selectedCategory);
        const matchesType = !selectedType || selectedType === 'All' || job.employmentType === selectedType;
        return matchesSearch && matchesCategory && matchesType;
    });

    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFilterChange = () => {
        setCurrentPage(1);
    };

    return (
        <div>
            <div className="bg-white border border-b">
                <Navbar />
            </div>

            <div className="bg-white min-h-screen">
                <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-31 py-6 md:py-12 lg:py-16">
                    <JobsHeader />

                    {error && (
                        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="font-epilogue text-red-600 text-[14px]">
                                Error: {error}
                            </p>
                        </div>
                    )}

                    {loading ? (
                        <div className="text-center py-16">
                            <p className="font-epilogue text-[#7C8493] text-[16px]">
                                Loading jobs...
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className='lg:flex items-center justify-between gap-6'>
                                <SearchBar value={searchQuery} onChange={(value) => {
                                    setSearchQuery(value);
                                    handleFilterChange();
                                }} />
                                <FilterSection
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={(value) => {
                                        setSelectedCategory(value);
                                        handleFilterChange();
                                    }}
                                    selectedType={selectedType}
                                    onTypeChange={(value) => {
                                        setSelectedType(value);
                                        handleFilterChange();
                                    }}
                                    selectedExperience={selectedExperience}
                                    onExperienceChange={(value) => {
                                        setSelectedExperience(value);
                                        handleFilterChange();
                                    }}
                                />
                            </div>
                            <JobsList jobs={filteredJobs} currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} />
                            {totalPages > 1 && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
