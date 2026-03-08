import JobCard from "./JobCard";
import { jobs } from "./Jobs";

export default function FeaturedJobs() {
    return (
        <section className="bg-white pb-10 md:pb-16 lg:pb-20">
            <div className="max-w-360 mx-auto px-31">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[48px] font-bold text-[#25324B]">
                        Featured <span className="text-[#4640DE]">jobs</span>
                    </h2>

                    <button className="font-epilogue text-[#4640DE] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                        Show all jobs <span>→</span>
                    </button>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-4 gap-6">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    )
}