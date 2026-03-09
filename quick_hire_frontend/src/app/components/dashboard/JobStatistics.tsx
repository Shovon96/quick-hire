'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { day: 'Mon', jobView: 240, jobApplied: 180 },
    { day: 'Tue', jobView: 180, jobApplied: 120 },
    { day: 'Wed', jobView: 200, jobApplied: 98 },
    { day: 'Thu', jobView: 220, jobApplied: 150 },
    { day: 'Fri', jobView: 200, jobApplied: 130 },
    { day: 'Sat', jobView: 120, jobApplied: 80 },
    { day: 'Sun', jobView: 180, jobApplied: 140 },
];

export default function JobStatistics() {
    const [timeRange, setTimeRange] = useState('week');

    return (
        <div className="bg-white rounded-lg border border-[#E8E8F0] p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-bold text-[#25324B] mb-1">
                        Job statistic
                    </h2>
                    <p className="font-epilogue text-[#7C8493] text-[14px]">
                        Showing statistic for Jul 19 - 25
                    </p>
                </div>

                {/* Time Range Selector */}
                <div className="flex gap-2">
                    {['Week', 'Month', 'Year'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range.toLowerCase())}
                            className={`px-4 py-2 rounded-lg font-epilogue text-[12px] font-semibold transition-colors ${
                                timeRange === range.toLowerCase()
                                    ? 'bg-[#4640DE] text-white'
                                    : 'bg-gray-50 text-[#7C8493] hover:bg-gray-100'
                            }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-6 border-b border-[#E8E8F0]">
                {['Overview', 'Jobs View', 'Jobs Applied'].map((tab) => (
                    <button
                        key={tab}
                        className={`pb-4 font-epilogue text-[14px] font-medium transition-colors ${
                            tab === 'Overview'
                                ? 'text-[#4640DE] border-b-2 border-[#4640DE]'
                                : 'text-[#7C8493] hover:text-[#25324B]'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8E8F0" />
                    <XAxis dataKey="day" stroke="#7C8493" />
                    <YAxis stroke="#7C8493" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #E8E8F0',
                            borderRadius: '8px',
                        }}
                    />
                    <Legend />
                    <Bar dataKey="jobView" fill="#FFA500" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="jobApplied" fill="#4640DE" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Job Views</p>
                    <p style={{ fontFamily: 'var(--font-clash)' }} className="text-[32px] font-bold text-[#25324B] mb-1">
                        2,342
                    </p>
                    <p className="font-epilogue text-[#00D084] text-[14px]">
                        This Week: 6.4% ↑
                    </p>
                </div>

                <div>
                    <p className="font-epilogue text-[#7C8493] text-[14px] mb-2">Job Applied</p>
                    <p style={{ fontFamily: 'var(--font-clash)' }} className="text-[32px] font-bold text-[#25324B] mb-1">
                        654
                    </p>
                    <p className="font-epilogue text-red-500 text-[14px]">
                        This Week: 0.8% ↓
                    </p>
                </div>
            </div>
        </div>
    );
}
