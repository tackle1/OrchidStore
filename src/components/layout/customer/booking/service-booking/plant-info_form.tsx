'use client';
import { Leaf } from 'lucide-react';
export default function PlantInfoForm() {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span><Leaf className='w-4 h-4 text-[#6D28D9]' /></span> Thông tin cây
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="orchidType" className="block text-sm font-medium mb-1">Loại lan *</label>
                    <input
                        id="orchidType"
                        type="text"
                        defaultValue="Hồ Điệp"
                        title="Loại lan"
                        placeholder="Nhập loại lan"
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5"
                    />
                </div>
                <div>
                    <label htmlFor="potCount" className="block text-sm font-medium mb-1">Số lượng chậu *</label>
                    <input
                        id="potCount"
                        type="number"
                        defaultValue="1"
                        title="Số lượng chậu"
                        placeholder="1"
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="plantCondition" className="block text-sm font-medium mb-1">Tình trạng cây hiện tại *</label>
                <textarea
                    id="plantCondition"
                    rows={3}
                    defaultValue="Lá vàng, rễ yếu, cây hơi héo"
                    title="Tình trạng cây hiện tại"
                    placeholder="Mô tả tình trạng cây"
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3"
                />
            </div>

            <div className="mt-4">
                <label htmlFor="expertNote" className="block text-sm font-medium mb-1">Ghi chú thêm cho chuyên gia</label>
                <textarea
                    id="expertNote"
                    rows={2}
                    title="Ghi chú thêm cho chuyên gia"
                    placeholder="Cây đã bị tình trạng này khoảng 2 tuần..."
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3"
                />
            </div>
        </div>
    );
}