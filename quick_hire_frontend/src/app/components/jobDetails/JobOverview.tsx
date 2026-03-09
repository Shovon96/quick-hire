import { Job } from '../home/Jobs';

interface JobOverviewProps {
    job: Job;
}

export default function JobOverview({ job }: JobOverviewProps) {
    return (
        <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="border border-[#E8E8F0] rounded-lg p-4 bg-white">
                <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Salary</p>
                <p style={{ fontFamily: 'var(--font-clash)' }} className="font-semibold text-[18px] text-[#25324B]">
                    {job.salary}
                </p>
            </div>

            <div className="border border-[#E8E8F0] rounded-lg p-4 bg-white">
                <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Job Type</p>
                <p style={{ fontFamily: 'var(--font-clash)' }} className="font-semibold text-[18px] text-[#25324B]">
                    {job.jobType}
                </p>
            </div>

            <div className="border border-[#E8E8F0] rounded-lg p-4 bg-white">
                <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Experience</p>
                <p style={{ fontFamily: 'var(--font-clash)' }} className="font-semibold text-[18px] text-[#25324B]">
                    {job.experience}
                </p>
            </div>

            <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
                <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Vacancy</p>
                <p style={{ fontFamily: 'var(--font-clash)' }} className="font-bold text-[20px] text-[#25324B]">
                    {job.vacancy}
                </p>
            </div>
        </div>
    );
}
