"use client";

import React, { useState } from "react";

export default function CostSummary({ heading, type, items }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  return (
    <div className="w-full border border-[#C3C3C3] rounded-lg sm:my-6 my-4 sm:p-6 p-6">
      <div className="font-semibold sm:text-2xl text-xl font-playfair sm:pb-4 pb-3 border-b-[0.5px] border-[#D6D6D6]">Vendors Cart Summary</div>
      <div className="font-medium font-playfair sm:text-xl text-base">
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>Fab-O Venue Cost</div>
          <div>$6,600</div>
        </div>
      </div>
      <div className="border-y-[0.5px] border-[#D6D6D6] sm:py-4 py-3">
        <div className="mb-2 flex justify-between items-center font-semibold sm:text-xl text-base">
          <div>Total Cost:</div>
          <div>$6,600</div>
        </div>
        <div className="flex justify-between items-center font-medium sm:text-base text-sm">
          <div>Taxes</div>
          <div>$320</div>
        </div>
      </div>
      <div className="sm:my-4 my-3 flex justify-between items-center sm:text-2xl text-lg font-semibold font-playfair">
        <div>Final Amount:</div>
        <div>$6,950</div>
      </div>
      {type === "accepted-requests" && (
        <div className="sm:my-4 my-3 flex justify-between items-center sm:gap-3 gap-2">
          <input type="checkbox" name="terms" id="terms" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="sm:scale-150 scale-125 accent-black"  />
          <div className="sm:text-base text-sm font-medium">By clicking the below button, you agree to <span className="whitespace-nowrap">Terms and Conditions</span></div>
        </div>
      )}
      {type === "cart-items" ? <button className="sm:py-4 py-3 sm:px-3 px-2 bg-black text-white sm:text-base text-sm font-medium w-full rounded sm:mt-4 mt-3">Request Now</button> : <button className={`sm:py-4 py-3 sm:px-3 px-2 text-white sm:text-base text-sm font-medium w-full rounded sm:mt-4 mt-3 ${termsAccepted ? 'bg-black' : 'bg-[#B7B7B7]'}`} disabled={!termsAccepted}>Pay All Bills Now</button>}
    </div>
  );
}
