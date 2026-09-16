/**
 * Sri Lanka Phone Number Validator (supports +947..., 07..., 94...)
 */
export function isValidSriLankanPhone(phone: string): boolean {
  const cleaned = phone.replace(/[^0-9+]/g, '');
  return /^(\+94|0)?7[0-9]{8}$/.test(cleaned);
}

/**
 * Standard email format checker
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}