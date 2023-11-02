import {IBooking} from "@/interfaces/booking";
import {IService} from "@/interfaces/service";
import {IUser} from "@/interfaces/user";
import {useGetBookingsQuery} from "@/redux/features/bookings/bookingApi";
import {Calendar, Clock1} from "lucide-react";
import Image from "next/image";
import React from "react";
import {MdEvent} from "react-icons/md";

const UpcomingEvents = () => {
  const {data} = useGetBookingsQuery(undefined);
  return (
    <section className="mx-auto w-11/12 container py-20">
      <h1 className="text-3xl font-serif mt-3 font-semibold mb-6 flex items-center gap-3">
        <MdEvent className="text-primary" />
        Upcoming Events____
      </h1>
      <div className="grid grid-cols-2 gap-6 mt-5">
        {data?.data?.slice(0, 2).map((event: IBooking, i: number) => (
          <div key={i} className="grid grid-cols-2 gap-2 bg-white p-4 rounded card-shadow">
            <div>
              <h1 className="font-serif font-semibold text-xl mb-2">{(event.service as IService).title}</h1>
              <p className=" mb-2">
                Booked By:
                {(event.user as IUser).name.firstName} {(event.user as IUser).name.lastName}
              </p>
              <h1 className="flex items-center gap-2 mb-2">
                <div className="bg-secondary w-8 h-8 rounded-full">
                  <Clock1 className="mx-auto mt-1 text-white" />
                </div>
                <span className="font-mono ">{event.time}</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <div className="bg-secondary w-8 h-8 rounded-full">
                  <Calendar className="mx-auto mt-1 text-white" />
                </div>
                <span className="font-mono ">{event.date}</span>
              </h1>
            </div>
            <div>
              <Image src="https://source.unsplash.com/random/480x360" width={400} height={200} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
