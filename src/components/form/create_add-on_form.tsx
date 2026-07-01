"use client";

import React, { use } from 'react';
import { ArrowLeft, Info, Calendar, Camera } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProposeAddonForm({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const searchParams = useSearchParams();
    const packageName = searchParams.get('packageName');
    const dataString = searchParams.get('data');
    const queryString = dataString ? new URLSearchParams({ data: dataString }).toString() : '';
    const backUrl = `/service-packages/create${queryString ? `?${queryString}` : ''}`;
    const router = useRouter();

    const handleCancel = () => {

        router.replace('/service-packages'); // Mặc định chuyển trang

    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-8 text-slate-800 font-sans">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex items-center gap-3 mb-6">
                <Link href={backUrl} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-slate-700" />
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">
                    Đề xuất add-on <span className="text-gray-500 font-medium text-lg ml-2">(Gói: {packageName || `#${id}`})</span>
                </h1>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Card 1: Thông tin dịch vụ */}
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

                    {/* Card 2: Hình ảnh hiện trạng */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-lg font-bold text-slate-800">Hình ảnh hiện trạng</h2>
                            <span className="text-sm text-gray-500">Tối đa 5 ảnh</span>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="bg-[#F0E6FF] p-3 rounded-full mb-3">
                                <Camera className="w-6 h-6 text-[#6E26D9]" />
                            </div>
                            <p className="text-[#6E26D9] font-semibold mb-1">Tải ảnh lên</p>
                            <p className="text-sm text-gray-500 max-w-xs">
                                Kéo thả hoặc nhấn để chọn ảnh chứng minh tình trạng lan cần xử lý
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="lg:col-span-1">
                    <div className="bg-[#FCFCFD] rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">

                        {/* Note Box */}
                        <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-50 mb-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Info className="w-5 h-5 text-[#008A00]" />
                                <h3 className="font-bold text-slate-800">Lưu ý thanh toán</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed ml-7">
                                Phí sẽ được thanh toán bởi khách hàng sau khi duyệt. Đề xuất của bạn sẽ được gửi trực tiếp đến chủ sở hữu lan để xem xét.
                            </p>
                        </div>

                        {/* Summary details */}
                        <div className="space-y-4 mb-6 flex-grow">
                            <div className="flex justify-between items-center text-slate-600">
                                <span>Dịch vụ</span>
                                <span className="font-semibold text-slate-800">Theo đề xuất</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-slate-600">Tổng ước tính</span>
                                <span className="font-bold text-[#6E26D9] text-xl">0 đ</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto space-y-3">
                            <button className="w-full bg-[#6E26D9] hover:bg-[#5A1CB5] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md">
                                Gửi đề xuất
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                            <button
                                onClick={handleCancel}
                                className="w-full text-[#008A00] hover:bg-green-50 font-semibold py-3.5 rounded-xl transition-colors">
                                Hủy bỏ
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
