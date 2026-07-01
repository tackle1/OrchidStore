import { Search, Calendar, Filter, Eye, Download } from 'lucide-react';

export default function DisputeHeader() {
    return (
        <div className="mb-6 flex items-start justify-between">
            {/* Left side - Title & Description */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Tất cả tranh chấp</h1>
                <p className="mt-1 text-sm text-gray-600">
                    Quản lý và theo dõi tiến trình xử lý khiếu nại từ khách hàng và nhà cung cấp.
                </p>
            </div>

            {/* Right side - Action Buttons */}
            <div className="flex items-center gap-3">
                {/* Button Xuất dữ liệu */}
                <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100">
                    <Download className='w-4 h-4' />
                    Xuất dữ liệu
                </button>

                {/* Button Tạo hồ sơ mới */}
                <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 active:bg-purple-800">
                    <span className="text-lg leading-none">+</span>
                    Tạo hồ sơ mới
                </button>
            </div>
        </div>

    );
}