'use client';

import { useState } from 'react';
import Navbar from "../../components/Navbar";
import JobsHeader from "../../components/jobs/JobsHeader";
import SearchBar from "../../components/jobs/SearchBar";
import FilterSection from "../../components/jobs/FilterSection";
import JobsList from "../../components/jobs/JobsList";
import Pagination from "../../components/jobs/Pagination";
import { jobs } from "../../components/home/Jobs";

const ITEMS_PER_PAGE = 16;

export default function FindJobsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || selectedCategory === 'All' || job.tags.includes(selectedCategory);
        const matchesType = !selectedType || selectedType === 'All' || job.type === selectedType;
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
                <div className="max-w-360 mx-auto px-31 py-6 md:py-12 lg:py-16">
                    <JobsHeader />
                    <div className='flex items-center justify-between gap-6'>
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
                </div>
            </div>
        </div>
    );
}
