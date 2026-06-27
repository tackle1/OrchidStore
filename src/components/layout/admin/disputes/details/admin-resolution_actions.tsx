'use client';

export default function AdminResolutionActions() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Phân quyết Admin</h3>

            <div className="flex flex-col gap-3">
                {/* 1. Hoàn tiền toàn phần */}
                <button className="w-full rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
                    Hoàn tiền toàn phần
                </button>

                {/* 2. Hoàn tiền một phần */}
                <button className="w-full rounded-lg border border-purple-600 bg-white py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-50">
                    Hoàn tiền một phần
                </button>

                {/* 3. Giải ngân cho provider */}
                <button className="w-full rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                    Giải ngân cho provider
                </button>

                {/* 4. Yêu cầu thêm bằng chứng */}
                <button className="w-full rounded-lg border border-dashed border-gray-300 bg-white py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                    Yêu cầu thêm bằng chứng
                </button>
            </div>
        </div>
    );
}