'use client';

export default function BookingRequestsCard() {
    const requests = [
        {
            id: 1,
            name: "Nguyen Van A",
            avatar: "https://i.pravatar.cc/40?img=47",
            package: "Gói Phục hồi cơ bản",
            duration: "3 tháng",
            type: "package",
        },
        {
            id: 2,
            name: "Trần Thị B",
            avatar: "https://i.pravatar.cc/40?img=28",
            package: "Tư vấn tại vườn",
            duration: "1 buổi",
            type: "consult",
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-full max-w-[800px]">

            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6D28D9] flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className="text-base font-semibold text-[#111827]">Yêu cầu đặt lịch mới</h3>
                </div>

                {/* Badge */}
                <div className="bg-[#6D28D9] text-white text-xs font-medium px-3 py-1 rounded-full">
                    2 Mới
                </div>
            </div>

            {/* Danh sách yêu cầu */}
            <div className="divide-y divide-gray-200">
                {requests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between py-4">

                        {/* Avatar + Thông tin */}
                        <div className="flex items-center gap-3">
                            <img
                                src={request.avatar}
                                alt={request.name}
                                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                            />
                            <div>
                                <p className="font-medium text-[#111827] text-sm">{request.name}</p>
                                <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
                                    {/* Icon SVG gốc */}
                                    {request.type === "package" ? (
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                                            <path d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                                            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                    {request.package} • {request.duration}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => console.log('Từ chối', request.id)}
                                className="px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                            >
                                Từ chối
                            </button>
                            <button
                                onClick={() => console.log('Chấp nhận', request.id)}
                                className="px-4 py-1.5 text-sm font-medium text-white bg-[#6D28D9] rounded-lg hover:bg-[#5B21B6] transition"
                            >
                                Chấp nhận
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}