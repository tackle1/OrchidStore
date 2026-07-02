import React from 'react';
import { Calendar } from 'lucide-react';

interface ServicePackageAddonsProps {
    addons: any[];
}

export default function ServicePackageAddons({ addons }: ServicePackageAddonsProps) {
    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Danh sách Add-on</h2>
                <span className="bg-[#F3E8FF] text-[#6B21A8] text-xs font-bold px-2.5 py-1 rounded-full">
                    {addons.length}
                </span>
            </div>

            {addons.length > 0 ? (
                <div className="space-y-4">
                    {addons.map((addon: any) => (
                        <div key={addon.id} className="p-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] hover:border-[#7C3AED] transition-colors group cursor-pointer">
                            <div className="flex justify-between items-start mb-2 gap-2">
                                <h4 className="font-semibold text-slate-800 text-sm group-hover:text-[#7C3AED] transition-colors">{addon.name}</h4>
                                <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${addon.status === 'Active' ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#F3E8FF] text-[#6B21A8]'
                                    }`}>
                                    {addon.status}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mb-3 line-clamp-3">
                                <span className="font-medium text-gray-700">Lí do: </span>{addon.reason}
                            </p>
                            <div className="flex justify-between items-end mt-1 text-sm">
                                <span className="font-bold text-[#6D28D9]">{addon.price}</span>
                                <span className="text-gray-500 text-xs flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {addon.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-sm">Chưa có add-on nào.</p>
                </div>
            )}
        </div>
    );
}
