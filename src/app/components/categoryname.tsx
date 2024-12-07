import React from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";

const CategoryName = () => {
  const cards = [
    { id: 1, icon: <MdOutlinePhoneIphone size={40} className="text-gray-500" />, name: "Phone" },
    { id: 2, icon: <MdOutlineComputer size={40} className="text-gray-500" />, name: "Computers" },
    { id: 3, icon: <TbDeviceWatchStats size={40} className="text-gray-500" />, name: "Smart Watch" },
    { id: 4, icon: <MdOutlinePhotoCameraBack size={40} className="text-white" />, name: "Camera" },
    { id: 5, icon: <MdOutlineHeadsetMic size={40} className="text-gray-500" />, name: "HeadPhones" },
    { id: 6, icon: <MdOutlineVideogameAsset size={40} className="text-gray-500" />, name: "Gaming" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`w-40 h-40 flex flex-col justify-center items-center border-2 rounded-[4px] hover:shadow-lg transition-shadow ${
            card.id === 4 ? "bg-red-500 text-white" : "bg-white border-gray-300"
          }`}
        >
          {card.icon}
          <h2 className="text-lg font-semibold mt-4">{card.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryName;
