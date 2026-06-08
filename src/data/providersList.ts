// src/data/providers.ts

import { ServicePackage } from "./servicePackages";

export interface Review {
    id: string;
    initial: string;
    name: string;
    time: string;
    service: string;
    rating: number;
    content: string;
}

export interface Provider {
    id: string;           // Giữ lại để dùng cho database sau này
    slug: string;         // Dùng cho URL (ví dụ: huong-lan-vien)
    name: string;
    type: "Nhà vườn" | "Chuyên gia";
    title: string;
    avatar: string;
    coverImage?: string;
    rating: number;
    reviewCount: number;
    completedOrders: number;
    location: string;
    description: string;
    about: string;
    serviceCount: number;
    isVerified: boolean;
    achievements?: {           // ← Thêm phần này
        id: string;
        title: string;
        icon?: 'award' | 'leaf' | 'medal' | 'certificate'; // để map icon sau này
    }[];
    portfolio: string[];
    reviews: Review[];
    services?: {
        id: string;
        title: string;
        description: string;
        price: string;
        isPopular?: boolean;
        icon: 'shield' | 'crown' | 'star';
    }[];
}

// ==================== DỮ LIỆU MẪU ====================
export const providers: Provider[] = [
    {
        id: "prov_001",
        slug: "huong-lan-vien",                    // ← Slug đẹp
        name: "Hương Lan Viên",
        type: "Nhà vườn",
        title: "Chuyên gia chăm sóc & Phục hồi Lan Đột biến",
        avatar: "/assets/images/huong-lan-vien.png",
        coverImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800",
        rating: 4.9,
        completedOrders: 120,
        reviewCount: 75,
        location: "Quận 7, TP. Hồ Chí Minh",
        description: "Nhà vườn chuyên chăm sóc lan Hồ Điệp và lan rừng quý hiếm với hơn 12 năm kinh nghiệm.",
        about: "Với hơn 15 năm kinh nghiệm trong lĩnh vực sinh vật cảnh, Hương Lan Viên tự hào là một trong những cơ sở chăm sóc lan uy tín hàng đầu miền Bắc. Chúng tôi áp dụng quy trình chăm sóc chuẩn kỹ thuật kết hợp với mô hình theo dõi vi khí hậu hiện đại, đảm bảo mỗi giò lan đều được phục hồi sinh lực, ra rễ khỏe mạnh và cho hoa đúng chuẩn." +
            "Đội ngũ kỹ thuật viên của chúng tôi gồm những người có nhiều năm kinh nghiệm thực tế cùng chứng chỉ nghề nghiệp chuyên môn. Chúng tôi không chỉ tập trung vào việc chăm sóc cây mà còn chú trọng đến việc giáo dục và đồng hành cùng khách hàng trong suốt quá trình." +
            "Hương Lan Viên cam kết bảo hiểm rủi ro cho mọi dịch vụ chăm sóc. Mọi trường hợp cây gặp vấn đề ngoài ý muốn trong quá trình ký gửi sẽ được chúng tôi hỗ trợ xử lý và bồi thường theo quy định minh bạch. Uy tín và chất lượng là nền tảng để chúng tôi xây dựng mối quan hệ lâu dài với hàng nghìn khách hàng trên toàn quốc.",
        serviceCount: 8,
        isVerified: true,
        achievements: [
            {
                id: "ach_1",
                title: "Nghệ nhân Sinh vật cảnh VN (2020)",
                icon: "award"
            },
            {
                id: "ach_2",
                title: "Quy trình Chăm sóc Sinh học Chuẩn ISO",
                icon: "leaf"
            }
        ],
        portfolio: [
            "/assets/images/portfolio-big-image-bg.png",
            "/assets/images/portfolio-sm-1-bg.png",
            "/assets/images/portfolio-sm-2-bg.png",
            "/assets/images/portfolio-sm-3-bg.png",
            "/assets/images/portfolio-sm-4-bg.png",
        ],
        reviews: [
            {
                id: "r1",
                initial: "T",
                name: "Trần V. Khang",
                time: "2 ngày trước",
                service: "Gói Chăm sóc phục hồi",
                rating: 5,
                content: "Rất chuyên nghiệp! Giờ Phủ Thọ của mình bị thối nhũng rõ rệt, giao cho vườn 1 tháng mà giờ đã nhú xanh mướt, lá căng tròn lại. Quy trình báo cáo hàng tuần rất rõ ràng.",
            },
            {
                id: "r2",
                initial: "L",
                name: "Lê Thị Mai",
                time: "1 tuần trước",
                service: "Gói Ký gửi chăm sóc VIP",
                rating: 5,
                content: "Nhà vườn uy tín, cơ sở vật chất cực tốt. Mình hoàn toàn yên tâm khi gửi những chậu lan giá trị cao tại đây. Sẽ tiếp tục ủng hộ.",
            },
            {
                id: "r3",
                initial: "H",
                name: "Hoàng Minh",
                time: "1 tháng trước",
                service: "Gói Chăm sóc định kỳ",
                rating: 4.5,
                content: "Giá hơi cao so với mặt bằng chung nhưng tiền nào của nấy. Cơ sở vật chất rất tốt, nhân viên tư vấn nhiệt tình. Cây nhận về khỏe mạnh hẳn.",
            },
        ],
        // ==================== DỊCH VỤ ====================
        services: [
            {
                id: "svc_001",
                title: "Gói Cấp cứu & Phục hồi",
                description: "Xử lý nấm bệnh, thối nhũng, kích rễ sinh học. Theo dõi đặc biệt trong lồng kính vi khí hậu.",
                price: "500.000đ/tháng",
                isPopular: true,
                icon: "shield"
            },
            {
                id: "svc_002",
                title: "Ký gửi Chăm sóc VIP",
                description: "Bảo hiểm 100% giá trị cây. Bán nhận ảnh, báo cáo hình ảnh tự động mỗi ngày qua app.",
                price: "1.200.000đ/tháng",
                icon: "crown"
            },
            {
                id: "svc_003",
                title: "Kích mầm & Kích hoa",
                description: "Sử dụng chế phẩm sinh học an toàn, kích mầm, kích hoa chuẩn cho các dịp lễ Tết.",
                price: "Liên hệ báo giá",
                icon: "star"
            }
        ]
    },

    {
        id: "prov_002",
        slug: "chuyen-gia-lan-minh",
        name: "Chuyên gia Lan Minh",
        type: "Chuyên gia",
        title: "Chuyên gia phục hồi lan đột biến",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
        rating: 4.8,
        completedOrders: 92,
        reviewCount: 87,
        location: "Quận 2, TP. Hồ Chí Minh",
        description: "Chuyên gia phục hồi lan đột biến và lan bị bệnh nặng với hơn 8 năm kinh nghiệm.",
        about: `Tôi là kỹ sư nông nghiệp chuyên sâu về bệnh lý lan với hơn 8 năm kinh nghiệm phục hồi lan đột biến và lan bị bệnh nặng. 

Đã hỗ trợ thành công hơn 300 chậu lan đột biến trên toàn quốc, bao gồm nhiều trường hợp bị nấm nặng và suy kiệt nghiêm trọng. Tôi tập trung vào việc phân tích nguyên nhân gốc rễ và xây dựng phác đồ phục hồi cá nhân hóa, kết hợp theo dõi sát sao qua hình ảnh và báo cáo định kỳ.

Với quan điểm mỗi cây lan đều có cơ hội hồi phục, tôi luôn kiên trì tìm giải pháp ngay cả với những trường hợp khó khăn nhất.`,
        serviceCount: 5,
        isVerified: true,
        achievements: [
            {
                id: "ach_3",
                title: "Chứng chỉ Phục hồi Lan Đột biến Nâng cao",
                icon: "certificate"
            },
            {
                id: "ach_4",
                title: "Top 10 Chuyên gia Lan Đột biến Miền Bắc 2024",
                icon: "award"
            }
        ],
        portfolio: [
            "/assets/images/portfolio-big-image-bg.png",
            "/assets/images/portfolio-sm-1-bg.png",
            "/assets/images/portfolio-sm-2-bg.png",
            "/assets/images/portfolio-sm-3-bg.png",
            "/assets/images/portfolio-sm-4-bg.png",
        ],
        reviews: [
            {
                id: "r4",
                initial: "P",
                name: "Phạm Quốc Bảo",
                time: "3 ngày trước",
                service: "Gói Phục hồi lan đột biến",
                rating: 5,
                content: "Lan đột biến của mình bị nấm nặng, nhiều người bảo bỏ. Nhờ anh Minh mà giờ cây đã ra lá mới và mầm non. Cảm ơn anh rất nhiều!",
            },
        ],

        services: [
            {
                id: "svc_004",
                title: "Phục hồi Lan Đột biến Nặng",
                description: "Điều trị chuyên sâu cho lan đột biến bị nấm, suy kiệt, thối rễ nặng.",
                price: "800.000đ/lần",
                icon: "shield"
            },
            {
                id: "svc_005",
                title: "Tư vấn & Kiểm tra Tại vườn",
                description: "Khám trực tiếp + báo cáo chi tiết + phác đồ điều trị.",
                price: "350.000đ/lần",
                icon: "star"
            }
        ]
    },
];

// ==================== HELPER FUNCTIONS ====================

// Lấy provider theo slug (khuyến nghị dùng cho URL)
export const getProviderBySlug = (slug: string): Provider | undefined => {
    return providers.find((p) => p.slug === slug);
};

// Lấy provider theo ID (dùng cho database)
export const getProviderById = (id: string): Provider | undefined => {
    return providers.find((p) => p.id === id);
};