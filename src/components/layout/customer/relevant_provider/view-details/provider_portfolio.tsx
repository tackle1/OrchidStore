'use client';

import { useState } from 'react';
import { X, ArrowRight, Image } from 'lucide-react';

interface ProviderPortfolioProps {
    portfolio: string[];
    name: string;
}

export default function ProviderPortfolio({ portfolio, name }: ProviderPortfolioProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const mainImage = portfolio[0];
    const smallImages = portfolio.slice(1, 4); // Lấy 5 ảnh nhỏ
    const remainingCount = portfolio.length - 4;

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div className=' mt-5'>
            {/* Header */}
            <h2 className="flex items-start text-xl font-semibold text-[#1F2937] mb-5 ml-2">Portfolio Nổi bật</h2>
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">

                <div className="flex items-center justify-between mb-4">

                    <button
                        onClick={() => openModal(0)}
                        className="text-[#6D28D9] text-sm font-medium hover:underline flex items-center gap-1"
                    >
                        Xem tất cả
                        <ArrowRight className='w-4 h-4' />
                    </button>
                </div>

                {/* Grid Portfolio */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Ảnh lớn bên trái */}
                    <div
                        className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden cursor-pointer"
                        onClick={() => openModal(0)}
                    >
                        <img
                            src={mainImage}
                            alt={`${name} portfolio`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Các ảnh nhỏ bên phải */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        {smallImages.map((img, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => openModal(index + 1)}
                            >
                                <img
                                    src={img}
                                    alt={`${name} portfolio ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}

                        {/* Box +12 Ảnh */}
                        {remainingCount > 0 && (
                            <div
                                onClick={() => openModal(4)}
                                className="aspect-square rounded-2xl bg-[#F3E8FF] flex flex-col items-center justify-center cursor-pointer hover:bg-[#EDE4FF] transition-colors"
                            >   <Image className="text-[#6D28D9] w-8 h-8" />
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-[#6D28D9] text-sm font-semibold">+{remainingCount}</span>
                                    <span className="text-[#6D28D9] text-sm font-medium">Ảnh</span>
                                </div>

                            </div>
                        )}
                    </div>
                </div>

                {/* Modal Xem tất cả ảnh */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative">

                            {/* Header Modal */}
                            <div className="flex items-center justify-between p-5 border-b">
                                <h3 className="font-semibold text-lg">Portfolio của {name}</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-[#6B7280] hover:text-black"
                                    title="Close modal"
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nội dung ảnh trong modal */}
                            <div className="p-6 overflow-auto max-h-[75vh]">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {portfolio.map((img, index) => (
                                        <div
                                            key={index}
                                            className="aspect-square rounded-2xl overflow-hidden border border-[#E5E7EB]"
                                        >
                                            <img
                                                src={img}
                                                alt={`Portfolio ${index}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}