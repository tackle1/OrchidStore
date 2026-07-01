'use client';

import { ClipboardList, FileText, Image as ImageIcon, Award } from 'lucide-react';

interface LegalDocumentsSectionProps {
    documents: any[];
}

export default function LegalDocumentsSection({ documents }: LegalDocumentsSectionProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-4.5 h-4.5 text-[#7C3AED]" />
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">Tài liệu pháp lý</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {documents.map((doc, index) => {
                    let IconComponent = FileText;
                    let iconColor = "text-[#7C3AED]";

                    if (doc.name.toLowerCase().includes("cccd")) {
                        IconComponent = ImageIcon;
                        iconColor = "text-[#6366F1]";
                    } else if (doc.name.toLowerCase().includes("chứng chỉ")) {
                        IconComponent = Award;
                        iconColor = "text-[#10B981]";
                    }

                    return (
                        <div
                            key={index}
                            className="bg-[#F8F5FF] hover:bg-[#F3E8FF] border border-[#E0D4FF] rounded-2xl p-6 flex flex-col items-center text-center transition cursor-pointer"
                        >
                            <div className="mb-4">
                                <IconComponent className={`w-10 h-10 ${iconColor}`} />
                            </div>
                            <p className="font-semibold text-[#374151] text-sm mb-1">{doc.name}</p>
                            <p className="text-xs text-[#6B7280]">{doc.type} • {doc.size}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}