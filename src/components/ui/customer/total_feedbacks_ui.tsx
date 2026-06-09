'use client';

import { useState } from 'react';
import FeedbackStats from '../../layout/customer/total-feedbacks/feedback-stats';
import FeedbackFilterBar from '../../layout/customer/total-feedbacks/feedback-filter_bar';
import ReviewCard from '../../layout/customer/total-feedbacks/review_card';
import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';

// ==================== DỮ LIỆU MẪU ====================
const reviewsData: Array<{
    id: number;
    avatar: string;
    name: string;
    rating: number;
    date: string;
    service: string;
    serviceColor: 'green' | 'purple';
    content: string;
    images?: string[];
    badge: string;
}> = [
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=47",
        name: "Nguyen Trần Lan Anh",
        rating: 5,
        date: "12/10/2023",
        service: "Gói chăm sóc Phục hồi chuyên sâu",
        serviceColor: "green",
        content: "Dịch vụ rất tuyệt vời. Cây Lan Hồ Điệp của tôi bị úng rễ khá nặng, nhưng sau 2 tuần gửi tại nhà vườn, cây đã bắt đầu ra rễ non và lá cũng căng trở lại...",
        images: ["/assets/images/orchid1.jpg", "/assets/images/orchid2.jpg"],
        badge: "Đã mua dịch vụ",
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?img=28",
        name: "Trần Tuấn Minh",
        rating: 4,
        date: "05/10/2023",
        service: "Ký gửi chăm sóc định kỳ (3 tháng)",
        serviceColor: "purple",
        content: "Nhà vườn chăm sóc kỹ lưỡng, giá thì sạch sẽ. Tuy nhiên thời gian phản hồi tin nhắn đôi khi hơi chậm vào cuối tuần...",
        images: [],
        badge: "Đã mua dịch vụ",
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?img=32",
        name: "Lê Thị Hương",
        rating: 5,
        date: "01/10/2023",
        service: "Gói Cấp cứu & Phục hồi",
        serviceColor: "green",
        content: "Nhà vườn phản hồi rất nhanh. Cây lan của mình bị bệnh nặng nhưng sau 3 tuần đã hồi phục khá tốt.",
        badge: "Đã mua dịch vụ",
    },
];

export default function TotalFeedbacksUI() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

    // ==================== XỬ LÝ FILTER + SORT ====================
    let filteredReviews = [...reviewsData];

    // Filter
    if (activeFilter === '5') {
        filteredReviews = filteredReviews.filter(r => r.rating === 5);
    } else if (activeFilter === '4') {
        filteredReviews = filteredReviews.filter(r => r.rating === 4);
    } else if (activeFilter === 'with-image') {
        filteredReviews = filteredReviews.filter(r => r.images && r.images.length > 0);
    }

    // Sort theo ngày
    filteredReviews.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            <CustomerSidebar />

            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="max-w-5xl mx-auto p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold">Đánh giá và Phản hồi</h1>
                        <p className="text-[#6B7280]">Tổng hợp ý kiến từ khách hàng về chất lượng dịch vụ.</p>
                    </div>

                    <FeedbackStats averageRating={4.8} totalReviews={reviewsData.length} />

                    <FeedbackFilterBar
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                        sortOrder={sortOrder}
                        onSortChange={setSortOrder}
                    />

                    {/* Danh sách Review sau khi lọc */}
                    <div className="mt-6 space-y-4">
                        {filteredReviews.length > 0 ? (
                            filteredReviews.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    avatar={review.avatar}
                                    name={review.name}
                                    rating={review.rating}
                                    date={review.date}
                                    service={review.service}
                                    content={review.content}
                                    images={review.images}
                                    badge={review.badge}
                                    serviceColor={review.serviceColor}   // ← Đã thêm
                                />
                            ))
                        ) : (
                            <div className="text-center py-10 text-[#6B7280]">
                                Không tìm thấy đánh giá nào phù hợp với bộ lọc.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}