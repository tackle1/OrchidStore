'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft, Upload, X, AlertTriangle, ChevronDown, Camera, UserRoundCheck,
    Send, SquareArrowRightExit, FileText, Info
} from 'lucide-react';

interface DisputeFormProps {
    slug: string;
    onSubmit?: (data: any) => void;
}

export default function CustomerDisputeForm({ slug, onSubmit }: DisputeFormProps) {
    const router = useRouter();

    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const reasons = [
        'Chất lượng dịch vụ không đạt yêu cầu',
        'Chuyên gia không thực hiện đúng cam kết',
        'Thời gian chăm sóc bị chậm trễ',
        'Phát sinh chi phí không rõ ràng',
        'Khác',
    ];

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setUploadedFiles((prev) => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        const data = {
            reason,
            description,
            files: uploadedFiles,
            slug,
        };
        onSubmit?.(data);
        alert('Đã gửi tranh chấp thành công! (Demo)');
    };

    const handleBack = () => {
        router.back(); // ← Dùng useRouter để quay lại
    };

    return (
        <div className="min-h-screen bg-[#F8F9FC] p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={handleBack}
                    title="Quay lại"
                    aria-label="Quay lại"
                    className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827]"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-2xl font-semibold text-[#111827]">Mở tranh chấp</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* ==================== CHI TIẾT VẤN ĐỀ ==================== */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
                        <h2 className="font-semibold text-[17px] text-[#111827] mb-5">Chi tiết vấn đề</h2>

                        <div className="space-y-5">
                            {/* Lý do tranh chấp */}
                            <div className="relative">
                                <label htmlFor="reason" className="block text-sm font-medium text-[#374151] mb-2">
                                    Lý do tranh chấp
                                </label>
                                <div className="relative">
                                    <select
                                        id="reason"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        className="w-full border border-[#CCC3D8] bg-[#FAF8FF] rounded-sm px-4 py-[13px] text-sm text-[#6B7280] focus:outline-none focus:border-[#7C3AED] appearance-none"
                                    >
                                        <option value="">Chọn lý do</option>
                                        {reasons.map((r, idx) => (
                                            <option key={idx} value={r}>
                                                {r}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#6B7280] pointer-events-none" />
                                </div>
                            </div>

                            {/* Mô tả chi tiết */}
                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-2">
                                    Mô tả chi tiết
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Vui lòng cung cấp chi tiết sự cố, thời gian phát hiện và các thông tin liên quan..."
                                    rows={5}
                                    className="w-full border border-[#CCC3D8] bg-[#FAF8FF] rounded-sm px-4 py-3 text-sm text-[#6B7280] placeholder:text-[#9CA3AF] resize-none focus:outline-none focus:border-[#7C3AED]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tải lên bằng chứng */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-semibold text-lg">Tải lên bằng chứng</h2>
                            <span className="text-xs text-[#6B7280]">Tối đa 5 ảnh (JPEG/PNG)</span>
                        </div>

                        <label className="bg-[#FAF8FF] border-2 border-dashed border-[#D1D5DB] rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#7C3AED] transition-colors">
                            <Upload className="w-8 h-8 text-[#9CA3AF] mb-3" />
                            <p className="text-sm text-[#374151] font-medium">Nhấn để tải lên hoặc kéo thả ảnh vào đây</p>
                            <p className="text-xs text-[#6B7280] mt-1">PNG, JPG (tối đa 5MB)</p>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </label>

                        {uploadedFiles.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                                {uploadedFiles.map((file, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={file.name}
                                            className="w-full h-24 object-cover rounded-xl border"
                                        />
                                        <button
                                            onClick={() => removeFile(index)}
                                            title="Xóa ảnh"
                                            aria-label={`Xóa ${file.name}`}
                                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition"
                                        >
                                            <X className="w-4 h-4 text-red-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ==================== BẰNG CHỨNG LIÊN QUAN (HỆ THỐNG) ==================== */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
                        <h2 className="font-semibold text-lg mb-5">Bằng chứng liên quan (Hệ thống)</h2>

                        {/* Grid 2x2 - 4 ô hình vuông */}
                        <div className="grid grid-cols-2 gap-4">

                            {/* Ảnh ban đầu - Hình vuông */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E5E7EB] group">
                                <img
                                    src="/assets/images/orchid-dispute_initial.jpg"
                                    alt="Ảnh ban đầu"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1.5 text-xs font-medium text-[#374151] shadow-sm">
                                    <span>
                                        <Camera className='w-4 h-4' />
                                    </span>
                                    <span>Ảnh ban đầu</span>
                                </div>
                            </div>

                            {/* Check-in - Hình vuông */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E5E7EB] group">
                                <img
                                    src="/assets/images/orchid-dispute_check-in.jpg"
                                    alt="Check-in"
                                    className="w-full h-full object-cover grayscale-[30%]"
                                />
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium text-[#374151] shadow-sm">
                                    <span>
                                        <UserRoundCheck className='w-4 h-4' />
                                    </span>
                                    <span>Check-in</span>
                                </div>
                            </div>

                            {/* Báo cáo tuần #12 - Hình vuông */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white flex flex-col items-center justify-center p-4 text-center">
                                <div className="w-10 h-10 flex items-center justify-center mb-2">
                                    <FileText />
                                </div>
                                <p className="font-medium text-[#374151] text-sm">Báo cáo tuần #12</p>
                                <p className="text-xs text-[#6B7280] mt-0.5">15/05/2024</p>
                            </div>

                            {/* Check-out - Hình vuông */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E5E7EB] group">
                                <img
                                    src="/assets/images/orchid-dispute_check-out.jpg"
                                    alt="Check-out"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium text-[#374151] shadow-sm">
                                    <span>
                                        <SquareArrowRightExit className='w-4 h-4' />
                                    </span>
                                    <span>Check-out</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* ==================== THÔNG TIN ẢNH HƯỞNG ==================== */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
                        {/* Header */}
                        <div className="flex items-start gap-3 mb-5">
                            <div className="mt-0.5">
                                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                            </div>
                            <h3 className="font-semibold text-[#111827] text-lg">Thông tin ảnh hưởng</h3>
                        </div>

                        {/* Nội dung thông tin */}
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-[#6B7280]">Gói dịch vụ</span>
                                <span className="font-medium text-[#111827]">Chăm sóc VIP Đột biến</span>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-[#F3F4F6]">
                                <span className="text-[#6B7280]">Chuyên gia</span>
                                <span className="font-medium text-[#111827]">Nguyễn Văn A</span>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-[#F3F4F6]">
                                <span className="text-[#6B7280]">Khoản tiền tạm giữ</span>
                                <span className="text-xl font-semibold text-[#EF4444]">5,000,000đ</span>
                            </div>
                        </div>

                        {/* Thông báo */}
                        <div className="mt-5 p-3.5 bg-[#FEF2F2] rounded-2xl flex gap-2.5 text-xs text-[#991B1B]">
                            <div className="mt-0.5">
                                <Info className="w-4 h-4 text-[#EF4444]" />
                            </div>
                            <p>
                                Khoản tiền này sẽ được tạm giữ cho đến khi tranh chấp được giải quyết bởi quản trị viên.
                            </p>
                        </div>
                    </div>

                    {/* ==================== ACTION BUTTONS ==================== */}
                    <div className="space-y-3 pt-2 bg-white p-10 rounded-2xl">
                        {/* Nút Gửi tranh chấp - Màu đỏ + Icon */}
                        <button
                            onClick={handleSubmit}
                            disabled={!reason || !description}
                            className=" w-full flex items-center justify-center gap-2.5 py-3.5
                            mt-8
                   bg-[#E11D48] hover:bg-[#DC2626] 
                   text-white font-semibold text-[15px] rounded-xl 
                   transition-all active:scale-[0.985]"
                        >
                            <Send className="w-4 h-4" />
                            Gửi tranh chấp
                        </button>

                        {/* Nút Hủy bỏ */}
                        <button
                            onClick={handleBack}
                            className="w-full flex bg-[#E5E7EB] items-center justify-center gap-2.5 py-3.5
                   border border-[#CCC3D8] text-[#374151] font-medium text-[15px] 
                   rounded-xl hover:bg-[#F9FAFB] active:bg-[#F3F4F6] 
                   transition-all"
                        >
                            Hủy bỏ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}