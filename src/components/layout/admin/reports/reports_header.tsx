'use client';

import { Calendar, Download, ChevronDown } from 'lucide-react';
import * as XLSX from 'xlsx';

interface ReportsHeaderProps {
  onExport?: () => void;
  onFilterChange?: (value: string) => void;
}

export default function ReportsHeader({
  onExport,
  onFilterChange
}: ReportsHeaderProps) {

  // Hàm xuất Excel
  const handleExportExcel = () => {
    // Dữ liệu mẫu (sau này bạn có thể truyền từ props hoặc API)
    const data = [
      { Tháng: 'Tháng 10, 2023', 'Tổng thu (VND)': 450000000, 'Phí nền tảng (15%)': 67500000, 'Hoàn tiền': 1200000, 'Thực chi cho NCC': 381300000, 'Trạng thái': 'Đã đối soát' },
      { Tháng: 'Tháng 9, 2023', 'Tổng thu (VND)': 410000000, 'Phí nền tảng (15%)': 61500000, 'Hoàn tiền': 850000, 'Thực chi cho NCC': 347650000, 'Trạng thái': 'Đã đối soát' },
      { Tháng: 'Tháng 8, 2023', 'Tổng thu (VND)': 385000000, 'Phí nền tảng (15%)': 57750000, 'Hoàn tiền': 2100000, 'Thực chi cho NCC': 325150000, 'Trạng thái': 'Đã đối soát' },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Báo cáo');

    // Xuất file
    XLSX.writeFile(workbook, 'Bao_cao_LanCare.xlsx');

    if (onExport) onExport();
  };

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Left: Title + Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-[#111827]">Báo cáo & phân tích</h1>
        <p className="text-[#6B7280] mt-1 text-sm">
          Tổng hợp dữ liệu hoạt động động nền tảng LanCare
        </p>
      </div>

      {/* Right: Filter + Export Button */}
      <div className="flex items-center gap-3">
        {/* Dropdown: Thời gian */}
        <div className="relative">
          <select
            defaultValue="90"
            onChange={(e) => onFilterChange?.(e.target.value)}
            aria-label="Lọc theo khoảng thời gian"
            className="appearance-none pl-11 pr-10 py-2.5 border border-[#E5E7EB] rounded-xl text-sm font-medium bg-white focus:outline-none focus:border-[#6D28D9] cursor-pointer min-w-[160px]"
          >
            <option value="7">7 Ngày qua</option>
            <option value="30">30 Ngày qua</option>
            <option value="90">90 Ngày qua</option>
            <option value="this-month">Tháng này</option>
            <option value="last-month">Tháng trước</option>
          </select>

          {/* Icon Calendar - Tách ra bên trái */}
          <Calendar className="absolute left-4 top-3 w-4 h-4 text-[#6B7280] pointer-events-none" />

          {/* Icon mũi tên xuống */}
          <ChevronDown className="absolute right-4 top-3 w-4 h-4 text-[#6B7280] pointer-events-none" />
        </div>

        {/* Nút Xuất báo cáo */}
        <button
          onClick={handleExportExcel}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          Xuất báo cáo
        </button>
      </div>
    </div>
  );
}