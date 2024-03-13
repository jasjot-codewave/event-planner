import React from 'react'
import CartItem from './CartItem'
import RequestCard from './RequestCard'

export default function CartSummary({heading, type}) {
  return (
    <div className='w-full border border-[#F0E0CA] rounded-lg sm:my-6 my-4'>
        <div className='bg-[#FFF4E4] text-black sm:p-6 p-4'>
            <div className='font-semibold text-xl sm:text-2xl font-playfair'>{heading}</div>
            <div className='font-normal text-xs sm:text-sm mt-1 sm:mt-2'>Review your selections before proceeding to checkout</div>
        </div>
        <div className='sm:px-6 px-4'>
            {
              type === "cart-items" &&
              <div>
                <CartItem />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <CartItem />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <CartItem />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <CartItem />
              </div>
            }
            {
              type === "accepted-requests" &&
              <div>
                <RequestCard status={"accepted"} id="1" />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <RequestCard status={"accepted"} id="2" />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <RequestCard status={"accepted"} id="3" />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <RequestCard status={"accepted"} id="4" />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <RequestCard status={"accepted"} id="5" />
              </div>
            }
            {
              type === "declined-requests" &&
              <div>
                <RequestCard status={"declined"} />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <RequestCard status={"declined"} />
                <div className='w-full h-[1px] bg-[#C3C3C3] my-6'></div>
                <RequestCard status={"declined"} />
              </div>
            }
        </div>
    </div>
  )
}
