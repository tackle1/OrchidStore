'use client';

import { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
// Hàm format số kiểu Việt Nam
const formatCurrency = (value: number) => {
    if (!value) return '';
    return value.toLocaleString('vi-VN');
};

// Hàm bỏ format để lấy số thực
const parseCurrency = (value: string) => {
    return Number(value.replace(/\./g, '')) || 0;
};

export default function CreateServicePackageForm() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        duration: 0,
        reportFrequency: 'Hàng tuần',
        maxPlants: 0,
        packagePrice: 0,
        shippingFee: 0,
    });
    const router = useRouter();

    useEffect(() => {
        const editData = searchParams.get('data');
        if (editData) {
            try {
                const parsed = JSON.parse(editData);
                setFormData(prev => ({ ...prev, ...parsed }));
            } catch (error) {
                console.error("Failed to parse edit data:", error);
            }
        }
    }, [searchParams]);

    const handleClick = () => {

        router.replace('/service-packages'); // Mặc định chuyển trang

    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dữ liệu gửi:', formData);
        // TODO: Gọi API tạo gói dịch vụ
    };

    // Xử lý thay đổi giá tiền
    const handlePriceChange = (field: 'packagePrice' | 'shippingFee', value: string) => {
        const numericValue = parseCurrency(value);
        setFormData(prev => ({ ...prev, [field]: numericValue }));
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-[#1F2937] mb-6">
                Thêm / chỉnh sửa dịch vụ
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Thông tin cơ bản */}
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-[#6D28D9] mb-4">Thông tin cơ bản</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Tên dịch vụ</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="VD: Gói Chăm sóc Hồ Điệp Định kỳ"
                                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Mô tả</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Mô tả chi tiết về dịch vụ chăm sóc..."
                                rows={4}
                                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            />
                        </div>
                    </div>
                </div>

                {/* Chi tiết & Giới hạn */}
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-[#6D28D9] mb-4">Chi tiết & Giới hạn</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Thời lượng (tháng)</label>
                            <input
                                type="number"
                                min={0}
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
                                placeholder="VD: 3"
                                title="Thời lượng (tháng)"
                                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Tần suất báo cáo</label>
                            <select
                                value={formData.reportFrequency}
                                onChange={(e) => setFormData({ ...formData, reportFrequency: e.target.value })}
                                title="Tần suất báo cáo"
                                className="custom-select w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            >
                                <option>Hàng tuần</option>
                                <option>Hàng ngày</option>
                                <option>Sau thực hiện</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Số lượng cây tối đa</label>
                            <input
                                type="number"
                                min={0}
                                value={formData.maxPlants}
                                onChange={(e) => setFormData({ ...formData, maxPlants: Number(e.target.value) })}
                                placeholder="VD: 10"
                                title="Số lượng cây tối đa"
                                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            />
                        </div>
                    </div>
                </div>

                {/* Chi phí dịch vụ - ĐÃ FORMAT GIÁ TIỀN */}
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-[#6D28D9] mb-4">Chi phí dịch vụ</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Giá gói (VND)</label>
                            <input
                                type="text"
                                value={formatCurrency(formData.packagePrice)}
                                onChange={(e) => handlePriceChange('packagePrice', e.target.value)}
                                placeholder="VD: 5.000.000"
                                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Phí vận chuyển (VND)</label>
                            <input
                                type="text"
                                value={formatCurrency(formData.shippingFee)}
                                onChange={(e) => handlePriceChange('shippingFee', e.target.value)}
                                placeholder="VD: 200.000"
                                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6D28D9]"
                            />
                        </div>
                    </div>
                </div>

                {/* Công việc chăm sóc bao gồm */}
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-[#6D28D9] mb-4">Công việc chăm sóc bao gồm</h2>

                    <div className="grid grid-cols-2 gap-3">
                        {[
                            "Thay giá thể", "Cắt tỉa rễ/cành", "Kiểm tra nấm bệnh",
                            "Báo cáo định kỳ", "Định hướng (Phân bón)", "Bón phân"
                        ].map((task, index) => (
                            <label key={index} className="flex items-center gap-2 text-sm text-[#374151]">
                                <input type="checkbox" className="accent-[#6D28D9]" defaultChecked={index < 3} />
                                {task}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Hình ảnh dịch vụ */}
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-[#6D28D9] mb-4">Hình ảnh dịch vụ</h2>

                    <div className="bg-[#F2F3FF] border-2 border-dashed border-[#D1D5DB] rounded-2xl h-[200px] flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center mb-3">
                            <Upload className="w-6 h-6 text-[#630ED4]" />
                        </div>
                        <p className="text-lg text-[#131B2E] font-bold">Kéo thả ảnh vào đây</p>
                        <p className="text-sm text-[#131B2E]">hoặc nhấn để duyệt file (PNG, JPG, tối đa 5MB)</p>
                        <button type="button" className="text-[#6D28D9] text-sm font-medium mt-1
                         bg-[#FAF8FF] border-[#7B7487] rounded-lg border-2 px-2 py-2 mt-2">
                            Upload service photos
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4">
                    <div className="flex justify-end gap-3 ml-auto">
                        <button
                            type="button"
                            onClick={handleClick}
                            className="px-6 py-3 text-[#6B7280] font-medium hover:bg-gray-100 rounded-xl"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#7C3AED] text-white font-semibold rounded-xl hover:bg-[#6D28D9]"
                        >
                            Lưu dịch vụ
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
