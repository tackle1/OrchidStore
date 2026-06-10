'use client';

import { CheckCircle } from 'lucide-react';

interface RequiredCategoriesProps {
    requiredCategories: string[];
    completedCategories: string[];
}

export default function RequiredCategories({ requiredCategories, completedCategories }: RequiredCategoriesProps) {
    return (
        <div>
            <p className="font-medium mb-2">Ảnh bắt buộc cần có:</p>
            <div className="flex flex-wrap gap-2">
                {requiredCategories.map((cat) => {
                    const isCompleted = completedCategories.includes(cat);
                    return (
                        <div
                            key={cat}
                            className={`
                                flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all
                                ${isCompleted
                                    ? 'bg-[#6D28D9] text-white'
                                    : 'bg-[#F3E8FF] text-[#6D28D9] border border-[#DDD6FE]'
                                }
                            `}
                        >
                            {isCompleted && <CheckCircle className="w-3.5 h-3.5" />}
                            {cat}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}