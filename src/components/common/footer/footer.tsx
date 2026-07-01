'use client';

export default function ProviderRegisterFooter() {
    return (
        <footer className="w-full bg-[#F3F2FC] border-t border-[#E5E7EB] mt-auto">
            <div className="max-w-7xl mx-auto px-7 h-[70px] flex flex-col md:flex-row items-center justify-between gap-y-2 text-sm">

                {/* LEFT - Logo */}
                <div>
                    <h2 className="text-[20px] font-extrabold tracking-[-0.4px] text-[#6D28D9]">
                        LanCare Hub
                    </h2>
                </div>

                {/* CENTER - Copyright */}
                <p className="text-[14px] text-[#6B7280] font-medium text-center">
                    © {new Date().getFullYear()} LanCare Hub. All rights reserved.
                </p>

                {/* RIGHT - Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-[14px] text-[#6B7280] hover:text-[#111827] transition"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="text-[14px] text-[#6B7280] hover:text-[#111827] transition"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="text-[14px] text-[#6B7280] hover:text-[#111827] transition"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </footer>
    );
}