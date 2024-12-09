


import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { GiShare } from "react-icons/gi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";

interface Props {
  image: StaticImageData;
  brandName: string;
  productName: string;
  newPrice: number;
  oldPrice?: number; // Optional
  discount?: string; // Optional
}

function Card({
  image,
  brandName,
  productName,
  newPrice,
  oldPrice,
  discount,
}: Props) {
  // Format numbers with thousand separators
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="w-full max-w-sm bg-[#F4F5F7] shadow-lg rounded-lg relative group transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt="Product Image"
          className="rounded-t-lg w-full h-auto object-cover"
        />
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-center py-1 px-3 rounded-full text-xs font-semibold">
            {discount}
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{brandName}</h2>
        <p className="text-sm text-gray-600">{productName}</p>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-gray-900">
            {formatPrice(newPrice)}
          </h1>
          {oldPrice && (
            <span className="line-through text-gray-500 text-sm">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 rounded-lg">
        <button
          aria-label="Add to Cart"
          className="bg-yellow-500 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-yellow-600 transition-colors"
        >
          Add to Cart
        </button>
        <div className="flex gap-3">
          <button
            aria-label="Share"
            className="text-white flex items-center gap-1 px-3 py-2 hover:text-yellow-500"
          >
            <GiShare />
            <span>Share</span>
          </button>
          <button
            aria-label="Compare"
            className="text-white flex items-center gap-1 px-3 py-2 hover:text-yellow-500"
          >
            <HiArrowsRightLeft />
            <span>Compare</span>
          </button>
          <button
            aria-label="Like"
            className="text-white flex items-center gap-1 px-3 py-2 hover:text-yellow-500"
          >
            <GoHeart />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
