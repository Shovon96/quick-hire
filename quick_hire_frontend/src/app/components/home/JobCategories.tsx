'use client';

import Link from "next/link";
import { BarChart3, Briefcase, Code2, Megaphone, Monitor, Palette, Users, Wallet } from "lucide-react";

interface CategoryCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  jobsCount: number;
}

const categories: CategoryCard[] = [
  { id: "design", icon: <Palette className="w-8 h-8" />, title: "Design", jobsCount: 235 },
  { id: "sales", icon: <BarChart3 className="w-8 h-8" />, title: "Sales", jobsCount: 755 },
  { id: "marketing", icon: <Megaphone className="w-8 h-8" />, title: "Marketing", jobsCount: 140 },
  { id: "finance", icon: <Wallet className="w-8 h-8" />, title: "Finance", jobsCount: 325 },
  { id: "technology", icon: <Monitor className="w-8 h-8" />, title: "Technology", jobsCount: 436 },
  { id: "engineering", icon: <Code2 className="w-8 h-8" />, title: "Engineering", jobsCount: 542 },
  { id: "business", icon: <Briefcase className="w-8 h-8" />, title: "Business", jobsCount: 211 },
  { id: "hr", icon: <Users className="w-8 h-8" />, title: "Human Resource", jobsCount: 346 },
];

export default function JobCategories() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-360 mx-auto px-31">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-5xl font-bold text-[#25324B]">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <Link href="#" className="font-epilogue text-[#4640DE] font-semibold text-[16px] flex items-center gap-3 hover:gap-4 transition-all">
            Show all jobs <span>→</span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-8 rounded-sm border border-[#D6DDEB] bg-white transition-all duration-300 cursor-pointer group hover:bg-[#4640DE] hover:border-[#4640DE] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="text-[#4640DE] mb-6 group-hover:text-white transition-colors duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'var(--font-clash)' }} className="text-[20px] font-semibold mb-3 text-[#25324B] group-hover:text-white transition-colors duration-300">
                {category.title}
              </h3>

              {/* Jobs Count */}
              <p className="font-epilogue text-[14px] flex items-center gap-2 text-[#7C8493] group-hover:text-white transition-colors duration-300">
                {category.jobsCount} jobs available
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
