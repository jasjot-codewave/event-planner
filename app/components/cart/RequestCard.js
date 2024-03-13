"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import cardImage from "../../assets/card-image.png";
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";

export default function RequestCard({ status, id }) {
  const [paymentType, setPaymentType] = useState("advance");
  return (
    <div className="sm:py-6 py-3 flex justify-start items-start gap-2 sm:gap-4">
      <Image alt="image" src={cardImage} priority className="w-[90px] sm:w-[120px] max-w-max h-auto rounded-lg" />
      <div className="w-full flex-shrink">
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <div>
            <div className="font-semibold sm:text-lg text-base font-playfair mb-1">Fab-O Venue Summary</div>
            {status === "accepted" ? <div className="sm:px-3 px-2 sm:py-1 py-0.5 sm:text-xs text-[10px] font-semibold bg-[#EAFFD9] border border-[#69E020] rounded w-fit">Request Accepted</div> : <div className="sm:px-3 px-2 sm:py-1 py-0.5 sm:text-xs text-[10px] font-semibold bg-[#FFE0D9] border border-[#E02B20] rounded w-fit">Request Declined</div>}
          </div>
          {status === "accepted" && (
            <div className="sm:p-2 p-1 bg-[#FFF4E4] rounded-lg cursor-pointer">
              <Image alt="image" src={deleteIcon} className="w-[15px] sm:w-[20px] h-auto" />
            </div>
          )}
        </div>
        <div className="h-[1px] w-full from-[#ECECEC] to-transparent bg-gradient-to-r my-3 sm:my-4"></div>
        <div className="w-full">
          <div className="font-semibold text-sm sm:text-base">Booking Details</div>
          <div className="w-full flex justify-start items-center gap-1 sm:gap-2 my-0.5 sm:my-1">
            <div className="w-2 h-2 rounded-full bg-[#C7AC84]"></div>
            <div className="w-full flex-shrink flex justify-start items-center gap-2 sm:gap-4">
              <div className="xl:max-w-[240px] sm:max-w-[180px] max-w-[100px] w-full flex-shrink line-clamp-1 text-[#5A5A5A] text-xs sm:text-sm font-medium">Booking ID</div>
              <div className="border-l border-[#DEDEDE] xl:px-9 sm:px-4 px-2 text-xs sm:text-sm font-medium text-[#5A5A5A]">VN123456</div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-1 sm:gap-2 my-0.5 sm:my-1">
            <div className="w-2 h-2 rounded-full bg-[#C7AC84]"></div>
            <div className="w-full flex-shrink flex justify-start items-center gap-2 sm:gap-4">
              <div className="xl:max-w-[240px] sm:max-w-[180px] max-w-[100px] w-full flex-shrink line-clamp-1 text-[#5A5A5A] text-xs sm:text-sm font-medium">Booking Date</div>
              <div className="border-l border-[#DEDEDE] xl:px-9 sm:px-4 px-2 text-xs sm:text-sm font-medium text-[#5A5A5A]">15-02-2024</div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-1 sm:gap-2 my-0.5 sm:my-1">
            <div className="w-2 h-2 rounded-full bg-[#C7AC84]"></div>
            <div className="w-full flex-shrink flex justify-start items-center gap-2 sm:gap-4">
              <div className="xl:max-w-[240px] sm:max-w-[180px] max-w-[100px] w-full flex-shrink line-clamp-1 text-[#010000] text-xs sm:text-sm font-medium">Time Duration</div>
              <div className="border-l border-[#DEDEDE] xl:px-9 sm:px-4 px-2 text-xs sm:text-sm font-medium text-[#5A5A5A]">15 hours</div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full from-[#ECECEC] to-transparent bg-gradient-to-r my-3 sm:my-4"></div>
        {status === "accepted" ? (
          <div className="w-fit bg-[#FFF8EF] py-2 sm:py-3 px-3 sm:px-4 rounded-lg flex flex-col justify-center items-center gap-3 sm:gap-4">
            <div className="flex justify-start items-center gap-3 sm:gap-4">
              <input type="radio" name={`payment-type-${id}`} value={"advance"} onChange={(e) => setPaymentType(e.target.value)} checked={paymentType === "advance"} className="accent-black sm:scale-150 scale-125" />
              <div className="xl:w-[230px] sm:w-[170px] w-[100px] flex-shrink line-clamp-1 text-[#000000] sm:text-base text-xs font-medium">Advance Amount:</div>
              <div className="border-l border-[#DEDEDE] xl:pl-9 sm:pl-4 pl-2 sm:text-base text-xs font-bold text-[#000000]">$0250</div>
            </div>
            <div className="flex justify-start items-center gap-3 sm:gap-4">
              <input type="radio" name={`payment-type-${id}`} value={"total"} onChange={(e) => setPaymentType(e.target.value)} checked={paymentType === "total"} className="accent-black sm:scale-150 scale-125" />
              <div className="xl:w-[230px] sm:w-[170px] w-[100px] flex-shrink line-clamp-1 text-[#000000] sm:text-base text-xs font-medium">Total Amount:</div>
              <div className="border-l border-[#DEDEDE] xl:pl-9 sm:pl-4 pl-2 sm:text-base text-xs font-bold text-[#000000]">$1250</div>
            </div>
          </div> 
        ) : (
          <div className="w-full sm:max-w-[400px] max-w-[200px] sm:py-3 py-2 sm:px-5 px-4 sm:text-sm text-xs font-semibold border border-black rounded-lg text-center cursor-pointer">Find Another Vendor</div>
        )}
      </div>
    </div>
  );
}
