export interface StoreNotification {
  id: string;
  type: 'info' | 'success' | 'warning';
  message: string;
  createdAt: string;
}

export interface CouponCode {
  code: string;
  discountPercentage: number;
  minSpend: number;
  isActive: boolean;
}