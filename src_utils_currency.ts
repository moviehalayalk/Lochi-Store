/**
 * Utility to format price numbers into Sri Lankan Rupee currency format (e.g., Rs. 1,500)
 */
export function formatLKR(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

/**
 * Calculates delivery fee based on order subtotal and free delivery threshold
 */
export function calculateDeliveryFee(subtotal: number, threshold = 10000, defaultFee = 450): number {
  if (subtotal >= threshold) {
    return 0;
  }
  return defaultFee;
}