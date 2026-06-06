
export interface Feedback {
    id: string;
    name: string;
    initial: string;
    rating: number;
    time: string;
    content: string;
}

export interface ServicePackage {
    id: string;
    title: string;
    provider: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    price: string;
    duration: string;
    reportFrequency: string;
    description: string;
    image: string;
    badge: string;
    feedbacks: Feedback[];
}

export const servicePackages: ServicePackage[] = [
    {
        id: "1",
        title: "Gói Chăm Sóc Toàn Diện Cho Lan Rừng Quý Hiếm",
        provider: "Vườn Lan Ngọc Châu",
        avatar: "https://i.pravatar.cc/150?img=47",
        rating: 4.9,
        reviewCount: 124,
        price: "1.500.000đ",
        duration: "6 Tháng",
        reportFrequency: "Báo cáo 2 tuần/lần",
        description: "Gói dịch vụ phục hồi toàn diện dành riêng cho các dòng lan đột biến quý hiếm...",
        image: "/assets/images/orchid-greenhouse.jpg",
        badge: "Lan Đột Biến",
        feedbacks: [
            {
                id: "f1",
                name: "Trần Tuấn Anh",
                initial: "T",
                rating: 5,
                time: "2 tuần trước",
                content: "Cây 5CT Phú Thọ của mình bị thối rễ nặng, gửi vào đây 2 tháng nay rễ mới đã đâm tua tủa, lá căng bóng trở lại. Quy trình chụp ảnh báo cáo hàng tuần rất yên tâm.",
            },
            {
                id: "f2",
                name: "Nguyễn Thị Lan",
                initial: "L",
                rating: 5,
                time: "1 tháng trước",
                content: "Nhà vườn chăm sóc rất tận tâm. Lan đột biến của mình sau 6 tuần đã ra được 3 mầm mới. Rất hài lòng với dịch vụ.",
            },
        ],
    },
    {
        id: "2",
        title: "Phục Hồi Sức Khỏe Lan Hồ Điệp Sau Tết",
        provider: "Chuyên gia: Trần Minh",
        avatar: "https://i.pravatar.cc/150?img=28",
        rating: 5.0,
        reviewCount: 86,
        price: "800.000đ",
        duration: "3 Tháng",
        reportFrequency: "Báo cáo hàng tuần",
        description: "Gói dịch vụ chuyên sâu giúp lan Hồ Điệp phục hồi sau Tết...",
        image: "/assets/images/orchid-expert.jpg",
        badge: "",
        feedbacks: [
            {
                id: "f3",
                name: "Hoàng Minh",
                initial: "H",
                rating: 5,
                time: "1 tháng trước",
                content: "Giá hơi cao so với mặt bằng chung nhưng tiền nào của nấy. Cơ sở vật chất rất tốt, nhân viên tư vấn nhiệt tình. Cây nhận về khỏe mạnh hẳn.",
            },
            {
                id: "f4",
                name: "Lê Thị Hương",
                initial: "H",
                rating: 4.5,
                time: "3 tuần trước",
                content: "Lan Hồ Điệp của mình sau Tết bị yếu, sau 1 tháng chăm sóc theo gói này đã ra hoa lại. Chất lượng dịch vụ rất ổn.",
            },
        ],
    },
];