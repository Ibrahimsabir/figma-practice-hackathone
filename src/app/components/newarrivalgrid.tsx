import React from "react";
import Image from "next/image";

const NewArrivalGrid = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-4 gap-4 w-[1170px] h-[600px] mx-auto p-4">
      {/* First picture - spans 2 rows and 2 columns */}
      <div className="row-span-2 col-span-2 relative">
        <Image
          src="/images/newarr1 (1).png"
          alt="First"
          layout="intrinsic"  // Maintain image aspect ratio
          width={600}         // Set image width
          height={600}        // Set image height
          className="rounded-md object-cover"
        />
      </div>
      {/* Second picture - spans 1 row and 2 columns */}
      <div className="row-span-1 col-span-2 relative">
        <Image
          src="/images/newarr1 (2).png"
          alt="Second"
          layout="intrinsic"
          width={600}        // Adjust width to match the 1x2 grid
          height={300}       // Adjust height to match the 1x2 grid
          className="rounded-md object-cover"
        />
      </div>
      {/* Third picture - spans 1 row and 1 column */}
      <div className="row-span-1 col-span-1 relative">
        <Image
          src="/images/newarr1 (3).png"
          alt="Third"
          layout="intrinsic"
          width={300}       // Adjust width to fit in 1x1 grid
          height={300}      // Adjust height to fit in 1x1 grid
          className="rounded-md object-cover mt-[6.5rem]"
        />
      </div>
      {/* Fourth picture - spans 1 row and 1 column */}
      <div className="row-span-1 col-span-1 relative">
        <Image
          src="/images/newarr1 (4).png"
          alt="Fourth"
          layout="intrinsic"
          width={300}       // Adjust width to fit in 1x1 grid
          height={300}      // Adjust height to fit in 1x1 grid
          className="rounded-md object-cover mt-[6.5rem]"
        />
      </div>
    </div>
  );
};

export default NewArrivalGrid;
