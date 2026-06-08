'use client';

import { useState } from 'react';
import { providers } from '../../../data/providersList';
import ProviderCard from '../../layout/customer/relevant_provider/provider_card';
import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import { Search, X, ChevronDown } from 'lucide-react';

type FilterType = 'Tất cả' | 'Nhà vườn' | 'Chuyên gia';
type SortType = 'default' | 'rating-high' | 'service-high' | 'review-high';

export default function ProvidersListUI() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<FilterType>('Tất cả');
    const [sortType, setSortType] = useState<SortType>('default');

    // Lọc theo tên, địa điểm và loại
    let filteredProviders = providers.filter((provider) => {
        const matchSearch =
            provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchType =
            filterType === 'Tất cả' || provider.type === filterType;

        return matchSearch && matchType;
    });

    // Sắp xếp
    if (sortType === 'rating-high') {
        filteredProviders = [...filteredProviders].sort((a, b) => b.rating - a.rating);
    } else if (sortType === 'service-high') {
        filteredProviders = [...filteredProviders].sort((a, b) => b.serviceCount - a.serviceCount);
    } else if (sortType === 'review-high') {
        filteredProviders = [...filteredProviders].sort((a, b) => b.reviewCount - a.reviewCount);
    }

    const clearSearch = () => setSearchTerm('');

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden ">
            <CustomerSidebar />

            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="max-w-7xl mx-auto p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-[#1F2937]">Nhà vườn liên kết</h1>
                        <p className="text-[#6B7280] mt-2">
                            Các nhà vườn và chuyên gia đã được xác thực trên nền tảng LanCare Hub
                        </p>
                    </div>

                    {/* Search + Filter + Sort */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm nhà vườn theo tên hoặc khu vực..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-10 py-3 border border-[#E5E7EB] rounded-2xl 
                                           focus:outline-none focus:border-[#6D28D9] transition-colors"
                            />
                            {searchTerm && (
                                <button
                                    onClick={clearSearch}
                                    aria-label="Xóa tìm kiếm"
                                    title="Xóa tìm kiếm"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Filter theo loại */}
                        <div className="flex gap-2">
                            {(['Tất cả', 'Nhà vườn', 'Chuyên gia'] as FilterType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilterType(type)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterType === type
                                        ? 'bg-[#6D28D9] text-white'
                                        : 'bg-white border border-[#E5E7EB] text-[#4B5563] hover:bg-[#F8F7FA]'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-[240px]">
                            <select
                                aria-label="Sắp xếp"
                                title="Sắp xếp"
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value as SortType)}
                                className="w-full appearance-none pl-10 pr-4 py-3 border border-[#E5E7EB] 
                                rounded-2xl text-sm focus:outline-none focus:border-[#6D28D9] 
                                bg-white cursor-pointer"
                            >
                                <option value="default">Sắp xếp: Mặc định</option>

                                {/* Sửa lại label cho đúng với logic sort */}
                                <option value="rating-high">Rating cao nhất</option>
                                <option value="review-high">Số lượt đánh giá nhiều nhất</option>
                                <option value="service-high">Số dịch vụ nhiều nhất</option>
                            </select>

                            {/* Icon mũi tên bên trái */}
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]">
                                <ChevronDown className="w-5 h-5 text-[#6D28D9]" />
                            </div>
                        </div>
                    </div>

                    {/* Danh sách nhà vườn */}
                    {filteredProviders.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProviders.map((provider) => (
                                <ProviderCard
                                    key={provider.id}
                                    slug={provider.slug}
                                    name={provider.name}
                                    avatar={provider.avatar}
                                    rating={provider.rating}
                                    reviewCount={provider.reviewCount}
                                    location={provider.location}
                                    description={provider.description}
                                    serviceCount={provider.serviceCount}
                                    isVerified={provider.isVerified}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-[#6B7280]">Không tìm thấy nhà vườn nào phù hợp.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}