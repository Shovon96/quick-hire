import JobCard from "../home/JobCard";
import { Job } from "../home/Jobs";

interface JobsListProps {
  jobs: Job[];
  currentPage: number;
  itemsPerPage: number;
}

export default function JobsList({ jobs, currentPage, itemsPerPage }: JobsListProps) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedJobs = jobs.slice(startIndex, endIndex);

  return (
    <div className="space-y-4">
      {jobs.length > 0 ? (
        <>
          <div className="mb-8">
            <p className="font-epilogue text-[#7C8493] text-[14px]">
              Showing <span className="font-semibold text-[#25324B]"></span>
              <span className="font-semibold text-[#25324B]">{jobs.length}</span> jobs
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
              </div>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="font-epilogue text-[#7C8493] text-[16px]">
            No jobs found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}
