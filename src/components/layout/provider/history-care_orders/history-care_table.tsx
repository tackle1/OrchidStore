import React from 'react';
import { EllipsisVertical } from 'lucide-react';
import Link from 'next/link';

interface HistoryCareTableProps {
    orders: any[];
}

export default function HistoryCareTable({ orders }: HistoryCareTableProps) {
    return (
        <div className="flex flex-col flex-1">
            {/* Table Header */}
            <div className="grid grid-cols-14 gap-4 px-6 py-4 border-b border-[#E5E7EB] bg-[#F9FAFB] text-sm font-semibold text-[#4B5563]">
                <div className="col-span-1">Mã đơn</div>
                <div className="col-span-2">Khách hàng</div>
                <div className="col-span-2">Loại Lan</div>
                <div className="col-span-2">Dịch vụ</div>
                <div className="col-span-2">Trạng thái</div>
                <div className="col-span-2">Hành động tiếp theo</div>
                <div className="col-span-2">Hạn chót</div>
                <div className="col-span-1"></div>
            </div>

            {/* Table Body */}
            {orders.length > 0 ? (
                orders.map((order, idx) => (
                    <div key={idx} className="grid grid-cols-14 gap-4 px-6 py-4 items-center border-b border-[#E5E7EB] hover:bg-gray-50 transition-colors last:border-0">
                        <div className="col-span-1 font-semibold text-[#6D28D9]">{order.id}</div>
                        <div className="col-span-2 flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${order.customer.bgColor} ${order.customer.textColor} flex items-center justify-center font-bold text-xs`}>
                                {order.customer.initials}
                            </div>
                            <span className="text-[#1F2937] font-medium text-sm">{order.customer.name}</span>
                        </div>
                        <div className="col-span-2 text-[#4B5563] text-sm font-medium">{order.orchidType}</div>
                        <div className="col-span-2 text-[#4B5563] text-sm font-medium">{order.service}</div>
                        <div className="col-span-2">
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${order.status.bgColor} ${order.status.color}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${order.status.dot}`}></span>
                                {order.status.label}
                            </div>
                        </div>
                        <div className={`col-span-2 text-sm font-medium ${order.isWarning ? 'text-[#DC2626]' : 'text-[#4B5563]'}`}>
                            {order.nextAction}
                        </div>
                        <div className="col-span-2 flex items-center justify-between gap-1">
                            <span className={`text-sm font-medium whitespace-nowrap ${order.isWarning ? 'text-[#DC2626]' : 'text-[#4B5563]'}`}>
                                {order.deadline}
                            </span>
                        </div>
                        <div className="col-span-1 flex items-center justify-between gap-1 relative group">
                            <button type="button" aria-label="More options" title="More options" className="p-1 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0">
                                <EllipsisVertical className="w-5 h-5 text-[#6B7280]" />
                            </button>
                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-[#E5E7EB] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                <div className="p-1">
                                    {order.status.label === "Chờ check-in" && (
                                        <Link href={`/history-care_orders/${order.id}/check-in`} className="block px-4 py-2 text-sm text-[#1F2937] font-medium hover:bg-[#F3E8FF] hover:text-[#6D28D9] rounded-lg transition-colors">
                                            Check-in đơn
                                        </Link>
                                    )}
                                    {order.status.label === "Tranh chấp" && (
                                        <Link href={`/history-care_orders/${order.id}/dispute`} className="block px-4 py-2 text-sm text-[#1F2937] font-medium hover:bg-[#FEE2E2] hover:text-[#DC2626] rounded-lg transition-colors">
                                            Phản hồi tranh chấp
                                        </Link>
                                    )}
                                    <div className="block px-4 py-2 text-sm text-[#1F2937] font-medium hover:bg-gray-100 rounded-lg transition-colors">
                                        Xem chi tiết
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex-1 flex items-center justify-center py-10">
                    <span className="text-gray-500">Không có đơn nào phù hợp</span>
                </div>
            )}
        </div>
    );
}
