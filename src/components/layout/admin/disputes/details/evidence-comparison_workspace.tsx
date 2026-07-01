'use client';
import { Image, AlertTriangle, Flag, DotIcon } from 'lucide-react';
export default function EvidenceComparisonWorkspace() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Evidence Comparison Workspace</h2>

            <div className="relative pl-8">
                {/* Vertical Timeline Line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200" />

                <div className="space-y-10">
                    {/* 1. Ảnh ban đầu (Khách hàng) */}
                    <div className="relative">
                        {/* Circle */}
                        <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-xs font-medium text-gray-600">
                            <DotIcon className="h-8 w-8 text-gray-500" />
                        </div>

                        <div>
                            <div className="mb-1 flex items-center gap-2">
                                <span className="font-medium text-gray-900">Ảnh ban đầu (Khách hàng)</span>
                            </div>
                            <p className="mb-3 text-xs text-gray-500">Tải lên lúc 10:00 AM, 12/10/2023</p>

                            <div className="grid grid-cols-2 gap-4 md:w-1/2">
                                <div className="flex h-28 items-center justify-center rounded-lg bg-[#E8F0FE]">
                                    <span className="text-2xl text-gray-400">
                                        <Image className="h-8 w-8 text-blue-500" />
                                    </span>
                                </div>
                                <div className="flex h-28 items-center justify-center rounded-lg bg-[#E8F0FE]">
                                    <span className="text-2xl text-gray-400">
                                        <Image className="h-8 w-8 text-blue-500" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Check-in (Nhà vườn) */}
                    <div className="relative">
                        <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-xs font-medium text-gray-600">
                            <DotIcon className="h-8 w-8 text-gray-500" />
                        </div>

                        <div>
                            <div className="mb-1 flex items-center gap-2">
                                <span className="font-medium text-gray-900">Check-in (Nhà vườn)</span>
                            </div>

                            <div className="mb-3 flex gap-2">
                                <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">Lá: OK</span>
                                <span className="rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">Rễ: Yếu</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:w-1/3">
                                <div className="flex h-28 items-center justify-center rounded-lg bg-[#E8F0FE]">
                                    <span className="text-2xl text-gray-400">
                                        <Image className="h-8 w-8 text-blue-500" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* High Risk Flag */}
                    <div className="relative">
                        <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-300 bg-red-50">
                            <span className="text-red-500">
                                <AlertTriangle className="h-4 w-4" />
                            </span>
                        </div>

                        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                            <span className="flex items-center gap-1">
                                <Flag className="h-4 w-4 text-red-700" />
                                <span className="font-medium text-red-700">High Risk Flag</span>
                            </span>
                            <p className="mt-1 text-sm text-red-600">
                                Lưu ý: High Risk flag chỉ điều chỉnh burden of proof, không miễn trách nhiệm tuyệt đối.
                            </p>
                        </div>
                    </div>

                    {/* 6. Bằng chứng tranh chấp (Khách hàng) */}
                    <div className="relative">
                        <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-purple-600 bg-white text-xs font-medium">
                            <DotIcon className="h-8 w-8 text-purple" />
                        </div>

                        <div>
                            <div className="mb-1 flex items-center gap-2">
                                <span className="font-medium text-gray-900">Bằng chứng tranh chấp (Khách hàng)</span>
                            </div>

                            <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                                “Cây nhận về bị thối rễ nặng, lá héo rũ không giống tình trạng lúc check-out. Yêu cầu bồi thường.”
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:w-1/2">
                                <div className="flex h-28 items-center justify-center rounded-lg bg-[#E8F0FE]">
                                    <span className="text-2xl text-gray-400">
                                        <Image className="h-8 w-8 text-blue-500" />
                                    </span>
                                </div>
                                <div className="flex h-28 items-center justify-center rounded-lg bg-[#E8F0FE]">
                                    <span className="text-2xl text-gray-400">
                                        <Image className="h-8 w-8 text-blue-500" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}