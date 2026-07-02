import React from 'react';
import { Save } from 'lucide-react';

export default function SettingsActions() {
    return (
        <div>
            <button className="w-full h-[50px] bg-[#6D28D9] text-white rounded-[14px] font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-md">
                <Save className="w-4 h-4" />
                Lưu thay đổi
            </button>
            <p className="text-[12px] text-[#6B7280] text-center mt-3">
                Các thay đổi sẽ được cập nhật ngay lập tức.
            </p>
        </div>
    );
}
