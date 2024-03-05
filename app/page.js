import Image from "next/image";

import bookingImage from "./assets/booking-img.png";
import UpcomingEventCard from "./components/UpcomingEventCard";
import Calendar from "./components/Calendar";

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      date: "21 Mar",
      category: "Catering",
      title: "Catering",
      description: "Lorem ipsum dolar sit",
    },
    {
      id: 2,
      date: "22 Mar",
      category: "Photography",
      title: "Photography",
      description: "Lorem ipsum dolar sit",
    },
    {
      id: 3,
      date: "23 Mar",
      category: "Banquet Hall",
      title: "Banquet Hall 1",
      description: "Lorem ipsum dolar sit",
    },
    {
      id: 4,
      date: "25 Mar",
      category: "Catering",
      title: "Catering",
      description: "Lorem ipsum dolar sit",
    },
    {
      id: 5,
      date: "05 Apr",
      category: "Decorator",
      title: "Decorator",
      description: "Lorem ipsum dolar sit",
    },
  ];
  const events = [
    {
      id: 1,
      date: "21-03-2024",
      category: "Catering",
      title: "Catering",
      description: "Lorem ipsum dolar sit",
      client: "Jasjot Singh",
      fromTime: "10:00",
      endTime: "22:00",
      fullDay: false,
    },
    {
      id: 2,
      date: "20-03-2024",
      category: "Photography",
      title: "Photography",
      description: "Lorem ipsum dolar sit",
      client: "Jasjot Singh",
      fromTime: null,
      endTime: null,
      fullDay: true,
    },
    {
      id: 3,
      date: "22-03-2024",
      category: "Banquet Hall",
      title: "Banquet Hall 1",
      description: "Lorem ipsum dolar sit",
      client: "Jasjot Singh",
      fromTime: "10:00",
      endTime: "22:00",
      fullDay: false,
    },
    {
      id: 4,
      date: "21-03-2024",
      category: "Catering",
      title: "Catering",
      description: "Lorem ipsum dolar sit",
      client: "Jasjot Singh",
      fromTime: null,
      endTime: null,
      fullDay: true,
    },
    {
      id: 5,
      date: "21-03-2024",
      category: "Decorator",
      title: "Decorator",
      description: "Lorem ipsum dolar sit",
      client: "Jasjot Singh",
      fromTime: "10:00",
      endTime: "22:00",
      fullDay: false,
    },
  ];
  return (
    <main className="w-full flex">
      <div className="p-5 min-h-screen w-full max-w-[845px]">
        <div className="max-full mb-10">
          <h1 className="font-playfair font-semibold text-2xl">Pending Requests</h1>
          <div className="w-full box-shadow rounded-xl py-8 px-6 my-5">
            <div>
              <b>Joaquín Torres</b> requested to book Banquet Hall 1 for <b>Birthday Party</b>
            </div>
            <div className="my-5 rounded bg-[#F9F9F9] py-2 px-4 flex justify-start items-stretch gap-5 w-fit">
              <div className="font-normal">
                <span className="text-[#969CA8] mr-3">On</span> Mon 28 Mar, 2024
              </div>
              <div className="w-[1px] bg-[#E7EBEE]"></div>
              <div className="font-normal">
                <span className="text-[#969CA8] mr-3">From</span> 3:30pm - 6:30pm
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <Image src={bookingImage} alt="booking-image" className="aspect-square rounded-full w-[42px]" />
                <div>
                  <div className="font-bold">Joaquín Torres</div>
                  <div className="text-xs">Requested on 18th Feb</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <button className="py-1 px-8 rounded bg-[#CBAD84] text-white border border-[#CBAD84]">View Details</button>
                <button className="py-1 px-8 rounded bg-white text-black border border-black">Decline</button>
                <button className="py-1 px-8 rounded bg-black text-white border border-black">Accept</button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-full mt-10">
          <h1 className="font-playfair font-semibold text-2xl mb-5">Calendar</h1>
          <Calendar events={events} />
        </div>
      </div>
      <div className="p-5 border-l border-[#E8E8E8] min-h-screen">
        <div className="w-full max-w-[210px]">
          <h1 className="font-playfair font-semibold text-lg pb-4 border-b-[#D9D9D9] border-b">Upcoming events</h1>
          {
            upcomingEvents.map(event => <UpcomingEventCard key={event.id} event={event} />)
          }
          <div className="my-4 bg-black text-white rounded-lg p-5">
            <h1 className="font-playfair text-xl font-semibold">Complete your Profile</h1>
            <p className=" text-sm mt-3 leading-7">Fill up all the details in your profile to finish the set up.</p>
            <button className="mt-5 bg-white text-black py-1 px-4 rounded-md leading-5">Complete Profile</button>
          </div>
          <div className="my-4 bg-gradient-to-r from-[#FCDBA7] to-[#F09F24] text-black rounded-lg p-5">
            <h1 className="font-playfair text-xl font-semibold">Get Premium Plans </h1>
            <p className=" text-sm mt-3 leading-7">Upgrade your plans for better listing & better income.</p>
            <button className="mt-5 bg-white text-black py-1 px-4 rounded-md leading-5">Explore Plans</button>
          </div>
        </div>
      </div>
    </main>
    // <div className="p-2">
    //   <Calendar />
    // </div>
  );
}
