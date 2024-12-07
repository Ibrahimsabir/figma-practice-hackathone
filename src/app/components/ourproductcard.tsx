import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const OurProductsCard = () => {
  const card = [
    {
      id: "1",
      image: "/images/product1.png",
      title: "Breed Dry Dog Food",
      price: "$100",
      priceWas: "$120",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: "2",
      image: "/images/product2.png",
      title: "CANON EOS DSLR Camera",
      price: "$960",
      priceWas: "$1160",
      rating: 4,
      reviews: 75,
    },
    {
      id: "3",
      image: "/images/product3.png",
      title: "ASUS FHD Gaming Laptop",
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
    {
      id: "5",
      image: "/images/product4.png",
      title: "Kids Electric Car",
      price: "$350",
      priceWas: "$400",
      rating: 4.6,
      reviews: 120,
    },
    {
      id: "6",
      image: "/images/product5.png",
      title: "Jr. Zoom Soccer Cleats",
      price: "$1180",
      priceWas: "$1350",
      rating: 4.3,
      reviews: 95,
    },
    {
      id: "7",
      image: "/images/product6.png",
      title: "GP11 Shooter USB Gamepad",
      price: "$650",
      priceWas: "$700",
      rating: 4.2,
      reviews: 60,
    },
    {
      id: "8",
      image: "/images/product7.png",
      title: "Quilted Satin Jacket",
      price: "$450",
      priceWas: "$600",
      rating: 4.8,
      reviews: 150,
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {card.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
          aria-labelledby={`product-${item.id}`}
        >
          <div className="relative w-full h-48">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-md"
              aria-label={`Image of ${item.title}`}
            />
          </div>
          <h2 id={`product-${item.id}`} className="text-sm font-medium mt-4">{item.title}</h2>
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
                    index < item.rating ? "text-yellow-500" : "text-gray-300"
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

export default OurProductsCard;
