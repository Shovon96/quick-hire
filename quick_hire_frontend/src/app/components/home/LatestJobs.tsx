'use client';

import Image from "next/image";
import { jobs } from "./Jobs";

const tagColors: Record<string, string> = {
    Marketing: "bg-[#FFA500]/10 text-[#FFA500]",
    Design: "bg-[#7C3AED]/10 text-[#7C3AED]",
    Business: "bg-[#7C3AED]/10 text-[#7C3AED]",
    Technology: "bg-[#EF4444]/10 text-[#EF4444]",
};

export default function LatestJobs() {
    return (
        <section className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-360 mx-auto px-31">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[48px] font-bold text-[#25324B]">
                        Latest <span className="text-[#26A4FF]">jobs open</span>
                    </h2>

                    <button className="font-epilogue text-[#4640DE] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                        Show all jobs <span>→</span>
                    </button>
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
                                    src={job.logo}
                                    alt={job.company}
                                    width={56}
                                    height={56}
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Job Title */}
                                <h3 style={{ fontFamily: 'var(--font-clash)' }} className="font-semibold text-[20px] text-[#25324B] mb-1">
                                    {job.role}
                                </h3>

                                {/* Company and Location */}
                                <p className="font-epilogue text-[#7C8493] text-[14px] mb-4">
                                    {job.company} • {job.location}
                                </p>

                                {/* Tags */}
                                <div className="flex gap-2 flex-wrap">
                                    <span
                                        className="text-xs px-3 py-1.5 rounded-full font-epilogue font-medium bg-green-50 text-green-600">
                                        {job.type}
                                    </span>
                                    {job.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-xs px-3 py-1.5 rounded-full font-epilogue font-medium ${tagColors[tag] || "bg-gray-100 text-gray-600"
                                                }`}
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
