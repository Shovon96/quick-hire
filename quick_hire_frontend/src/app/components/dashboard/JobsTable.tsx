'use client';

import { useState, useEffect } from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { Job } from '../home/Jobs';

const API_URL = "http://localhost:5000/api/jobs";

export default function JobsTable() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

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

                setJobs(mappedJobs);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="text-center py-8">Loading jobs...</div>;
    }

    return (
        <div className="bg-white rounded-lg border border-[#E8E8F0]">
            {/* Search Bar */}
            <div className="p-6 border-b border-[#E8E8F0]">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#E8E8F0] bg-gray-50">
                            <th className="px-6 py-4 text-left font-epilogue text-[14px] font-semibold text-[#7C8493]">
                                Job Title
                            </th>
                            <th className="px-6 py-4 text-left font-epilogue text-[14px] font-semibold text-[#7C8493]">
                                Company
                            </th>
                            <th className="px-6 py-4 text-left font-epilogue text-[14px] font-semibold text-[#7C8493]">
                                Location
                            </th>
                            <th className="px-6 py-4 text-left font-epilogue text-[14px] font-semibold text-[#7C8493]">
                                Type
                            </th>
                            <th className="px-6 py-4 text-left font-epilogue text-[14px] font-semibold text-[#7C8493]">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left font-epilogue text-[14px] font-semibold text-[#7C8493]">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredJobs.map((job) => (
                            <tr key={job.id} className="border-b border-[#E8E8F0] hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <p className="font-epilogue text-[14px] font-semibold text-[#25324B]">
                                        {job.title}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-epilogue text-[14px] text-[#7C8493]">
                                        {job.company.name}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-epilogue text-[14px] text-[#7C8493]">
                                        {job.jobLocation}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-epilogue text-[12px] font-semibold">
                                        {job.employmentType.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-block px-3 py-1 rounded-full font-epilogue text-[12px] font-semibold ${
                                        job.status === 'ACTIVE'
                                            ? 'bg-green-50 text-green-600'
                                            : job.status === 'CLOSED'
                                            ? 'bg-red-50 text-red-600'
                                            : 'bg-gray-50 text-gray-600'
                                    }`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#7C8493] hover:text-[#4640DE]">
                                            <Eye size={18} />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#7C8493] hover:text-[#4640DE]">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#7C8493] hover:text-red-600">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredJobs.length === 0 && (
                <div className="text-center py-8">
                    <p className="font-epilogue text-[#7C8493]">No jobs found</p>
                </div>
            )}
        </div>
    );
}
