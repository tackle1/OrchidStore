'use client';

import { Upload } from 'lucide-react';

interface PhotoUploadZoneProps {
    onFileSelect: (files: FileList | null) => void;
}

export default function PhotoUploadZone({ onFileSelect }: PhotoUploadZoneProps) {
    return (
        <div
            onClick={() => document.getElementById('photo-upload')?.click()}
            className="bg-[#E2E7FF] border-2 border-dashed border-[#CBD5E1] hover:border-[#6D28D9] rounded-3xl p-10 text-center cursor-pointer transition-colors"
        >
            <Upload className="w-10 h-10 mx-auto text-[#6D28D9] mb-3 rounded-full bg-[#EADDFF] p-2" />
            <p className="font-medium">Kéo thả ảnh vào đây hoặc nhấn để chọn</p>
            <p className="text-sm text-[#6B7280] mt-1">Hỗ trợ JPG, PNG, HEIC. Tối đa 6 ảnh.</p>
            
            <label htmlFor="photo-upload" className="sr-only">
                Chọn ảnh để tải lên
            </label>
            <input
                id="photo-upload"
                type="file"
                multiple
                accept="image/*"
                className="sr-only"
                title="Tải lên ảnh"
                aria-label="Tải lên ảnh"
                onChange={(e) => onFileSelect(e.target.files)}
            />
        </div>
    );
}