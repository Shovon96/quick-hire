interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-12 mt-6 w-166.5">
      <div className="flex gap-3 bg-white rounded-sm border border-[#E8E8F0] overflow-hidden">
        <div className="flex-1 flex items-center gap-3 px-5 py-4">
          <svg className="w-5 h-5 text-[#999AAA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Job title or keyword"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 outline-none text-[#25324B] placeholder-[#999AAA] text-[14px] bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
