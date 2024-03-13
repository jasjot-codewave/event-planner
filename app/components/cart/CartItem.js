import Image from "next/image";
import React from "react";

import cardImage from "../../assets/card-image.png";
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";

export default function CartItem() {
  return (
    <div className="sm:py-6 py-3 flex justify-start items-start gap-2 sm:gap-4">
      <Image alt="image" src={cardImage} priority className="w-[90px] sm:w-[120px] max-w-max h-auto rounded-lg" />
      <div className="w-full flex-shrink">
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <div className="font-semibold text-base sm:text-lg font-playfair line-clamp-1">Fab-O Venue Summary</div>
          <div className="flex justify-center items-center gap-1 sm:gap-3">
            <div className="p-1 sm:p-2 bg-[#FFF4E4] rounded-lg cursor-pointer">
              <Image alt="image" src={editIcon} className="w-[15px] sm:w-[20px] max-w-max h-auto" />
            </div>
            <div className="p-1 sm:p-2 cursor-pointer">
              <Image alt="image" src={deleteIcon} className="w-[15px] sm:w-[20px] max-w-max h-auto" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full from-[#ECECEC] to-transparent bg-gradient-to-r my-3 sm:my-4"></div>
        <div className="w-full">
          <div className="font-semibold text-sm sm:text-base">Description</div>
          <div className="w-full flex justify-start items-center gap-1 sm:gap-2 my-0.5 sm:my-1">
            <div className="w-2 h-2 rounded-full bg-[#C7AC84]"></div>
            <div className="w-full flex-shrink flex justify-start items-center gap-2 sm:gap-4">
              <div className="xl:max-w-[240px] sm:max-w-[200px] max-w-[150px] w-full flex-shrink line-clamp-1 text-[#5A5A5A] sm:text-sm text-xs font-medium">Indoor space cost for 4 hours</div>
              <div className="border-l border-[#DEDEDE] xl:px-9 sm:px-5 px-3 text-xs sm:text-sm font-bold whitespace-nowrap">$ 800</div>
              <div className="flex justify-center items-center sm:gap-1 gap-0.5">
                <div className="sm:p-1 p-0.5 bg-[#FFF4E4] rounded-lg cursor-pointer">
                  <Image alt="image" src={editIcon} className="sm:w-[14px] w-[12px] h-auto max-w-max" />
                </div>
                <div className="sm:p-1 p-0.5 cursor-pointer">
                  <Image alt="image" src={deleteIcon} className="sm:w-[14px] w-[12px] h-auto max-w-max" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-1 sm:gap-2 my-0.5 sm:my-1">
            <div className="w-2 h-2 rounded-full bg-[#C7AC84]"></div>
            <div className="w-full flex-shrink flex justify-start items-center gap-2 sm:gap-4">
              <div className="xl:max-w-[240px] sm:max-w-[200px] max-w-[150px] w-full flex-shrink line-clamp-1 text-[#5A5A5A] sm:text-sm text-xs font-medium">Outdoor space cost for 4 hours</div>
              <div className="border-l border-[#DEDEDE] xl:px-9 sm:px-5 px-3 text-xs sm:text-sm font-bold whitespace-nowrap">$ 250</div>
              <div className="flex justify-center items-center sm:gap-1 gap-0.5">
                <div className="sm:p-1 p-0.5 bg-[#FFF4E4] rounded-lg cursor-pointer">
                  <Image alt="image" src={editIcon} className="sm:w-[14px] w-[12px] h-auto max-w-max" />
                </div>
                <div className="sm:p-1 p-0.5 cursor-pointer">
                  <Image alt="image" src={deleteIcon} className="sm:w-[14px] w-[12px] h-auto max-w-max" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full from-[#ECECEC] to-transparent bg-gradient-to-r my-3 sm:my-4"></div>
        <div className="w-full flex justify-start items-center sm:gap-2 gap-1 my-0.5 sm:my-1">
          <div className="xl:max-w-[264px] sm:max-w-[224px] max-w-[174px] w-full flex-shrink line-clamp-1 sm:text-base text-sm font-medium">Total Venue Cost :</div>
          <div className="border-l border-[#DEDEDE] xl:px-9 sm:px-5 px-3 sm:text-xl text-lg font-bold whitespace-nowrap">$ 1050</div>
        </div>
      </div>
    </div>
  );
}
