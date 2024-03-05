"use client";
import React, { useEffect, useState } from "react";

import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";

import listIcon from "../assets/list-icon.svg";
import calendarIcon from '../assets/calendar-icon.svg'
import Image from "next/image";

export default function Calendar({events}) {
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [todayDate, setTodayDate] = useState(new Date().getDate());
  const [todayMonth, setTodayMonth] = useState(new Date().getMonth());
  const [todayYear, setTodayYear] = useState(new Date().getFullYear());
  const [prevMonth, setPrevMonth] = useState(0);
  const [thisMonthEvents, setThisMonthEvents] = useState([]);
  const [listEvents, setListEvents] = useState({});
  const [view, setView] = useState("List");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    if (currentMonth) {
      setPrevMonth((month) => currentMonth - 1);
    } else {
      setPrevMonth((month) => 11);
    }
  }, [currentMonth]);

  useEffect(() => {
    const monthEvents = events.filter((event) => Number(event.date.split("-")[1]) === currentMonth + 1 && Number(event.date.split("-")[2]) === currentYear);
    let e = monthEvents.sort((a, b) => Number(a.date.split("-")[0]) - Number(b.date.split("-")[0]));
    let list = Object.groupBy(e, ({ date }) => date);
    setListEvents((e) => list);
    setThisMonthEvents((events) => e);
  }, [currentMonth, currentYear, events]);

  const decrementMonth = () => {
    if (currentMonth) {
      setCurrentMonth((month) => month - 1);
    } else {
      setCurrentMonth((month) => 11);
      decrementYear();
    }
  };
  const incrementMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth((month) => 0);
      incrementYear();
    } else {
      setCurrentMonth((month) => month + 1);
    }
  };
  const decrementYear = () => {
    setCurrentYear((year) => year - 1);
  };
  const incrementYear = () => {
    setCurrentYear((year) => year + 1);
  };
  const decrementDay = () => {
    let months1 = [0, 1, 3, 5, 7, 8, 10]; //Previous month contains 31 days
    let months2 = [4, 6, 9, 11]; //Previous month contains 30 days
    if (currentDate === 1) {
      if (months1.includes(currentMonth)) {
        setCurrentDate((date) => 31);
      } else if (months2.includes(currentMonth)) {
        setCurrentDate((date) => 30);
      } else {
        if (isLeapYear(currentYear)) {
          setCurrentDate((date) => 29);
        } else {
          setCurrentDate((date) => 28);
        }
      }
      decrementMonth();
    } else {
      setCurrentDate((date) => date - 1);
    }
  };
  const isLeapYear = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  };
  const numberOfDaysInMonth = (month) => {
    let months1 = [0, 2, 4, 6, 7, 9, 11]; //Month contains 31 days
    let months2 = [3, 5, 8, 10]; //Month contains 30 days
    if (months1.includes(month)) return 31;
    else if (months2.includes(month)) return 30;
    else {
      if (isLeapYear(currentYear)) {
        return 29;
      } else {
        return 28;
      }
    }
  };
  const getFirstDayofMonth = (mm, yyyy) => {
    const d = new Date(`${months[mm]} ${1}, ${yyyy}`).getDay();
    return d;
  };
  const getEventColor = (category) => {
    switch (category) {
      case "Catering":
        return "text-[#367C00]";
        break;

      case "Photography":
        return "text-[#FF9900]";
        break;

      case "Banquet Hall":
        return "text-[#B75050]";
        break;

      case "Decorator":
        return "text-[#825B37]";
        break;

      default:
        return "text-[#00ff00]";
    }
  };
  const getEventBgColor = (category) => {
    switch (category) {
      case "Catering":
        return "bg-[#367C0040]";
        break;

      case "Photography":
        return "bg-[#FF990040]";
        break;

      case "Banquet Hall":
        return "bg-[#B7505040]";
        break;

      case "Decorator":
        return "bg-[#825B3740]";
        break;

      default:
        return "bg-[#00ff0050]";
    }
  };

  return (
    <div className="w-full max-w-[845px]">
      <div className="flex justify-between items-center mb-5 select-none">
        <div className="flex items-center gap-5">
          <div className="rounded-lg bg-white text-sm px-4 py-2 box-shadow cursor-pointer">Today</div>
          <div className="flex items-center gap-2">
            <IoChevronBackCircleOutline size={25} color="#000" className="cursor-pointer" onClick={() => decrementMonth()} />
            <IoChevronForwardCircleOutline size={25} color="#000" className="cursor-pointer" onClick={() => incrementMonth()} />
          </div>
          <div className="font-playfair font-medium">
            {months[currentMonth]} {currentYear}
          </div>
        </div>
        <div className="flex items-center gap-3 border border-black rounded px-3 py-1 cursor-pointer" onClick={() => setView((view) => (view === "Calendar" ? "List" : "Calendar"))}>
          <Image src={view === "List" ? calendarIcon : listIcon} alt="list-icon" />
          <div>{view === "List" ? "Calendar" : "List View"}</div>
        </div>
      </div>
      {view === "Calendar" && (
        <div className="flex justify-center items-center flex-wrap box-shadow rounded-xl overflow-hidden cursor-default">
          {days.map((day, i) => (
            <div key={i} className="relative w-[calc(100%/7)] aspect-[1.8] border border-[#F2F2F4]">
              <div className="absolute top-4 right-3">{day}</div>
            </div>
          ))}
          {[...Array(getFirstDayofMonth(currentMonth, currentYear)).keys()].reverse().map((i) => (
            <div key={i} className="relative w-[calc(100%/7)] aspect-[1.59] border border-[#F2F2F4]">
              <div className="absolute top-1 right-3 text-[#B5B5B5]">{`${numberOfDaysInMonth(prevMonth) - i < 10 ? "0" : ""}${numberOfDaysInMonth(prevMonth) - i} `}</div>
            </div>
          ))}
          {Array.from({ length: numberOfDaysInMonth(currentMonth) }, (_, i) => (
            <div key={i} className={`relative w-[calc(100%/7)] aspect-[1.59]  ${currentMonth === todayMonth && currentYear === todayYear && i + 1 === todayDate ? "border-2 border-[#CBAD84]" : "border border-[#F2F2F4]"}`}>
              <div className="absolute top-1 right-3">{`${i + 1 < 10 ? "0" : ""}${i + 1}`}</div>
              <div className="max-w-[70%] h-full px-1 py-1 overflow-scroll no-scrollbar flex flex-col gap-1">
                {thisMonthEvents
                  .filter((event) => Number(event.date.split("-")[0]) === i + 1)
                  .map((e) => (
                    <div key={e.id} className="flex items-center gap-1">
                      <div className={`w-1 h-2 ${getEventBgColor(e.category)} rounded-sm`}></div>
                      <div className="text-[10px] font-normal line-clamp-1">{e.title}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          {Array.from({ length: 42 - numberOfDaysInMonth(currentMonth) - getFirstDayofMonth(currentMonth, currentYear) }, (_, i) => (
            <div key={i} className="relative w-[calc(100%/7)] aspect-[1.59] border border-[#F2F2F4]">
              <div className="absolute top-1 right-3 text-[#B5B5B5]">{`${i + 1 < 10 ? "0" : ""}${i + 1}`}</div>
            </div>
          ))}
        </div>
      )}
      {view === "List" && (
        <div className="w-full aspect-[1.9] box-shadow rounded-xl cursor-default flex flex-col">
          <div className="py-6 border-b-2 border-[#E7EBEE] flex justify-center items-center px-6 w-full">
            <div className="w-[20%] font-playfair font-semibold">Services</div>
            <div className="w-[15%] font-playfair font-semibold">Date</div>
            <div className="w-[20%] font-playfair font-semibold">Time</div>
            <div className="w-[20%] font-playfair font-semibold">Client Name</div>
            <div className="w-[25%] font-playfair font-semibold">Comments</div>
          </div>
          <div className="overflow-scroll no-scrollbar w-full h-full flex-shrink">
            {Object.keys(listEvents).length > 0 ? Object.keys(listEvents).map((key) => (
              <div key={key} className="py-6 border-b-2 border-[#E7EBEE] flex justify-center items-start px-6">
                <div className="w-[20%] flex flex-col gap-2">
                  {listEvents[key].map((event, i) => (
                    <div key={i} className={`text-sm ${getEventBgColor(event.category)} ${getEventColor(event.category)} px-4 py-1 rounded-md w-fit`}>{event.title}</div>
                  ))}
                </div>
                <div className="w-[15%] uppercase text-sm text-[#4C472A] font-semibold">{key}</div>
                <div className="w-[20%] flex flex-col gap-2">
                  {listEvents[key].map((event, i) => (
                    <div key={i} className={`text-sm px-4 py-1`}>{event.fullDay ? "All Day" : `${event.fromTime} - ${event.endTime}`}</div>
                  ))}
                </div>
                <div className="w-[20%] flex flex-col gap-2">
                  {listEvents[key].map((event, i) => (
                    <div key={i} className={`text-sm px-4 py-1`}>{event.client}</div>
                  ))}
                </div>
                <div className="w-[20%] flex flex-col gap-2">
                  {listEvents[key].map((event, i) => (
                    <div key={i} className={`text-sm px-4 py-1 line-clamp-1`}>{event.description}</div>
                  ))}
                </div>
              </div>
            )): <div className="text-[#4C472A] p-6 font-semibold">No event scheduled for {months[currentMonth]} {currentYear} </div>}
          </div>
        </div>
      )}
    </div>
  );
}
