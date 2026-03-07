'use client';

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-[124px]">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                Discover
                <br />
                more than
                <br />
                <span className="text-blue-500">5000+ Jobs</span>
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="flex gap-3 bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                <div className="flex-1 flex items-center gap-3 px-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
                  />
                </div>
                <div className="border-l border-gray-200"></div>
                <div className="flex items-center gap-3 px-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <select className="outline-none text-gray-700 text-sm bg-transparent">
                    <option>Florence, Italy</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                Search my job
              </button>
            </div>

            {/* Popular Tags */}
            <div className="pt-4">
              <p className="text-gray-600 text-sm mb-2">
                Popular : UI Designer, UX Researcher, Android, Admin
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="text-gray-600 text-sm">Professional Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
