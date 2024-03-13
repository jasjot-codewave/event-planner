import CartSummary from "@/app/components/cart/CartSummary";
import CostSummary from "@/app/components/cart/CostSummary";
import React from "react";

export default function Declined() {
  return (
    <div className="w-[95%] m-auto">
      <div className="w-full lg:flex justify-center items-start gap-6">
        <div className="w-full max-w-[800px] flex-shrink m-auto lg:m-0">
          <CartSummary heading="Vendors Request" type="declined-requests" />
        </div>
        <div className="w-full xl:max-w-[475px] lg:max-w-[400px] max-w-[800px] m-auto lg:m-0"></div>
      </div>
    </div>
  );
}
