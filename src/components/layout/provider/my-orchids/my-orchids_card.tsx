import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Sprout, Calendar, ArrowRight } from 'lucide-react';

export interface OrchidData {
    id: string;
    name: string;
    image: string;
    customer: string;
    service: string;
    startDate: string;
    status: {
        label: string;
        bgColor: string;
        textColor: string;
        dotColor: string;
    };
}

interface MyOrchidsCardProps {
    orchid: OrchidData;
}

export default function MyOrchidsCard({ orchid }: MyOrchidsCardProps) {
    return (
        <div className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow group flex flex-col">
            <div className="relative h-[200px] w-full bg-gray-100 overflow-hidden">
                <Image 
                    src={orchid.image} 
                    alt={orchid.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                    <div className={`px-3 py-1.5 rounded-full ${orchid.status.bgColor} ${orchid.status.textColor} text-[12px] font-bold flex items-center gap-1.5 backdrop-blur-md`}>
                        <span className={`w-2 h-2 rounded-full ${orchid.status.dotColor}`}></span>
                        {orchid.status.label}
                    </div>
                </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-bold text-[#1F2937] text-[16px] line-clamp-1">{orchid.name}</h3>
                        <p className="text-[#6B7280] text-[13px] mt-0.5">ID: {orchid.id}</p>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280]">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="text-[14px] text-[#4B5563] font-medium">{orchid.customer}</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#6D28D9]">
                            <Sprout className="w-4 h-4" />
                        </div>
                        <div className="text-[14px] text-[#4B5563]">{orchid.service}</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center text-[#10B981]">
                            <Calendar className="w-4 h-4" />
                        </div>
                        <div className="text-[14px] text-[#4B5563]">Nhận: {orchid.startDate}</div>
                    </div>
                </div>

                <div className="mt-auto">
                    <Link href={`/history-care_orders/${orchid.id}`} className="w-full h-10 rounded-xl border border-[#E5E7EB] flex items-center justify-center gap-2 text-[#4B5563] font-semibold text-[14px] hover:bg-gray-50 hover:text-[#6D28D9] hover:border-[#C4B5FD] transition-colors">
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
