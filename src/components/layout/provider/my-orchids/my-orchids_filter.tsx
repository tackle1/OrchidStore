import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export default function MyOrchidsFilter() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Search className="w-5 h-5 text-[#9CA3AF]" />
                </div>
                <input 
                    type="text" 
                    placeholder="Tìm kiếm theo mã ID, tên lan hoặc tên khách hàng..." 
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-[14px] focus:outline-none focus:border-[#6D28D9] focus:ring-1 focus:ring-[#6D28D9] bg-white"
                />
            </div>
            
            <div className="flex gap-3">
                <button className="flex items-center gap-2 h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-[#4B5563] text-[14px] font-semibold hover:bg-gray-50 transition-colors">
                    <Filter className="w-4 h-4" />
                    Trạng thái
                </button>
                <button className="flex items-center gap-2 h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-[#4B5563] text-[14px] font-semibold hover:bg-gray-50 transition-colors">
                    <SlidersHorizontal className="w-4 h-4" />
                    Sắp xếp
                </button>
            </div>
        </div>
    );
}
