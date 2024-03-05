"use client";
import React, { useEffect, useState } from "react";

export default function UpcomingEventCard({ event }) {
  const { date, category, title, description } = event;
  const [color, setColor] = useState("bg-[#367C0080]");
  useEffect(() => {
    switch (category) {
      case "Catering":
        setColor("bg-[#367C0080]");
        break;

      case "Photography":
        setColor("bg-[#FF990080]");
        break;

      case "Banquet Hall":
        setColor("bg-[#B7505080]");
        break;

      case "Decorator":
        setColor("bg-[#825B3780]");
        break;
    }
  }, [category]);
  return (
    <div className="py-4 px-2 border-b border-b-[#D9D9D9] flex justify-center items-stretch gap-4 w-full">
      <div className="text-sm font-bold flex justify-center items-center text-nowrap">{date}</div>
      <div className={`w-[3px] ${color} rounded-lg`}></div>
      <div className="w-full flex-shrink">
        <div className="text-sm font-bold mb-1">{title}</div>
        <div className='text-[#8E98A8] text-xs'>{description}</div>
      </div>
    </div>
  );
}
