'use client';

import { X } from 'lucide-react';

interface UploadedPhoto {
    id: number;
    preview: string;
    category?: string;
}

interface UploadedPhotosGridProps {
    photos: UploadedPhoto[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
}

export default function UploadedPhotosGrid({ photos, onRemove, onRemoveAll }: UploadedPhotosGridProps) {
    if (photos.length === 0) return null;

    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <p className="font-medium">Ảnh đã tải lên ({photos.length}/6)</p>
                <button
                    type="button"
                    onClick={onRemoveAll}
                    className="text-sm text-red-500 flex items-center gap-1 hover:text-red-600"
                >
                    <X className="w-4 h-4" /> Xóa tất cả
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                        <img
                            src={photo.preview}
                            alt="Uploaded plant"
                            className="w-full aspect-square object-cover rounded-2xl border"
                        />

                        {/* Badge Category */}
                        {photo.category && (
                            <div className="absolute top-2 left-2 bg-black/90 text-white text-xs font-medium px-2.5 py-0.5 rounded-sm shadow">
                                {photo.category}
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={() => onRemove(photo.id)}
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition"
                            title="Xóa ảnh"
                            aria-label="Xóa ảnh"
                        >
                            <X className="w-4 h-4 text-red-500" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}