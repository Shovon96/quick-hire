import { Job } from '../home/Jobs';

interface JobDescriptionProps {
    job: Job;
}

export default function JobDescription({ job }: JobDescriptionProps) {
    return (
        <div className="border border-[#E8E8F0] rounded-lg p-6 mb-8 bg-white">
            <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[22px] font-semibold text-[#25324B] mb-4">
                About this job
            </h2>
            <p className="font-epilogue text-[#7C8493] text-[16px] leading-relaxed whitespace-pre-wrap">
                {job.description}
            </p>
        </div>
    );
}
