'use client';

import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import CustomerServicePackageHeader from '../../common/header/customer-service-packages_header';
import ServicePackageCard from '../../layout/customer/service-package/service-package_card';
import FeaturedServiceCard from '../../layout/customer/service-package/featured-service_card';
import RecommendationFooter from '../../common/footer/recommendation-footer';
export default function CustomerServicePackageUI() {
    const handleFilter = () => {
        console.log("Mở bộ lọc dịch vụ");
    };

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="p-6">
                    <CustomerServicePackageHeader onFilterClick={handleFilter} />

                    {/* ========== HÀNG 1: Featured (Lớn) + 1 Card bên phải ========== */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Card Featured - Chiếm nhiều không gian hơn */}
                        <div className="lg:col-span-8">
                            <FeaturedServiceCard
                                image="assets/images/orchid-white.jpg"
                                title="Chăm sóc lan Hồ Điệp"
                                description="Giải pháp toàn diện dành riêng cho dòng lan Hồ Điệp cao cấp. Bao gồm kích rễ, dưỡng lá, và thúc đẩy ra hoa hiệu quả..."
                                serviceCount={8}
                                href="/customer-service-packages/service-discovery"
                            />
                        </div>

                        {/* Card bên phải (cao hơn) */}
                        <div className="lg:col-span-4">
                            <ServicePackageCard
                                image="assets/images/green-house.jpg"
                                title="Chăm sóc định kỳ"
                                description="Duy trì sức khỏe và độ ẩm tối ưu hàng tuần. Phù hợp cho những bộ sưu tập lan đa dạng."
                                serviceCount={12}
                                href="/customer-service-packages/dinh-ky"
                            />
                        </div>
                    </div>

                    {/* ========== HÀNG 2: 3 cột card nhỏ ========== */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                        <ServicePackageCard
                            image="assets/images/orchid-rescue.jpg"
                            title="Cứu cây yếu"
                            description="Phác đồ điều trị chuyên sâu cho các cây bị nấm bệnh, suy dinh dưỡng hoặc héo úa."
                            serviceCount={5}
                            href="/customer-service-packages/orchid-rescue"
                        />

                        <ServicePackageCard
                            image="assets/images/re-pot_root-treatment.jpg"
                            title="Thay chậu & xử lý rễ"
                            description="Làm sạch, cắt tỉa rễ hư và thay mới giá thể cao cấp nhập khẩu."
                            serviceCount={6}
                            href="/customer-service-packages/re-pot&root-treatment"
                        />

                        <ServicePackageCard
                            image="assets/images/white-orchid-room.jpg"
                            title="Chăm sóc công tác"
                            description="Bảo dưỡng cảnh quan lan tại văn phòng, sảnh, không gian thương mại."
                            serviceCount={4}
                            href="/customer-service-packages/white-orchid-room"
                        />

                        {/* Thêm card thứ 4 nếu cần */}
                        <ServicePackageCard
                            image="assets/images/leaf.jpg"
                            title="Kiểm tra sức khỏe"
                            description="Chẩn đoán toàn diện, làm sạch bệnh và tư vấn chương trình chăm sóc."
                            serviceCount={3}
                            href="/customer-service-packages/check-health-tree"
                        />
                    </div>
                    <div className="px-6 py-6">
                        <RecommendationFooter />
                    </div>
                </div>
            </div>

        </div>
    );
}