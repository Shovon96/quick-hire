'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface PostJobFormProps {
    onClose: () => void;
    onSuccess: () => void;
}

interface FormData {
    title: string;
    description: string;
    jobType: 'ONSITE' | 'REMOTE' | 'HYBRID';
    jobLocation: string;
    experience: string;
    salary: string;
    employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
    jobCategory: string[];
    vacancy: string;
    applicationDeadline: string;
    status: 'ACTIVE' | 'CLOSED' | 'DRAFT';
    postedBy: string;
    company: {
        name: string;
        logo: string;
        location: string;
        website: string;
    };
}

const initialFormData: FormData = {
    title: '',
    description: '',
    jobType: 'ONSITE',
    jobLocation: '',
    experience: '',
    salary: '',
    employmentType: 'FULL_TIME',
    jobCategory: [],
    vacancy: '1',
    applicationDeadline: '',
    status: 'ACTIVE',
    postedBy: '69abf8777960d1a406fd807d',
    company: {
        name: '',
        logo: '',
        location: '',
        website: '',
    },
};

const categories = ['Marketing', 'Design', 'Business', 'Technology', 'Engineering', 'Sales', 'HR', 'Finance'];

export default function PostJobForm({ onClose, onSuccess }: PostJobFormProps) {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name.startsWith('company.')) {
            const companyField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                company: {
                    ...prev.company,
                    [companyField]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleCategoryChange = (category: string) => {
        setFormData(prev => ({
            ...prev,
            jobCategory: prev.jobCategory.includes(category)
                ? prev.jobCategory.filter(c => c !== category)
                : [...prev.jobCategory, category]
        }));
    };

    const validateForm = (): boolean => {
        if (!formData.title.trim()) {
            setMessage({ type: 'error', text: 'Job title is required' });
            return false;
        }
        if (!formData.description.trim()) {
            setMessage({ type: 'error', text: 'Job description is required' });
            return false;
        }
        if (!formData.jobLocation.trim()) {
            setMessage({ type: 'error', text: 'Job location is required' });
            return false;
        }
        if (!formData.salary.trim()) {
            setMessage({ type: 'error', text: 'Salary is required' });
            return false;
        }
        if (formData.jobCategory.length === 0) {
            setMessage({ type: 'error', text: 'Select at least one category' });
            return false;
        }
        if (!formData.company.name.trim()) {
            setMessage({ type: 'error', text: 'Company name is required' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to post job');
            }

            setMessage({
                type: 'success',
                text: 'Job posted successfully!'
            });

            setTimeout(() => {
                onSuccess();
            }, 1500);
        } catch (err) {
            setMessage({
                type: 'error',
                text: err instanceof Error ? err.message : 'An error occurred'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-white/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full border border-[#3232e4] max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-[#E8E8F0] px-8 py-4 flex items-center justify-between">
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-bold text-[#25324B]">
                        Post a New Job
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X size={24} className="text-[#7C8493]" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Job Title */}
                    <div>
                        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                            Job Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g., Senior Product Designer"
                            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                            Job Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe the job responsibilities and requirements..."
                            rows={5}
                            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition resize-none"
                        />
                    </div>

                    {/* Grid 2 Columns */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Job Location */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Job Location *
                            </label>
                            <input
                                type="text"
                                name="jobLocation"
                                value={formData.jobLocation}
                                onChange={handleChange}
                                placeholder="e.g., San Francisco, USA"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Salary */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Salary *
                            </label>
                            <input
                                type="text"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="e.g., $80,000 - $120,000"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Experience */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Experience Level
                            </label>
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                placeholder="e.g., 3-5 years"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Vacancy */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Number of Vacancies
                            </label>
                            <input
                                type="number"
                                name="vacancy"
                                value={formData.vacancy}
                                onChange={handleChange}
                                min="1"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Job Type */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Job Type
                            </label>
                            <select
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            >
                                <option value="ONSITE">Onsite</option>
                                <option value="REMOTE">Remote</option>
                                <option value="HYBRID">Hybrid</option>
                            </select>
                        </div>

                        {/* Employment Type */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Employment Type
                            </label>
                            <select
                                name="employmentType"
                                value={formData.employmentType}
                                onChange={handleChange}
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            >
                                <option value="FULL_TIME">Full Time</option>
                                <option value="PART_TIME">Part Time</option>
                                <option value="CONTRACT">Contract</option>
                                <option value="INTERNSHIP">Internship</option>
                            </select>
                        </div>
                    </div>

                    {/* Application Deadline */}
                    <div>
                        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                            Application Deadline
                        </label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            value={formData.applicationDeadline}
                            onChange={handleChange}
                            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                        />
                    </div>

                    {/* Categories */}
                    <div>
                        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-3">
                            Job Categories *
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                            {categories.map(category => (
                                <label key={category} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.jobCategory.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                        className="w-4 h-4 rounded border-[#E8E8F0] text-[#4640DE] cursor-pointer"
                                    />
                                    <span className="font-epilogue text-[#25324B] text-[14px]">
                                        {category}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="border-t border-[#E8E8F0] pt-6">
                        <h3 style={{ fontFamily: 'var(--font-clash)' }} className="text-[18px] font-bold text-[#25324B] mb-4">
                            Company Information
                        </h3>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Company Name */}
                            <div>
                                <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    name="company.name"
                                    value={formData.company.name}
                                    onChange={handleChange}
                                    placeholder="e.g., Acme Corp"
                                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                                />
                            </div>

                            {/* Company Location */}
                            <div>
                                <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                    Company Location
                                </label>
                                <input
                                    type="text"
                                    name="company.location"
                                    value={formData.company.location}
                                    onChange={handleChange}
                                    placeholder="e.g., New York, USA"
                                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                                />
                            </div>

                            {/* Company Logo */}
                            <div>
                                <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                    Company Logo URL
                                </label>
                                <input
                                    type="url"
                                    name="company.logo"
                                    value={formData.company.logo}
                                    onChange={handleChange}
                                    placeholder="https://example.com/logo.png"
                                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                                />
                            </div>

                            {/* Company Website */}
                            <div>
                                <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                    Company Website
                                </label>
                                <input
                                    type="url"
                                    name="company.website"
                                    value={formData.company.website}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    {message && (
                        <div className={`p-4 rounded-lg font-epilogue text-[14px] ${
                            message.type === 'success'
                                ? 'bg-green-50 border border-green-200 text-green-700'
                                : 'bg-red-50 border border-red-200 text-red-700'
                        }`}>
                            {message.text}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-4 pt-6 border-t border-[#E8E8F0]">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 border cursor-pointer border-[#E8E8F0] text-[#25324B] font-epilogue font-semibold text-[14px] px-6 py-3 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-[#4640DE] text-white font-epilogue font-semibold text-[14px] px-6 py-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
