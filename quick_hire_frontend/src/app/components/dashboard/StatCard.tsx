import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface StatCardProps {
    number: string | number;
    label: string;
    bgColor: string;
    icon?: ReactNode;
}

export default function StatCard({ number, label, bgColor, icon }: StatCardProps) {
    return (
        <div className={`${bgColor} rounded-lg p-6 text-white flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow`}>
            <div>
                <p style={{ fontFamily: 'var(--font-clash)' }} className="text-[48px] font-bold mb-2">
                    {number}
                </p>
                <p className="font-epilogue text-[16px] font-medium">
                    {label}
                </p>
            </div>
            <ChevronRight size={32} className="opacity-50" />
        </div>
    );
}
