'use client';

import { useRouter, useParams } from 'next/navigation';
import { FileText } from 'lucide-react';

export default function CareReportCard() {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;

    return (
        <div className="bg-[#F3E8FF] rounded-3xl p-5 flex items-center justify-between">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FileText className="w-5 h-5 text-[#6D28D9]" />
                </div>
                <div>
                    <h3 className="font-semibold text-[#1F2937]">
                        Báo cáo chăm sóc tuần 2 đã sẵn sàng
                    </h3>
                    <p className="text-sm text-[#6B7280] mt-1 max-w-md">
                        Nhà vườn Vườn Lan Thảo Điền vừa cập nhật tình trạng mới nhất của Đột Biến 5 Cánh Trắng.
                    </p>
                </div>
            </div>

            <button
                onClick={() => router.push(`/history-care/in-progress/${slug}/care-reports`)}
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-colors whitespace-nowrap"
            >
                Xem báo cáo
            </button>
        </div>
    );
}