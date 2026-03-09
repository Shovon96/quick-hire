export default function JobOpenSummary() {
    return (
        <div className="bg-white rounded-lg border border-[#E8E8F0] p-8">
            <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-bold text-[#25324B] mb-8">
                Job Open
            </h2>

            {/* Jobs Opened */}
            <div className="mb-8">
                <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Jobs Opened</p>
                <p style={{ fontFamily: 'var(--font-clash)' }} className="text-[48px] font-bold text-[#25324B]">
                    12
                </p>
            </div>

            {/* Applicants Summary */}
            <div>
                <h3 style={{ fontFamily: 'var(--font-clash)' }} className="text-[18px] font-bold text-[#25324B] mb-4">
                    Applicants Summary
                </h3>

                <p style={{ fontFamily: 'var(--font-clash)' }} className="text-[36px] font-bold text-[#25324B] mb-4">
                    67
                </p>

                {/* Progress Bar */}
                <div className="space-y-3">
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">Full Time</p>
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">45</p>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[#4640DE] h-2 rounded-full" style={{ width: '67%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">Internship</p>
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">32</p>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[#FFA500] h-2 rounded-full" style={{ width: '48%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">Part-Time</p>
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">24</p>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[#00D084] h-2 rounded-full" style={{ width: '36%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">Contract</p>
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">30</p>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[#EF4444] h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">Remote</p>
                            <p className="font-epilogue text-[#25324B] text-[12px] font-semibold">22</p>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-[#26A4FF] h-2 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
