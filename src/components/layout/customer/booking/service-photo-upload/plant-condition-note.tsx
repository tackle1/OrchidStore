'use client';

interface PlantConditionNoteProps {
    value: string;
    onChange: (value: string) => void;
}

export default function PlantConditionNote({ value, onChange }: PlantConditionNoteProps) {
    return (
        <div>
            <label className="block font-medium mb-2">Ghi chú tình trạng cây (Tùy chọn)</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ví dụ: Cây đang bị vàng lá ở phần gốc..."
                className="w-full border border-[#E5E7EB] rounded-2xl p-4 min-h-[100px] resize-y"
            />
        </div>
    );
}