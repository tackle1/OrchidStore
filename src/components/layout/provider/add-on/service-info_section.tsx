import React from 'react';
import { Calendar } from 'lucide-react';

export default function ServiceInfoSection() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-slate-800 mb-5">Thông tin dịch vụ</h2>

            <div className="space-y-5">
                {/* Tên Add-on */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Tên Add-on</label>
                    <input
                        type="text"
                        placeholder="VD: Thay chậu mới, Xử lý nấm rễ..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-700"
                    />
                </div>

                {/* Lý do đề xuất */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Lý do đề xuất</label>
                    <textarea
                        rows={4}
                        placeholder="Mô tả chi tiết tình trạng hiện tại và lý do cần thực hiện dịch vụ này..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-700 resize-none"
                    />
                </div>

                {/* Chi phí & Ngày hoàn thành */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Chi phí dự kiến (VNĐ)</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="0"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-8 text-right focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-700"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">đ</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Ngày hoàn thành dự kiến</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="mm/dd/yyyy"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-700"
                            />
                            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
