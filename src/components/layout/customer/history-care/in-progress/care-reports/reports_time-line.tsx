'use client';
import { useState } from 'react';
import {
    CheckCircle2, AlertTriangle, Leaf, FileCheck, FileText, Thermometer,
    Activity, Smile, Syringe
} from 'lucide-react';

interface Report {
    id: number;
    title: string;
    date: Date;                    // ← Đổi thành Date
    status: string;
    statusColor: string;
    description?: string;
    extraInfo?: string;
    images?: string[];
    variant?: 'default' | 'warning' | 'expert-note';
    expertNote?: string;
}

interface ReportsTimelineProps {
    reports: Report[];
}

type ReportCardProps = Report;

// ==================== REPORT CARD ====================
function ReportCard({ ...props }: ReportCardProps) {
    const { title, date, status, statusColor, description, extraInfo, images = [], variant = 'default', expertNote } = props;

    // Format ngày giờ đẹp
    const formattedDate = date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const displayDate = `${formattedDate} • ${formattedTime}`;

    // ==================== TUYỆT VỜI ====================
    if (variant === 'default') {
        return (
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-5">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-[17px] font-semibold text-[#111827]">{title}</h3>
                        <p className="text-xs text-[#6B7280] mt-0.5">{displayDate}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {status}
                    </div>
                </div>

                {/* Ảnh */}
                {images.length > 0 && (
                    <div className="flex gap-3 mb-4">
                        {images.map((src, index) => (
                            <div key={index} className="relative flex-1">
                                <img src={src} alt={title} className="w-full h-[140px] object-cover rounded-2xl" />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                                    {index === 0 ? '09:15' : '09:16'}
                                </div>
                            </div>
                        ))}
                        {images.length === 1 && (
                            <div className="flex-1 bg-[#F3E8FF] rounded-2xl flex items-center justify-center text-sm text-[#6D28D9]">
                                + 2 ảnh
                            </div>
                        )}
                    </div>
                )}

                {/* Ghi chú chuyên gia */}
                {(description || expertNote) && (
                    <div className="bg-[#F0F4FF] border border-[#E0E7FF] rounded-2xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-1.5">
                            <FileText className="w-4 h-4 text-[#6366F1]" />
                            <span className="text-sm font-medium text-[#4338CA]">Ghi chú chuyên gia</span>
                        </div>
                        <p className="text-sm text-[#374151] leading-relaxed">{expertNote || description}</p>
                    </div>
                )}

                {/* Action Tag */}
                {extraInfo && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3E8FF] text-[#6D28D9] rounded-2xl text-sm font-medium">
                        <Syringe className='w-3.5 h-3.5' />
                        {extraInfo}
                    </div>
                )}
            </div>
        );
    }

    // ==================== CẦN THEO DÕI ====================
    if (variant === 'warning') {
        return (
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-5">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-[17px] font-semibold text-[#111827]">{title}</h3>
                        <p className="text-xs text-[#6B7280] mt-0.5">{displayDate}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-medium">
                        <Activity className="w-3.5 h-3.5" /> {status}
                    </div>
                </div>

                {/* Ảnh */}
                {images.length > 0 && (
                    <div className="relative mb-4">
                        <img src={images[0]} alt={title} className="w-full h-[160px] object-cover rounded-2xl" />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                            14:32
                        </div>
                    </div>
                )}

                {(description || expertNote) && (
                    <div className="bg-[#F0F4FF] border border-[#E0E7FF] rounded-2xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-1.5">
                            <FileText className="w-4 h-4 text-[#6366F1]" />
                            <span className="text-sm font-medium text-[#4338CA]">Ghi chú chuyên gia</span>
                        </div>
                        <p className="text-sm text-[#374151] leading-relaxed">{expertNote || description}</p>
                    </div>
                )}

                {/* Warning Action */}
                {extraInfo && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEF2F2] text-[#DC2626] rounded-2xl text-sm font-medium">
                        <Thermometer className='w-3.5 h-3.5' />
                        {extraInfo}
                    </div>
                )}
            </div>
        );
    }

    // ==================== ỔN ĐỊNH ====================
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-5">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-[17px] font-semibold text-[#111827]">{title}</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">{displayDate}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0E7FF] text-[#6366F1] text-xs font-medium">
                    <Smile className="w-3.5 h-3.5" /> {status}
                </div>
            </div>

            {/* Ảnh */}
            {images.length > 0 && (
                <div className="flex gap-3 mb-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative flex-1">
                            <img src={src} alt={title} className="w-full h-[140px] object-cover rounded-2xl" />
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                                {index === 0 ? '08:05' : '08:10'}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Ghi chú chuyên gia */}
            {(description || expertNote) && (
                <div className="bg-[#F0F4FF] border border-[#E0E7FF] rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                        <FileText className="w-4 h-4 text-[#6366F1]" />
                        <span className="text-sm font-medium text-[#4338CA]">Ghi chú chuyên gia</span>
                    </div>
                    <p className="text-sm text-[#374151] leading-relaxed">{expertNote || description}</p>
                </div>
            )}
        </div>
    );
}

// ==================== TIMELINE ====================
export default function ReportsTimeline({ reports }: ReportsTimelineProps) {
    const [showAll, setShowAll] = useState(false);

    const displayedReports = showAll
        ? reports
        : reports.slice(0, 3);

    return (
        <div className="max-w-5xl mx-auto">
            {/* Timeline Section */}
            <div className="relative pb-10">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#22C55E] -translate-x-1/2 z-0" />

                <div className="space-y-8 relative z-10">
                    {displayedReports.map((report, index) => {
                        const isLeft = index % 2 === 0;

                        const getTimelineIcon = () => {
                            if (report.variant === 'warning') {
                                return (
                                    <AlertTriangle className="w-3.5 h-3.5 text-[#93000A]" />
                                );
                            }

                            if (report.variant === 'expert-note') {
                                return (
                                    <FileCheck className="w-3.5 h-3.5 text-[#4A4455]" />
                                );
                            }

                            return (
                                <Leaf className="w-3.5 h-3.5 text-[#007230]" />
                            );
                        };

                        const iconBgColor =
                            report.variant === 'warning'
                                ? 'bg-[#FFDAD6] border-orange-500'
                                : report.variant === 'expert-note'
                                    ? 'bg-[#DAE2FD] border-blue-500'
                                    : 'bg-[#7CF994] border-emerald-500';

                        return (
                            <div
                                key={report.id}
                                className={`relative flex items-start ${isLeft
                                    ? 'justify-start'
                                    : 'justify-end'
                                    }`}
                            >
                                <div
                                    className={`w-full max-w-[420px] ${isLeft
                                        ? 'mr-auto'
                                        : 'ml-auto'
                                        }`}
                                >
                                    <ReportCard {...report} />
                                </div>

                                {/* Timeline Icon */}
                                <div
                                    className={`absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow flex items-center justify-center z-20 ${iconBgColor}`}
                                >
                                    {getTimelineIcon()}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Button nằm ngoài timeline */}
            {reports.length > 3 && !showAll && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setShowAll(true)}
                        className="
                        px-6
                        py-3
                        bg-white
                        border
                        border-[#7C3AED]
                        text-[#7C3AED]
                        rounded-full
                        text-sm
                        font-medium
                        hover:bg-[#FAF5FF]
                        transition-colors
                    "
                    >
                        Tải thêm báo cáo cũ
                    </button>
                </div>
            )}
        </div>
    );


}
