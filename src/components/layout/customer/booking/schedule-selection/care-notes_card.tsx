'use client';

interface CareNotesCardProps {
    reportFrequency: string;
    note: string;
    onNoteChange: (value: string) => void;
}

export default function CareNotesCard({ reportFrequency, note, onNoteChange }: CareNotesCardProps) {
    const quickTags = [
        "Xử lý sâu bệnh gấp",
        "Chỉ dưỡng lá và rễ",
        "Chụp ảnh chi tiết rễ mỗi lần",
        "Tránh tưới quá nhiều nước",
    ];

    const handleAddTag = (tag: string) => {
        const currentNote = note.trim();
        const newNote = currentNote ? `${currentNote}\n- ${tag}` : `- ${tag}`;
        onNoteChange(newNote);
    };

    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            <h3 className="font-semibold mb-4">Thông tin chăm sóc & Yêu cầu đặc biệt</h3>

            {/* Tần suất báo cáo */}
            <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#374151]">Tần suất báo cáo</span>
                    <span className="text-sm font-semibold text-[#6D28D9]">{reportFrequency}</span>
                </div>
                <p className="text-xs text-[#6B7280]">
                    Nhà vườn sẽ gửi báo cáo định kỳ về tình trạng cây theo tần suất của gói.
                </p>
            </div>

            {/* Yêu cầu đặc biệt */}
            <div>
                <label className="block text-sm font-medium mb-2">
                    Yêu cầu đặc biệt cho nhà vườn (Tùy chọn)
                </label>
                <textarea
                    value={note}
                    onChange={(e) => onNoteChange(e.target.value)}
                    placeholder="Ví dụ: Cây đang bị vàng lá nặng, ưu tiên xử lý nấm bệnh trước..."
                    className="w-full border border-[#E5E7EB] rounded-2xl px-4 py-3 min-h-[100px] resize-y text-sm"
                />

                {/* Quick Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {quickTags.map((tag, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleAddTag(tag)}
                            className="px-3 py-1 text-xs bg-[#F3E8FF] text-[#6D28D9] rounded-full hover:bg-[#E0D1FF] transition-colors"
                        >
                            + {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}