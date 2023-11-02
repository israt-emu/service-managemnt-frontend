import BookingCard from "@/components/card/BookingCard";
import {IBooking} from "@/interfaces/booking";
import MainLayout from "@/layouts/MainLayout";
import {useGetBookingsByUserQuery} from "@/redux/features/bookings/bookingApi";
import {useAppSelector} from "@/redux/hooks";
import {MdEvent} from "react-icons/md";

export default function bookings() {
  const userId = useAppSelector((state) => state.auth.user.id);
  const {data, isLoading} = useGetBookingsByUserQuery(userId);
  console.log(data);
  return (
    <MainLayout>
      <section className="w-11/12 mx-auto container pt-24 pb-12">
        <h1 className="text-3xl font-serif mt-3 font-semibold mb-6 flex items-center">
          <MdEvent className=" text-primary mr-2" />
          Your Bookings____
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-5">
          {data?.data?.map((item: IBooking) => (
            <BookingCard key={item?._id} booking={item} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
