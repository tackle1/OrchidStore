export default function QuickTags() {
    const tags = [
        "Chăm sóc định kỳ",
        "Cứu cây yếu",
        "Thay chậu",
        "Xử lý rễ",
        "Chăm sóc công tác",
    ];

    return (
        <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
                <button
                    key={tag}
                    className="px-4 py-2 bg-[#E0E7FF] text-[#131B2E] text-sm font-medium rounded-full hover:bg-[#C7D2FE] transition-colors"
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
