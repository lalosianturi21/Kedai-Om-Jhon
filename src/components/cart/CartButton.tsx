'use client'

import { ShoppingCart, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import useCart from '@/hooks/useCart';
import { motion } from 'framer-motion';
import CartItem from './CartItem'; // Asumsi CartItem ada di folder yang sama
import { useRouter } from "next/navigation";
import { formatPrice } from '@/lib/utils';

const CartButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const cart = useCart();
  const router = useRouter();

  const cartItemCount = cart?.items?.length || 0;
  const totalAmount = cart?.items?.reduce((total, item) => total + parseFloat(item.price.toString()), 0) || 0;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const goToCart = () => {
    router.push('/cart');
    setIsModalOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
            <Button
        onClick={toggleModal}
        size="sm"
        className="relative gap-x-2 xl:gap-x-3 xl:px-4 xl:py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-400"
        aria-label={`${cartItemCount}-items-in-cart`}
      >
        <ShoppingCart className="w-5 h-5 xl:w-6 xl:h-6 transition-all duration-300 transform" />
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {cartItemCount}
          </span>
        )}
      </Button>


      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/* Modal */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative z-50 w-full max-w-md h-full bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-l-2xl p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
            {cartItemCount === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            )}

            {/* Total Section */}
            <div className="mt-6 border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-lg font-medium text-gray-900">{formatPrice(totalAmount)}</span>
              </div>
              <Button
                onClick={goToCart}
                size="lg"
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:opacity-90"
              >
                Go to Cart
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CartButton;
