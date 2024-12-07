import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const BestSellerProducts = () => {
  const card = [
    {
      id: "1",
      image: "/images/bestseller1.png",
      title: "The North Coat",
      price: "$260",
      priceWas: "$360",
      rating: 4.5,
      reviews: 65,
    },
    {
      id: "2",
      image: "/images/bestseller2.png",
      title: "Gucci Duffle Bag",
      price: "$960",
      priceWas: "$1160",
      rating: 4,
      reviews: 65,
    },
    {
      id: "3",
      image: "/images/bestseller3.png",
      title: "RGB Liquid CPU Cooler",
      price: "$160",
      priceWas: "$170",
      rating: 4.4,
      reviews: 65,
    },
    {
      id: "4",
      image: "/images/bestseller4.png",
      title: "Small Bookshelf",
      price: "$175",
      priceWas: "",
      rating: 4.7,
      reviews: 65,
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {card.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full h-48">
            <Image
              src={item.image}
              alt={`${item.title} - Best Seller`}
              width={300}
              height={300}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h2 className="text-sm font-semibold mt-4">{item.title}</h2>
          <div className="mt-2">
            <span className="text-xl font-bold text-gray-800">{item.price}</span>{" "}
            {item.priceWas && (
              <span className="text-sm line-through text-gray-500">{item.priceWas}</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoMdStar
                  key={index}
                  className={`${
                    index < Math.floor(item.rating) ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellerProducts;
