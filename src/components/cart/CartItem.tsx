"use client";

import { X } from "lucide-react";
import Image from "next/image";

import IconButton from "@/components/ui/IconButton";
import useCart from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { Product } from "@prisma/client";
import Link from "next/link";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const isItemInCart = cart.items.some((item) => item.id === data.id); // Check if the item is in the cart

  const onToggleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      cart.addItem(data); // Add item if checkbox is checked
    } else {
      cart.removeItem(data.id); // Remove item if checkbox is unchecked
    }
  };

  return (
    <li className="flex items-center py-4 border-b border-gray-200">
      <input
        type="checkbox"
        checked={isItemInCart} // Set checkbox to checked if item is in cart
        onChange={onToggleSelect}
        className="mr-4 p-1 rounded-full shadow"
        aria-label="Select item"
      />

      <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-lg overflow-hidden shadow-md">
        <Image
          fill
          // @ts-expect-error
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="flex justify-between items-start">
          <Link
            href={`/${data.storeId}/${data.slug}?productId=${data.id}`}
            className="text-sm sm:text-base font-semibold text-gray-900 hover:underline line-clamp-2"
          >
            {data.name}
          </Link>
          <span className="text-sm font-medium text-gray-500 sm:hidden">
            {/* @ts-expect-error Decimal type */}
            {formatPrice(parseFloat(data.price))}
          </span>
        </div>

        <p className="mt-1 text-xs text-gray-500 capitalize sm:text-sm">
          {data.categoryId}
        </p>

        <div className="flex justify-between items-center mt-2 sm:mt-1">
          <span className="hidden sm:block text-base font-medium text-gray-900">
            {/* @ts-expect-error Decimal type */}
            {formatPrice(parseFloat(data.price))}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
