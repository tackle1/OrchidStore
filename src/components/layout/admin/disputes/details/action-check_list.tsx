'use client';

import { useState } from 'react';

interface ChecklistItem {
    id: number;
    label: string;
    checked: boolean;
}

export default function ActionChecklist() {
    const [items, setItems] = useState<ChecklistItem[]>([
        { id: 1, label: 'Review protocols', checked: false },
        { id: 2, label: 'Verify timestamps', checked: false },
        { id: 3, label: 'Check High Risk flag', checked: true },
    ]);

    const toggleItem = (id: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Action checklist</h3>

            <div className="space-y-3">
                {items.map((item) => (
                    <label
                        key={item.id}
                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                    >
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => toggleItem(item.id)}
                            className="h-4 w-4 accent-purple-600"
                        />
                        <span className={item.checked ? 'line-through text-gray-400' : ''}>
                            {item.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}