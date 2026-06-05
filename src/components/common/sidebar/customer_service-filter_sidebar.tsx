'use client';

import { useState } from 'react';
import { Filter, MapPin } from 'lucide-react';

export default function ServiceFilterSidebar() {
    const [minRating, setMinRating] = useState(4);
    const [partnerType, setPartnerType] = useState({
        nursery: false,
        expert: false,
    });
    const [region, setRegion] = useState('Toàn quốc');
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const handleReset = () => {
        setMinRating(0);
        setPartnerType({ nursery: false, expert: false });
        setRegion('Toàn quốc');
        setPriceFrom('');
        setPriceTo('');
    };

    return (
        <div className="w-full max-w-[280px] bg-white border border-[#E5E7EB] rounded-3xl p-5 shadow-sm">

            {/* Header */}
            <div className="flex items-center gap-2 mb-5">
                <Filter className="w-5 h-5 text-[#6D28D9]" />
                <h3 className="text-[17px] font-semibold text-[#1F2937]">Bộ lọc tìm kiếm</h3>
            </div>

            {/* Loại đối tác */}
            <div className="mb-6">
                <p className="text-sm font-medium text-[#374151] mb-3">Loại đối tác</p>
                <div className="space-y-2.5">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={partnerType.nursery}
                            onChange={(e) => setPartnerType({ ...partnerType, nursery: e.target.checked })}
                            className="accent-[#6D28D9] w-4 h-4"
                        />
                        <span className="text-sm text-[#4B5563]">Nhà vườn chuyên nghiệp</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={partnerType.expert}
                            onChange={(e) => setPartnerType({ ...partnerType, expert: e.target.checked })}
                            className="accent-[#6D28D9] w-4 h-4"
                        />
                        <span className="text-sm text-[#4B5563]">Chuyên gia độc lập</span>
                    </label>
                </div>
            </div>

            {/* Khu vực */}
            <div className="mb-6">
                <p className="text-sm font-medium text-[#374151] mb-2">Khu vực</p>
                <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-[#9CA3AF]" />
                    <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        aria-label="Khu vực"
                        title="Khu vực"
                        className="custom-select w-full h-[44px] pl-9 pr-4 border border-[#D1D5DB] rounded-xl text-sm focus:outline-none focus:border-[#6D28D9] bg-white"
                    >
                        <option value="Toàn quốc">Toàn quốc</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Đà Lạt">Đà Lạt</option>
                    </select>
                </div>
            </div>

            {/* Khoảng giá */}
            <div className="mb-6">
                <p className="text-sm font-medium text-[#374151] mb-2">Khoảng giá (VND/tháng)</p>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Từ"
                        value={priceFrom}
                        onChange={(e) => setPriceFrom(e.target.value)}
                        className="w-full h-[42px] px-4 border border-[#D1D5DB] rounded-xl text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#6D28D9]"
                    />
                    <span className="text-[#9CA3AF]">-</span>
                    <input
                        type="text"
                        placeholder="Đến"
                        value={priceTo}
                        onChange={(e) => setPriceTo(e.target.value)}
                        className="w-full h-[42px] px-4 border border-[#D1D5DB] rounded-xl text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#6D28D9]"
                    />
                </div>
            </div>

            {/* Đánh giá tối thiểu */}
            <div className="mb-6">
                <p className="text-sm font-medium text-[#374151] mb-3">Đánh giá tối thiểu</p>
                <div className="flex gap-2">
                    {[3, 4, 5].map((rating) => (
                        <button
                            key={rating}
                            onClick={() => setMinRating(rating)}
                            className={`flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all
                                ${minRating === rating
                                    ? 'bg-[#6D28D9] text-white'
                                    : 'bg-white border border-[#D1D5DB] text-[#4B5563] hover:bg-gray-50'
                                }`}
                        >
                            {rating} <span className="text-yellow-400">★</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Nút Thiết lập lại */}
            <button
                onClick={handleReset}
                className="w-full h-[44px] border border-[#6D28D9] text-[#6D28D9] rounded-xl text-sm font-medium hover:bg-[#F3E8FF] transition-colors"
            >
                Thiết lập lại
            </button>
        </div>
    );
}