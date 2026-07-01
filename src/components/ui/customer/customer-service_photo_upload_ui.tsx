'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getServicePackageBySlug } from '../../../data/servicePackages';

// Components đã tách
import BookingHeader from '../../common/header/customer-booking_header';
import BookingStepper from '../../common/stepper/booking_stepper';
import BookingFooter from '../../common/footer/booking-footer';

import ImportantNote from '../../../components/layout/customer/booking/service-photo-upload/important-note';
import RequiredCategories from '../../../components/layout/customer/booking/service-photo-upload/required-categories';
import PhotoUploadZone from '../../../components/layout/customer/booking/service-photo-upload/photo-upload-zone';
import UploadedPhotosGrid from '../../../components/layout/customer/booking/service-photo-upload/uploaded-photos-grid';
import PlantConditionNote from '../../../components/layout/customer/booking/service-photo-upload/plant-condition-note';
import BookingOrderSummary from '../../../components/layout/customer/booking/service-photo-upload/booking-order-summary';
interface UploadedPhoto {
    id: number;
    file: File;
    preview: string;
    category?: string;
}

export default function ServicePhotoUploadUI() {
    const searchParams = useSearchParams();
    const packageSlug = searchParams.get('package') || '';
    const service = packageSlug ? getServicePackageBySlug(packageSlug) : null;

    const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
    const [note, setNote] = useState('');

    const requiredCategories = [
        'Toàn cảnh', 'Lá', 'Rễ', 'Thân', 'Hoa (nếu có)', 'Vấn đề bất thường'
    ];

    const completedCategories = [...new Set(
        photos.map(p => p.category).filter((c): c is string => typeof c === 'string')
    )];

    const handleFileUpload = (files: FileList | null) => {
        if (!files) return;

        Array.from(files).forEach((file) => {
            const category = prompt(
                `Chọn category cho ảnh "${file.name}":\n\n` +
                requiredCategories.map((c, i) => `${i + 1}. ${c}`).join('\n')
            );

            if (category && requiredCategories.includes(category)) {
                const newPhoto: UploadedPhoto = {
                    id: Date.now(),
                    file,
                    preview: URL.createObjectURL(file),
                    category,
                };
                setPhotos(prev => [...prev, newPhoto].slice(0, 6));
            }
        });
    };

    const removePhoto = (id: number) => setPhotos(prev => prev.filter(p => p.id !== id));
    const removeAllPhotos = () => setPhotos([]);

    if (!service) return <div className="p-8 text-red-500">Không tìm thấy gói dịch vụ</div>;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <BookingHeader />
            <div className="max-w-6xl mx-auto px-6 py-8">
                <BookingStepper currentStep={3} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">Tải ảnh hiện trạng cây</h2>
                            <p className="text-[#6B7280] mt-1">
                                Vui lòng tải ảnh hiện trạng cây trước khi bàn giao để nhà vườn đánh giá và lên phương án chăm sóc phù hợp.
                            </p>
                        </div>

                        <ImportantNote />

                        <RequiredCategories 
                            requiredCategories={requiredCategories} 
                            completedCategories={completedCategories} 
                        />

                        <PhotoUploadZone onFileSelect={handleFileUpload} />

                        <UploadedPhotosGrid 
                            photos={photos} 
                            onRemove={removePhoto} 
                            onRemoveAll={removeAllPhotos} 
                        />

                        <PlantConditionNote value={note} onChange={setNote} />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5">
                        <BookingOrderSummary service={service} packageSlug={packageSlug} />
                    </div>
                </div>

                <BookingFooter 
                    backHref={`/customer-service-packages/booking?package=${packageSlug}`}
                    nextHref={`/customer-service-packages/booking/schedule?package=${packageSlug}`}
                />
            </div>
        </div>
    );
}