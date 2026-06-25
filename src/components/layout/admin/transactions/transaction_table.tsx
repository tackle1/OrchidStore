'use client';

import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Transaction } from '../../../../types/transaction';

interface TransactionTableProps {
  transactions: Transaction[];
  onViewDetail?: (transaction: Transaction) => void;
}

export default function TransactionTable({ transactions, onViewDetail }: TransactionTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' ₫';
  };

  // Badge cho VNPay
  const getVnpayBadge = (status: string) => {
    if (status === 'Thành công') {
      return 'bg-[#D1FAE5] text-[#065F46]';
    } else if (status === 'Lỗi') {
      return 'bg-[#FEE2E2] text-[#991B1B]';
    } else {
      return 'bg-[#FEF3C7] text-[#92400E]';
    }
  };

  // Badge cho Giải ngân
  const getDisbursementBadge = (status: string) => {
    if (status === 'Đã trả') {
      return 'bg-[#D1FAE5] text-[#065F46]';
    } else if (status === 'Chờ') {
      return 'bg-[#E0E7FF] text-[#3730A3]';
    } else {
      return 'text-[#9CA3AF]';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#F0ECF7] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F8F9FC]">
            <th className="text-left px-6 py-4 text-sm font-semibold text-[#374151]">MÃ GD / NGÀY</th>
            <th className="text-left px-4 py-4 text-sm font-semibold text-[#374151]">MÃ ĐƠN / KHÁCH HÀNG</th>
            <th className="text-right px-4 py-4 text-sm font-semibold text-[#374151]">SỐ TIỀN</th>
            <th className="text-right px-4 py-4 text-sm font-semibold text-[#374151]">PHÍ NỀN TẢNG</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-[#374151]">VNPAY</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-[#374151]">GIẢI NGÂN</th>
            <th className="w-12"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#F3F4F6]">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-[#FAFBFF] transition-colors">
              {/* Mã GD + Ngày */}
              <td className="px-6 py-4">
                <div>
                  <div className="font-semibold text-[#6D28D9]">{tx.id}</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">{tx.date}</div>
                </div>
              </td>

              {/* MÃ ĐƠN / KHÁCH HÀNG */}
              <td className="px-4 py-4">
                <div className="font-medium text-[#111827] mb-2">{tx.orderCode}</div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#EDE9FE] text-[#6D28D9] text-xs font-bold flex-shrink-0">
                    {tx.customerCode}
                  </span>
                  <span className="text-[#374151]">{tx.customerName}</span>
                </div>
              </td>

              {/* Số tiền */}
              <td className="px-4 py-4 text-right font-medium text-[#111827]">
                {formatCurrency(tx.amount)}
              </td>

              {/* Phí nền tảng */}
              <td className="px-4 py-4 text-right text-[#6B7280]">
                {formatCurrency(tx.platformFee)}
              </td>

              {/* Trạng thái VNPay */}
              <td className="px-4 py-4 text-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getVnpayBadge(tx.vnpayStatus)}`}>
                  {tx.vnpayStatus}
                </span>
              </td>

              {/* Giải ngân */}
              <td className="px-4 py-4 text-center">
                {tx.disbursementStatus === '-' ? (
                  <span className="text-[#9CA3AF]">-</span>
                ) : (
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getDisbursementBadge(tx.disbursementStatus)}`}>
                    {tx.disbursementStatus}
                  </span>
                )}
              </td>

              {/* Action Menu */}
              <td className="px-2 py-4">
                <button
                  onClick={() => onViewDetail?.(tx)}
                  className="p-2 text-[#9CA3AF] hover:text-[#6B7280] hover:bg-[#F3F4F6] rounded-lg transition-colors"
                  title="Xem chi tiết"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}