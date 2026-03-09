import Image from "next/image"
import { Job } from "./Jobs"
import Link from "next/link"

type Props = {
    job: Job
}

const tagColors: Record<string, string> = {
    Marketing: "bg-[#FFA500]/10 text-[#FFA500]",
    Design: "bg-[#00D084]/10 text-[#00D084]",
    Business: "bg-[#7C3AED]/10 text-[#7C3AED]",
    Technology: "bg-[#EF4444]/10 text-[#EF4444]",
}

export default function JobCard({ job }: Props) {
    // Format employment type for display
    const formatEmploymentType = (type: string) => {
        return type.replace('_', ' ').split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
    };

    return (
        <Link href={`/findjobs/${job.id}`} className="h-full">
            <div className="border border-[#E8E8F0] p-4 hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between h-full">

                <div>
                    {/* Header with Logo and Type */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            <Image 
                                src={job.company.logo} 
                                alt={job.company.name} 
                                width={48} 
                                height={48} 
                                className="object-cover" 
                            />
                        </div>
                        <span className="text-xs border border-[#4640DE] text-[#4640DE] px-4 py-2 font-epilogue font-semibold">
                            {formatEmploymentType(job.employmentType)}
                        </span>
                    </div>

                    {/* Job Title */}
                    <h3 style={{ fontFamily: 'var(--font-clash)' }} className="font-bold text-[18px] text-[#25324B] mb-2">
                        {job.title}
                    </h3>

                    {/* Company and Location */}
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-4">
                        {job.company.name} • {job.company.location}
                    </p>

                    {/* Description */}
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-6 line-clamp-2">
                        {job.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                    {job.jobCategory.map((tag, index) => (
                        <span
                            key={`${tag}-${index}`}
                            className={`text-xs px-3 py-1.5 rounded-full font-epilogue font-medium ${tagColors[tag] || "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}
