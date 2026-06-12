'use client';

interface ServicePackageSelectedProps {
    title: string;
    description: string;
    duration: string;
}

export default function ServicePackageSelected({ title, description, duration }: ServicePackageSelectedProps) {
    return (
        <div>
            <p className="text-sm text-[#6B7280] mb-2">Gói chăm sóc đã chọn</p>
            <div className="bg-[#F8F9FC] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-sm text-[#6D28D9] font-medium">
                        {title}
                    </span>
                    {duration && (
                        <span className="px-2.5 py-1 w-[100px] text-[10px] text-center text-white bg-[#6D28D9] border border-[#E5E7EB] rounded-sm">
                            {duration}
                        </span>
                    )}
                </div>
                <p className="text-sm text-[#6B7280]">{description}</p>
            </div>
        </div>
    );
}