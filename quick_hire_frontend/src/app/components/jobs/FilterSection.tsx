interface FilterSectionProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  selectedExperience: string;
  onExperienceChange: (value: string) => void;
}

export default function FilterSection({
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  selectedExperience,
  onExperienceChange,
}: FilterSectionProps) {
  const categories = ['All', 'Marketing', 'Design', 'Business', 'Technology'];
  const employmentTypes = ['All', 'INTERNSHIP', 'FULL_TIME', 'PART_TIME', 'CONTRACT'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-4 lg:mb-12">
      {/* Category Filter */}
      <div>
        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-3">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat === 'All' ? '' : cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Employment Type Filter */}
      <div>
        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-3">
          Employment Type
        </label>
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
        >
          {employmentTypes.map((type) => (
            <option key={type} value={type === 'All' ? '' : type}>
              {type === 'All' ? 'All' : type.replace('_', ' ')}
            </option>
          ))}
        </select>
      </div>

      {/* Experience Filter */}
      <div>
        <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-3">
          Experience Level
        </label>
        <select
          value={selectedExperience}
          onChange={(e) => onExperienceChange(e.target.value)}
          className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
        >
          <option value="">All</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Junior">Junior</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
    </div>
  );
}
