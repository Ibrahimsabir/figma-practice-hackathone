import React from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";

const CategoryName = () => {
  const cards = [
    { id: 1, icon: <MdOutlinePhoneIphone size={40} />, name: "Phone" },
    { id: 2, icon: <MdOutlineComputer size={40} />, name: "Computers" },
    { id: 3, icon: <TbDeviceWatchStats size={40} />, name: "Smart Watch" },
    { id: 4, icon: <MdOutlinePhotoCameraBack size={40} />, name: "Camera" },
    { id: 5, icon: <MdOutlineHeadsetMic size={40} />, name: "HeadPhones" },
    { id: 6, icon: <MdOutlineVideogameAsset size={40} />, name: "Gaming" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="group w-40 h-40 flex flex-col justify-center items-center bg-white border-2 border-gray-300 rounded-[4px] hover:bg-red-700 hover:text-white hover:shadow-lg transition-all"
        >
          <div className="text-gray-700 group-hover:text-white transition-all">
            {card.icon}
          </div>
          <h2 className="text-lg font-semibold mt-4">{card.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryName;
