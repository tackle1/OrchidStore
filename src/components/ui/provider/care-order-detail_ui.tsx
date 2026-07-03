'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { User, Sprout, Image as ImageIcon, History, ArrowRight, Lock, FileText, MapPin, PlusSquare, CheckCircle2, Gavel, RefreshCw } from 'lucide-react';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import { ALL_ORDERS } from './care-orders_ui';

export default function CareOrderDetailUI() {
    const params = useParams();
    const id = params?.id as string || "LC-8924";
    
    const order = ALL_ORDERS.find(o => o.id === id) || {
        id: id,
        customer: { name: 'Nguyen Thị Mai', initials: 'NM', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' },
        orchidType: '5CT Phú Thọ Đột Biến',
        service: 'Phục hồi chuyên sâu (3 tháng)',
        status: { label: 'Đang chăm sóc', color: 'text-[#14532d]', bgColor: 'bg-[#86efac]', dot: 'bg-[#16a34a]' }
    };

    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-7xl mx-auto flex-1 flex flex-col">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-[28px] font-bold text-[#111827] mb-1">Chi tiết đơn chăm sóc</h1>
                            <p className="text-[#6B7280] text-[14px]">
                                Mã đơn: <span className="text-[#6D28D9] font-bold">#{order.id}</span> • Ngày nhận: 12/10/2023
                            </p>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 ${order.status.bgColor} rounded-full ${order.status.color} font-bold text-[14px] shadow-sm`}>
                            <RefreshCw className="w-4 h-4" />
                            {order.status.label}
                        </div>
                    </div>

                    {/* Grid Content */}
                    <div className="flex flex-col lg:flex-row gap-6 items-start">

                        {/* Left Column */}
                        <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-6">
                            
                            {/* Card 1: Khách hàng & Thông tin lan */}
                            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                {/* Khách hàng */}
                                <div className="flex items-center gap-2 mb-5">
                                    <User className="w-5 h-5 text-[#6D28D9]" />
                                    <h3 className="font-bold text-[#1F2937] text-[16px]">Khách hàng</h3>
                                </div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-11 h-11 rounded-full ${order.customer.bgColor} ${order.customer.textColor} flex items-center justify-center font-bold text-lg border border-[#E5E7EB]`}>
                                        {order.customer.initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#1F2937] text-[14px]">{order.customer.name}</div>
                                        <div className="text-[12px] text-[#6B7280]">Thành viên VIP</div>
                                    </div>
                                </div>

                                <hr className="border-t border-[#F3F4F6] mb-6" />

                                {/* Thông tin lan */}
                                <div className="flex items-center gap-2 mb-5">
                                    <Sprout className="w-5 h-5 text-[#6D28D9]" />
                                    <h3 className="font-bold text-[#1F2937] text-[16px]">Thông tin lan</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-[12px] text-[#6B7280] mb-1">Tên loài</div>
                                        <div className="font-bold text-[#1F2937] text-[14px]">{order.orchidType}</div>
                                    </div>
                                    <div>
                                        <div className="text-[12px] text-[#6B7280] mb-1">Gói dịch vụ</div>
                                        <div className="font-medium text-[#1F2937] text-[14px]">{order.service}</div>
                                    </div>
                                    <div>
                                        <div className="text-[12px] text-[#6B7280] mb-1">Tình trạng ban đầu</div>
                                        <div className="font-bold text-[#DC2626] text-[14px]">Suy rễ, nấm lá nhẹ</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Ảnh ban đầu */}
                            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-6 h-6 rounded-md bg-[#F3E8FF] flex items-center justify-center">
                                        <ImageIcon className="w-4 h-4 text-[#6D28D9]" />
                                    </div>
                                    <h3 className="font-bold text-[#1F2937] text-[16px]">Ảnh ban đầu (Từ khách)</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-[#E5E7EB]">
                                        <Image src="/assets/images/initial_img-1.png" width={120} height={120} className="w-full h-full object-cover" alt="Image 1" />
                                    </div>
                                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-[#E5E7EB]">
                                        <Image src="/assets/images/initial_img-2.png" width={120} height={120} className="w-full h-full object-cover" alt="Image 2" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* Middle Column */}
                        <div className="flex-1 flex flex-col gap-6 w-full">
                            
                            {/* Card 3: Tiến trình chăm sóc */}
                            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                <h3 className="font-bold text-[#1F2937] text-[18px] mb-8">Tiến trình chăm sóc</h3>
                                <div className="relative border-l-2 border-[#E5E7EB] ml-[7px] space-y-8">
                                    
                                    {/* Step 1 */}
                                    <div className="relative pl-7">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#10B981]"></div>
                                        <h4 className="font-bold text-[#1F2937] text-[15px] mb-0.5">Tiếp nhận & Ký quỹ</h4>
                                        <p className="text-[13px] text-[#6B7280]">12/10/2023 - 09:00 AM</p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative pl-7">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#10B981]"></div>
                                        <h4 className="font-bold text-[#1F2937] text-[15px] mb-0.5">Bàn giao cây thành công</h4>
                                        <p className="text-[13px] text-[#6B7280]">13/10/2023 - 14:30 PM</p>
                                    </div>

                                    {/* Step 3 (Current) */}
                                    <div className="relative pl-7">
                                        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#6D28D9]"></div>
                                        <h4 className="font-bold text-[#6D28D9] text-[15px] mb-0.5">Giai đoạn phục hồi rễ</h4>
                                        <p className="text-[13px] text-[#A78BFA]">Tuần 1-4 • Đang thực hiện</p>
                                    </div>

                                    {/* Step 4 (Future) */}
                                    <div className="relative pl-7">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#E5E7EB]"></div>
                                        <h4 className="font-bold text-[#9CA3AF] text-[15px] mb-0.5">Giai đoạn kích mầm</h4>
                                        <p className="text-[13px] text-[#9CA3AF]">Dự kiến: 15/11/2023</p>
                                    </div>

                                </div>
                            </div>

                            {/* Card 4: Nhật ký chăm sóc */}
                            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-md bg-[#F3E8FF] flex items-center justify-center">
                                            <History className="w-5 h-5 text-[#6D28D9]" />
                                        </div>
                                        <h3 className="font-bold text-[#1F2937] text-[18px]">Nhật ký chăm sóc (Bằng chứng)</h3>
                                    </div>
                                    <button className="text-[#6D28D9] font-bold text-[14px] flex items-center gap-1 hover:underline">
                                        Xem tất cả <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {/* Log item 1 */}
                                    <div className="bg-[#FAFAFA] rounded-xl p-5 border border-[#E5E7EB]">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-bold text-[#1F2937] text-[15px]">Báo cáo Tuần 2</h4>
                                            <span className="text-[13px] text-[#6B7280]">27/10/2023</span>
                                        </div>
                                        <p className="text-[14px] text-[#4B5563] mb-4 leading-relaxed">
                                            Cây đã có dấu hiệu nhú rễ mới. Vết nấm lá đã khô hoàn toàn sau khi bôi thuốc đặc trị.
                                        </p>
                                        <div className="flex gap-3">
                                            <div className="aspect-[4/3] w-[120px] rounded-lg overflow-hidden border border-[#E5E7EB] bg-gray-100">
                                                <Image src="/assets/images/report-1.png" width={120} height={90} className="w-full h-full object-cover" alt="Log image 1" />
                                            </div>
                                            <div className="aspect-[4/3] w-[120px] rounded-lg overflow-hidden border border-[#E5E7EB] bg-gray-100">
                                                <Image src="/assets/images/report-2.png" width={120} height={90} className="w-full h-full object-cover" alt="Log image 2" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Log item 2 */}
                                    <div className="bg-[#FAFAFA] rounded-xl p-5 border border-[#E5E7EB]">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-bold text-[#1F2937] text-[15px]">Check-in nhận cây</h4>
                                            <span className="text-[13px] text-[#6B7280]">13/10/2023</span>
                                        </div>
                                        <p className="text-[14px] text-[#4B5563] leading-relaxed">
                                            Đã nhận cây từ đơn vị vận chuyển. Cây héo nhẹ do vận chuyển, tiến hành phun sương sương B1.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-6">
                            
                            {/* Card 5: Thanh toán */}
                            <div className="bg-gradient-to-br from-[#E9D5FF] to-[#DBEAFE] rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                <h3 className="font-bold text-[#1F2937] text-[16px] mb-4">Thanh toán</h3>
                                <div className="mb-5 flex items-baseline">
                                    <span className="text-[34px] font-black text-[#6D28D9] tracking-tight">4.500.000</span>
                                    <span className="text-[#6B7280] font-bold text-[14px] ml-1.5">VND</span>
                                </div>
                                <div className="bg-white/80 rounded-xl p-3.5 flex gap-3 items-center backdrop-blur-md shadow-sm border border-white/50">
                                    <div className="w-9 h-9 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Lock className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#10B981] text-[13px] mb-0.5">Đã tạm giữ (Escrowed)</div>
                                        <div className="text-[#6B7280] text-[11px] leading-tight">Sẽ giải ngân khi hoàn thành đơn</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6: Thao tác nghiệp vụ */}
                            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                <h3 className="font-bold text-[#1F2937] text-[16px] mb-5">Thao tác nghiệp vụ</h3>
                                <hr className="border-t border-[#F3F4F6] mb-5" />
                                
                                <div className="space-y-3">
                                    <Link href={`/history-care_orders/${order.id}/report`} className="w-full h-[46px] bg-[#6D28D9] text-white rounded-[10px] font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-sm">
                                        <FileText className="w-4 h-4" />
                                        Gửi báo cáo chăm sóc
                                    </Link>
                                    <Link href={`/history-care_orders/${order.id}/check-in`} className="w-full h-[46px] bg-white text-[#374151] border border-[#D1D5DB] rounded-[10px] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                                        <MapPin className="w-4 h-4" />
                                        Thực hiện check-in
                                    </Link>
                                    <Link href={`/history-care_orders/${order.id}/add-on`} className="w-full h-[46px] bg-white text-[#374151] border border-[#D1D5DB] rounded-[10px] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                                        <PlusSquare className="w-4 h-4" />
                                        Đề xuất add-on
                                    </Link>
                                    <Link href={`/history-care_orders/${order.id}/check-out`} className="w-full h-[46px] bg-white text-[#374151] border border-[#D1D5DB] rounded-[10px] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Thực hiện check-out
                                    </Link>
                                </div>

                                <hr className="border-t border-[#F3F4F6] my-5" />
                                
                                <Link href={`/history-care_orders/${order.id}/dispute`} className="w-full flex items-center justify-center gap-2 text-[#DC2626] font-bold text-[14px] hover:underline">
                                    <Gavel className="w-4 h-4" />
                                    Phản hồi tranh chấp
                                </Link>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
