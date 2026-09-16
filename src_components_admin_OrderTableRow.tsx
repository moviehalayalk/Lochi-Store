import React from 'react';
import { Order } from '../../types';

interface OrderTableRowProps {
  order: Order;
  onUpdateStatus: (status: Order['status']) => void;
  onTogglePayment: () => void;
}

export const OrderTableRow: React.FC<OrderTableRowProps> = ({ order, onUpdateStatus, onTogglePayment }) => {
  return (
    <tr className="border-b border-pink-100 hover:bg-pink-50/30 text-xs">
      <td className="p-3 font-bold text-[#BE185D]">#{order.orderNumber}</td>
      <td className="p-3 font-semibold">{order.customerName}</td>
      <td className="p-3 text-gray-500">{order.deliveryAddress.city}</td>
      <td className="p-3 font-black">Rs. {order.total.toLocaleString()}</td>
      <td className="p-3">
        <button 
          onClick={onTogglePayment}
          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
            order.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {order.paymentStatus.toUpperCase()}
        </button>
      </td>
      <td className="p-3">
        <select 
          value={order.status} 
          onChange={e => onUpdateStatus(e.target.value as any)}
          className="border rounded p-1 text-[10px] font-bold bg-white"
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </td>
    </tr>
  );
};