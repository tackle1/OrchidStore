'use client';

import { Leaf, ShieldCheck, FlaskConical, Thermometer } from 'lucide-react';

export default function ServiceIncluded() {
    const services = [
        {
            icon: <Leaf className="w-5 h-5 text-[#6D28D9]" />,
            title: "Thay giá thể ngoại nhập",
            desc: "Sử dụng vỏ thông Orchiata New Zealand kết hợp dớn Chile cao cấp, thoáng khí và giữ ẩm tốt",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-[#6D28D9]" />,
            title: "Kiểm soát nấm bệnh",
            desc: "Cách ly và xử lý triệt để các mầm bệnh bằng sinh phẩm an toàn.",
        },
        {
            icon: <FlaskConical className="w-5 h-5 text-[#6D28D9]" />,
            title: "Dinh dưỡng chuyên sâu",
            desc: "Phác đồ phân bón lá và rễ kích thích phục hồi 2 lần/tuần.",
        },
        {
            icon: <Thermometer className="w-5 h-5 text-[#6D28D9]" />,
            title: "Môi trường chuẩn",
            desc: "Nuôi dưỡng trong nhà màng kiểm soát độ ẩm 70-80%, nhiệt độ 25°C.",
        },
    ];

    return (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-5">Dịch vụ bao gồm</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white border border-[#E5E7EB] rounded-2xl">
                        <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#F3E8FF] flex items-center justify-center">
                            {service.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#1F2937] mb-1">{service.title}</h4>
                            <p className="text-sm text-[#6B7280]">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}