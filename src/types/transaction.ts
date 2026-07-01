export interface Transaction {
    id: string;
    date: string;
    orderCode: string;
    customerName: string;
    customerCode: string; // VD: TA, LM, PH
    amount: number;
    platformFee: number;
    vnpayStatus: 'Thành công' | 'Chờ' | 'Lỗi';
    disbursementStatus: string;
}