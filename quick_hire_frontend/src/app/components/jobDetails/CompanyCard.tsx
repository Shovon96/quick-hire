import Image from 'next/image';
import { Job } from '../home/Jobs';

interface CompanyCardProps {
    job: Job;
}

export default function CompanyCard({ job }: CompanyCardProps) {
    return (
        <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
            <h3 style={{ fontFamily: 'var(--font-clash)' }} className="text-[22px] font-semibold text-[#25324B] mb-6">
                About Company
            </h3>

            {/* Company Logo */}
            <div className="w-full h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden mb-6">
                <Image
                    src={job.company.logo}
                    alt={job.company.name}
                    width={96}
                    height={96}
                    className="object-cover"
                />
            </div>

            {/* Company Name */}
            <h4 style={{ fontFamily: 'var(--font-clash)' }} className="text-[18px] font-semibold text-[#25324B] mb-4">
                {job.company.name}
            </h4>

            {/* Company Details */}
            <div className="space-y-4 mb-6">
                <div>
                    <p className="font-epilogue text-[#7C8493] text-[12px] mb-1">Location</p>
                    <p className="font-epilogue text-[#25324B] text-[14px] font-semibold">
                        {job.company.location}
                    </p>
                </div>

                {job.company.website && (
                    <div>
                        <p className="font-epilogue text-[#7C8493] text-[12px] mb-1">Website</p>
                        <a
                            href={job.company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-epilogue text-[#4640DE] text-[14px] font-semibold hover:underline"
                        >
                            Visit Website
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
