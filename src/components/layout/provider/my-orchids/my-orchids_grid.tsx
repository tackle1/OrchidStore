import React from 'react';
import MyOrchidsCard, { OrchidData } from './my-orchids_card';

export const MY_ORCHIDS_DATA: OrchidData[] = [
    {
        id: "LC-8827",
        name: "5CT Phú Thọ Đột Biến",
        image: "/assets/images/portfolio-1.png",
        customer: "Vũ Văn G",
        service: "Phục hồi chuyên sâu",
        startDate: "12/10/2023",
        status: { label: "Đang chăm sóc", bgColor: "bg-[#E0E7FF]", textColor: "text-[#4F46E5]", dotColor: "bg-[#4F46E5]" }
    },
    {
        id: "LC-8824",
        name: "Lan Ngọc Điểm Trắng",
        image: "/assets/images/portfolio-2.png",
        customer: "Phạm Thị D",
        service: "Chăm sóc định kỳ",
        startDate: "15/10/2023",
        status: { label: "Khỏe mạnh", bgColor: "bg-[#DCFCE7]", textColor: "text-[#16A34A]", dotColor: "bg-[#16A34A]" }
    },
    {
        id: "LC-8829",
        name: "Hồ Điệp Đột Biến",
        image: "/assets/images/portfolio-2.png",
        customer: "Lý Văn I",
        service: "Kích mầm hoa",
        startDate: "20/10/2023",
        status: { label: "Cần theo dõi", bgColor: "bg-[#FEF9C3]", textColor: "text-[#CA8A04]", dotColor: "bg-[#CA8A04]" }
    },
    {
        id: "LC-8826",
        name: "Lan Kiếm Xanh",
        image: "/assets/images/portfolio-1.png",
        customer: "Đỗ Thị F",
        service: "Phục hồi rễ",
        startDate: "05/11/2023",
        status: { label: "Tranh chấp", bgColor: "bg-[#FFE4E6]", textColor: "text-[#E11D48]", dotColor: "bg-[#E11D48]" }
    },
    {
        id: "LC-8830",
        name: "Phi Điệp Tím",
        image: "/assets/images/portfolio-2.png",
        customer: "Bùi Thị K",
        service: "Trị nấm lá",
        startDate: "08/11/2023",
        status: { label: "Đang chăm sóc", bgColor: "bg-[#E0E7FF]", textColor: "text-[#4F46E5]", dotColor: "bg-[#4F46E5]" }
    },
    {
        id: "LC-8821",
        name: "Lan Vanda Đỏ",
        image: "/assets/images/orchid-red-vanda.png",
        customer: "Nguyễn Văn A",
        service: "Chăm sóc định kỳ",
        startDate: "10/11/2023",
        status: { label: "Khỏe mạnh", bgColor: "bg-[#DCFCE7]", textColor: "text-[#16A34A]", dotColor: "bg-[#16A34A]" }
    },
];

export default function MyOrchidsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MY_ORCHIDS_DATA.map((orchid) => (
                <MyOrchidsCard key={orchid.id} orchid={orchid} />
            ))}
        </div>
    );
}
