'use client';

interface ServiceStat {
  name: string;
  count: number;
  percentage: number;
  bgClass: string;
  widthClass: string;
}

const serviceStats: ServiceStat[] = [
  {
    name: 'Chăm sóc',
    count: 1240,
    percentage: 45,
    bgClass: 'bg-purple-700',
    widthClass: 'w-[45%]',
  },
  {
    name: 'Tư vấn',
    count: 680,
    percentage: 25,
    bgClass: 'bg-purple-500',
    widthClass: 'w-[25%]',
  },
  {
    name: 'Thiết kế',
    count: 420,
    percentage: 15,
    bgClass: 'bg-purple-300',
    widthClass: 'w-[15%]',
  },
  {
    name: 'Bảo dưỡng',
    count: 310,
    percentage: 11,
    bgClass: 'bg-indigo-200',
    widthClass: 'w-[11%]',
  },
  {
    name: 'Khác',
    count: 192,
    percentage: 7,
    bgClass: 'bg-indigo-100',
    widthClass: 'w-[7%]',
  },
];

export default function ServiceBookingStats() {
  const totalBookings = serviceStats.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0ECF7]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-[#111827]">
          Lượng đặt lịch theo dịch vụ
        </h3>
        <button className="text-sm text-[#6D28D9] hover:underline font-medium">
          Xem tất cả
        </button>
      </div>

      {/* Stats List */}
      <div className="space-y-4 mb-8">
        {serviceStats.map((service, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-[#374151]">
                {service.name}
              </span>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-[#111827]">
                  {service.count.toLocaleString('vi-VN')}
                </span>
                <span className="text-[#6B7280]">({service.percentage}%)</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#F3F4F6] rounded-full h-2.5 overflow-hidden">
              <div
                className={`${service.bgClass} ${service.widthClass} h-2.5 rounded-full transition-all duration-500`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Categories */}
      <div className="pt-4 border-t border-[#F3F4F6]">
        <div className="flex items-center justify-between text-sm text-[#6B7280]">
          {serviceStats.map((service, index) => (
            <span 
              key={index} 
              className="cursor-pointer hover:text-[#6D28D9] transition-colors"
            >
              {service.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}