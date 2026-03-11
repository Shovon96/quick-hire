import Image from 'next/image';
import { Job } from '../home/Jobs';

const tagColors: Record<string, string> = {
    Marketing: "bg-[#FFA500]/10 text-[#FFA500]",
    Design: "bg-[#00D084]/10 text-[#00D084]",
    Business: "bg-[#7C3AED]/10 text-[#7C3AED]",
    Technology: "bg-[#EF4444]/10 text-[#EF4444]",
};

interface JobHeaderProps {
    job: Job;
    onApplyClick: () => void;
}

export default function JobHeader({ job, onApplyClick }: JobHeaderProps) {
    return (
        <div className="border border-[#E8E8F0] rounded-lg p-6 mb-8 bg-white">
            <div className="md:flex items-start justify-between mb-2">
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
                        <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-[28px] font-bold text-[#25324B] mb-2">
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
                <button
                    onClick={onApplyClick}
                    className="bg-[#4640DE] mt-3 md:mt-0 w-full md:w-auto cursor-pointer text-white font-epilogue font-semibold text-[16px] px-10 py-4"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
}
