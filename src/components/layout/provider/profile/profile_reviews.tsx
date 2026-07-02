import React from 'react';
import { Star } from 'lucide-react';

export default function ProfileReviews() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <h3 className="font-bold text-[#1F2937] text-[16px] mb-5">Đánh giá từ khách hàng</h3>

            <div className="space-y-6">
                {/* Review 1 */}
                <div className="border-b border-[#F3F4F6] pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center font-bold text-sm">T</div>
                            <div>
                                <div className="font-bold text-[#1F2937] text-sm mb-0.5">Trần Minh Tâm</div>
                                <div className="text-[12px] text-[#6B7280]">2 ngày trước</div>
                            </div>
                        </div>
                        <div className="flex text-[#6D28D9] gap-0.5">
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                        </div>
                    </div>
                    <p className="text-[#4B5563] text-[13px] leading-relaxed">
                        Vườn chăm sóc rất chuyên nghiệp. Cây lan Hồ Điệp của tôi bị úng rễ nặng, sau 2 tuần gửi tại đây đã bắt đầu ra rễ non mới. Rất hài lòng với dịch vụ!
                    </p>
                </div>

                {/* Review 2 */}
                <div>
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center font-bold text-sm">H</div>
                            <div>
                                <div className="font-bold text-[#1F2937] text-sm mb-0.5">Lê Thu Hà</div>
                                <div className="text-[12px] text-[#6B7280]">1 tuần trước</div>
                            </div>
                        </div>
                        <div className="flex text-[#6D28D9] gap-0.5">
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                            <Star className="w-4 h-4 fill-[#6D28D9]" />
                        </div>
                    </div>
                    <p className="text-[#4B5563] text-[13px] leading-relaxed">
                        Tư vấn nhiệt tình, cập nhật tình trạng cây thường xuyên qua ứng dụng. Giá cả hợp lý so với chất lượng nhận được.
                    </p>
                </div>
            </div>

            <div className="mt-7 text-center">
                <button className="text-[13px] font-bold text-[#6D28D9] hover:underline">
                    Xem thêm đánh giá
                </button>
            </div>
        </div>
    );
}
