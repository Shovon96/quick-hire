'use client';

import Image from "next/image";
import underline from "../../../../public/assets/underline.png";
import bgImage from "../../../../public/assets/quick_hire_bg_image.png";
import bgMobileImage from "../../../../public/assets/mobile-background.png";
import Navbar from "../Navbar";

export default function Hero() {
    return (
        <section className="relative w-full h-198.5 mx-auto overflow-hidden bg-[#F8F8FD]">
            <Navbar />

            {/* Background Image for mobile */}
            <Image
                src={bgMobileImage}
                alt="hero bg"
                fill
                priority
                className="object-cover object-right md:hidden"
            />
            {/* Background Image for desktop*/}
            <Image
                src={bgImage}
                alt="hero bg"
                fill
                priority
                className="object-cover object-right hidden md:block"
            />

            {/* Content Container */}
            <div style={{}} className="absolute top-0 left-0 right-0 z-10 h-full w-360 mx-auto flex items-center px-4 md:px-12 lg:px-31">

                <div className="w-86 md:w-96 lg:w-160">

                    {/* Heading */}
                    <div className="mb-6">
                        <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-[52px] md:text-[64px] lg:text-[72px] leading-15 lg:leading-18 font-semibold text-[#25324B]">
                            Discover <br />
                            more than <br />
                            <span className="text-[#26A4FF]">5000+ Jobs</span>
                        </h1>

                        <Image
                            src={underline}
                            alt="underline"
                            width={455}
                            height={39.58}
                            className="mt-2"
                        />
                    </div>

                    {/* Description */}
                    <p className="font-epilogue text-[#515B6F] text-[18px] lg:text-[20px] font-400 leading-7 mb-8">
                        Great platform for the job seeker that searching for new career
                        heights and passionate about startups.
                    </p>

                    {/* Search Bar */}
                    <div className="table-cell lg:flex justify-between gap-4 items-center w-213 h-22.25 bg-white shadow-md p-4">

                        {/* Job Input */}
                        <div className="flex items-center gap-3 flex-1 lg:ml-4">
                            <svg
                                className="w-6 h-6 text-[#515B6F]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="flex-1 border-b border-gray-300 pb-3 outline-none text-[16px] text-[#25324B] placeholder-[#A8ADB7]"
                            />
                        </div>

                        {/* Divider */}
                        <div className="w-px h-8 bg-[#E4E5EC] hidden lg:block" />

                        {/* Location */}
                        <div className="flex flex-1 items-center gap-3 py-3 lg:py-0">
                            <svg
                                className="w-6 h-6 text-[#7C8493]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            <select className="outline-none border-b border-gray-300 pb-3 text-[16px] text-[#25324B] bg-transparent cursor-pointer justify-between w-full">
                                <option>Florence, Italy</option>
                            </select>
                        </div>

                        {/* Button */}
                        <button className="py-3.5 px-6.75 bg-[#4640DE] text-white text-[18px] font-bold cursor-pointer w-full lg:w-auto">
                            Search my job
                        </button>
                    </div>

                    {/* Popular */}
                    <p className="font-epilogue text-[#202430] text-4 mt-6">
                        Popular : UI Designer, UX Researcher, Android, Admin
                    </p>

                </div>
            </div>
        </section>
    );
}