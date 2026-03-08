'use client';

import Image from 'next/image';
import companyDashboard from '../../../../public/assets/Dashboard-Company.png';

export default function CTABanner() {
    return (
            <section className="max-w-360 mx-auto px-31 bg-white pb-10 md:pb-16 lg:pb-20">

                {/* Banner */}
                <div
                    className="relative overflow-hidden bg-[#4640DE] text-white"
                    style={{
                        clipPath:
                            'polygon(14% 0, 100% 0, 100% 82%, 86% 100%, 0 100%, 0 20%)',
                    }}
                >
                    <div className="grid grid-cols-2 items-center px-20 py-22.5">

                        {/* Left Content */}
                        <div className="max-w-105">
                            <h2
                                style={{ fontFamily: 'var(--font-clash)' }}
                                className="text-[56px] leading-16 font-semibold mb-6"
                            >
                                Start posting
                                <br />
                                jobs today
                            </h2>

                            <p className="text-[18px] text-white/90 mb-8">
                                Start posting jobs for only $10.
                            </p>

                            <button className="bg-white text-[#4640DE] cursor-pointer font-bold px-8 py-4 hover:bg-gray-100 transition">
                                Sign Up For Free
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-end">
                            <Image
                                src={companyDashboard}
                                alt="Company Dashboard"
                                width={520}
                                height={420}
                                className="object-contain drop-shadow-2xl translate-y-22.5"
                            />
                        </div>
                    </div>
                </div>
        </section>
    );
}