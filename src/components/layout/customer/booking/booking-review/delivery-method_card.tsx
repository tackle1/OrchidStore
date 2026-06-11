'use client';

import { MapPin } from 'lucide-react';

interface DeliveryMethodCardProps {
    deliveryMethod: 'nursery' | 'self';
    onDeliveryMethodChange: (method: 'nursery' | 'self') => void;
}

export default function DeliveryMethodCard({
    deliveryMethod,
    onDeliveryMethodChange,
}: DeliveryMethodCardProps) {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            <h3 className="font-semibold mb-4">Phương thức giao nhận</h3>

            <div className="space-y-3">
                {/* Nhà vườn đến nhận */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${deliveryMethod === 'nursery' ? 'border-[#6D28D9] bg-[#F5F3FF]' : 'border-[#E5E7EB]'
                    }`}>
                    <input
                        type="radio"
                        checked={deliveryMethod === 'nursery'}
                        onChange={() => onDeliveryMethodChange('nursery')}
                        className="mt-1 accent-[#6D28D9]"
                    />
                    <div>
                        <div className="font-medium">Nhà vườn đến nhận</div>
                        <p className="text-sm text-[#6B7280]">Phí vận chuyển tính theo khoảng cách.</p>
                    </div>
                </label>

                {/* Khách tự mang đến */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${deliveryMethod === 'self' ? 'border-[#6D28D9] bg-[#F5F3FF]' : 'border-[#E5E7EB]'
                    }`}>
                    <input
                        type="radio"
                        checked={deliveryMethod === 'self'}
                        onChange={() => onDeliveryMethodChange('self')}
                        className="mt-1 accent-[#6D28D9]"
                    />
                    <div>
                        <div className="font-medium">Khách tự mang đến</div>
                        <p className="text-sm text-[#6B7280]">Miễn phí. Bạn tự mang lan đến nhà vườn.</p>
                    </div>
                </label>
            </div>

            {/* Địa chỉ */}
            <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Địa chỉ lấy cây
                    </span>
                    <button className="text-sm text-[#6D28D9] font-medium">Thay đổi</button>
                </div>
                <div className="text-sm text-[#374151]">
                    Nguyễn Văn A - 0901234567<br />
                    123 Đường Hoa Lan, Phường 4, Quận Phú Nhuận, TP. Hồ Chí Minh
                </div>
                <div className="mt-2 text-xs text-[#16A34A]">
                    Phí vận chuyển dự kiến: 50.000 ₫ (Sẽ được cập nhật chính xác bởi nhà vườn)
                </div>
            </div>
        </div>
    );
}