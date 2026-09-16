import React from 'react';
import { Package, Clock, CheckCircle2, Truck, ArrowRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';
import { PageType } from '../types';

export const OrdersPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  const { orders } = useStore();
  const { user } = useAuth();

  // Filter orders for the logged-in customer or show all local orders
  const userOrders = user 
    ? orders.filter(o => o.customerId === user.uid || o.customerEmail === user.email)
    : orders;

  if (userOrders.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <Package className="w-16 h-16 text-[#FBCFE8] mx-auto" />
        <h2 className="text-2xl font-black text-[#831843]">No Orders Found Yet</h2>
        <p className="text-xs text-[#8A7480]">Once you place an order with Lochi Store, your package status will appear here.</p>
        <button
          onClick={() => onNavigate('shop')}
          className="mt-4 px-6 py-2.5 rounded-full bg-[#BE185D] text-white text-xs font-bold"
        >
          Shop Boutique Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="pb-4 border-b border-[#FCE7F0]">
        <h1 className="text-2xl sm:text-3xl font-black text-[#831843]">My Orders & Delivery Tracking</h1>
        <p className="text-xs text-[#8A7480]">Track your parcel dispatched from our Galle studio</p>
      </div>

      <div className="space-y-6">
        {userOrders.map(order => (
          <div key={order.id} className="bg-white rounded-3xl border border-[#FCE7F0] p-6 space-y-4 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#FFF0F5]">
              <div>
                <span className="text-xs font-bold text-[#BE185D]">Order #{order.orderNumber}</span>
                <p className="text-[11px] text-[#8A7480]">
                  Placed on {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                  order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                  order.status === 'processing' ? 'bg-purple-100 text-purple-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {order.status}
                </span>
                <span className="text-xs font-black text-[#9D174D]">
                  Rs. {order.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Items in this order */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 bg-[#FFF5F8]/60 rounded-xl border border-pink-100">
                  <img src={item.image} alt={item.productName} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#4A2838] truncate">{item.productName}</p>
                    <p className="text-[10px] text-[#8A7480]">Qty: {item.quantity} • Rs. {item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery address info */}
            <div className="text-[11px] text-[#8A7480] pt-2 border-t border-[#FFF0F5] flex flex-wrap justify-between gap-2">
              <div>
                <strong>Destination:</strong> {order.deliveryAddress.street}, {order.deliveryAddress.city}
              </div>
              <div>
                <strong>Payment:</strong> {order.paymentMethod.toUpperCase()} ({order.paymentStatus})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};