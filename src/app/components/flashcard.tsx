import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const FlashCard = () => {
  const card = [
    {
      id: "1",
      image: "/images/frame1.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      priceWas: "$160",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: "2",
      image: "/images/frame2.png",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      priceWas: "$1160",
      rating: 4,
      reviews: 75,
    },
    {
      id: "3",
      image: "/images/frame3.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      priceWas: "$400",
      rating: 4.4,
      reviews: 99,
    },
    {
      id: "4",
      image: "/images/frame4.png",
      title: "S-Series Comfort Chair",
      price: "$375",
      priceWas: "$400",
      rating: 4.7,
      reviews: 99,
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {card.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col justify-between"
        >
          <div className="relative w-full h-48 mb-4">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h2 className="text-sm font-semibold mt-4">{item.title}</h2>
          <div className="mt-2">
            <span className="text-xl font-bold text-gray-800">{item.price}</span>{" "}
            <span className="text-sm line-through text-gray-500">{item.priceWas}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoMdStar
                  key={index}
                  className={`${
                    index < Math.round(item.rating) ? "text-yellow-500" : "text-gray-300"
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

export default FlashCard;
