import { Job } from '../home/Jobs';

interface JobDetailsProps {
    job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
    return (
        <div className="border border-[#E8E8F0] rounded-lg p-6 bg-white">
            <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[22px] font-semibold text-[#25324B] mb-6">
                Job Details
            </h2>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Location</p>
                    <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                        {job.jobLocation}
                    </p>
                </div>

                <div>
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Employment Type</p>
                    <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                        {job.employmentType.replace('_', ' ')}
                    </p>
                </div>

                <div>
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Application Deadline</p>
                    <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                        {job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'Not specified'}
                    </p>
                </div>

                <div>
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Job Status</p>
                    <p className="font-epilogue text-[#25324B] text-[16px] font-semibold">
                        {job.status}
                    </p>
                </div>
            </div>
        </div>
    );
}
