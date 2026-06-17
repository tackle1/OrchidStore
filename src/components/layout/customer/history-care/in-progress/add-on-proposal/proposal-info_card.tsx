'use client';

import { BriefcaseBusiness, CircleQuestionMark, MessageSquareText } from 'lucide-react';

export default function ProposalInfoCard() {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6">

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <BriefcaseBusiness className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <h3 className="font-semibold text-lg">Thông tin đề xuất</h3>
            </div>

            <div className="space-y-5 text-sm">

                {/* Tên dịch vụ + Chuyên gia */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                    <div>
                        <p className="text-[#6B7280] text-xs mb-1">Tên dịch vụ thêm</p>
                        <p className="font-medium">Xử lý nấm rễ cặp tóc & Thay giá thể</p>
                    </div>

                    <div>
                        <p className="text-[#6B7280] text-xs mb-1">Chuyên gia đề xuất</p>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#6D28D9] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                NV
                            </div>
                            <span className="font-medium">Nguyễn Văn A (Nhà vườn Sinh Thái)</span>
                        </div>
                    </div>
                </div>

                {/* Lý do đề xuất */}
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <CircleQuestionMark className="w-3 h-3 text-[#6B7280]" />
                        <p className="text-[#6B7280] text-xs">Lý do đề xuất</p>
                    </div>
                    <p className="text-sm text-[#374151]">
                        Trong quá trình kiểm tra định kỳ, chúng tôi phát hiện rễ của chậu Lan Đột Biến (Mã: LDB-001) có dấu hiệu nhiễm nấm mốc trắng ở phần giá thể sâu bên dưới. Nếu không xử lý kịp thời, nấm có thể lây lan và làm thối rễ bộ rễ chính.
                    </p>
                </div>

                {/* Giải thích từ nhà cung cấp */}
                <div className="bg-[#F3E8FF] border border-[#E5E7EB] rounded-2xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                        <MessageSquareText className="w-3 h-3 text-[#6D28D9] mt-0.5" />
                        <p className="font-medium text-sm">Giải thích từ nhà cung cấp</p>
                    </div>
                    <p className="text-sm text-[#4B5563] pl-6">
                        "Chúng tôi cần tiền hành dỡ chậu, cắt tỉa các phần rễ đã nhiễm bệnh, ngâm thuốc đặc trị nấm trong 2 giờ và sau đó đóng gói lại bằng giá thể mới và thông số kỹ thuật mới để đảm bảo cây phục hồi hoàn toàn."
                    </p>
                </div>
            </div>
        </div>
    );
}