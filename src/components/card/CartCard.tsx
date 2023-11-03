import {useEffect} from "react";
import {Card, CardContent} from "../ui/card";
import {Button} from "../ui/button";

import {useDeleteToCartMutation, useGetSingleCartQuery, useHandleQuantityMutation} from "@/redux/features/cart/cartApi";
import {useAppSelector} from "@/redux/hooks";
import Swal from "sweetalert2";
import {ICartProps} from "@/interfaces/cart";
import {DeleteIcon} from "lucide-react";
import {useAddBookingMutation} from "@/redux/features/bookings/bookingApi";
import {MdDelete, MdEvent} from "react-icons/md";
import {IService} from "@/interfaces/service";

const CartCard = ({cart}: ICartProps) => {
  const {data: cartData} = useGetSingleCartQuery({
    id: cart.serviceId,
  });

  //remove cart from cart
  const {user} = useAppSelector((state) => state.auth);

  const [deleteToCart, {data, isError, isSuccess}] = useDeleteToCartMutation();

  const handleDelete = () => {
    deleteToCart({
      user: user.id,
      serviceId: cart.serviceId,
    });
  };

  //showing success or error message on delete
  useEffect(() => {
    if (!data?.success && isError) {
      Swal.fire("Oops!", `Something Went wrong`, "error");
    }

    if (data?.success && data?.data) {
      Swal.fire("Congratulations!", `cart Deleted from cart successfully!`, "success");
    }
  }, [isSuccess, isError, data]);
  const currentDate = new Date().toISOString().split("T")[0];

  // Get the current time in HH:mm format (e.g., "10:30")
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [book, {data: bookingData, isError: bookingError, isSuccess: bookingSuccess}] = useAddBookingMutation();
  const handleBook = () => {
    if (user.id) {
      book({
        totalCost: cart?.price,
        service: cart?.serviceId,
        user: user.id,
        date: currentDate,
        time: currentTime,
      });
    } else {
      Swal.fire("Sorry!", `You have to login first!`, "error");
    }
  };
  useEffect(() => {
    if (!bookingData?.success && bookingError) {
      Swal.fire("Oops!", `Something Went wrong`, "error");
    }

    if (bookingData?.success && bookingData?.data) {
      Swal.fire("Congratulations!", `Booking  successfully completed!`, "success");
    }
  }, [bookingSuccess, bookingData, bookingError]);
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={cartData?.data?.image ? cartData?.data?.image : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leadi sm:pr-8">{(cart?.serviceId as IService)?.title}</h3>
              <p className="text-sm dark:text-gray-400">{(cart?.serviceId as IService)?.category}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold font-mono">{(cart?.price * cart.quantity).toFixed(2)}৳</p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
              <MdDelete className="text-xl text-red-400 cursor-pointer" onClick={handleDelete} />
              <span>Remove</span>
            </button>
            <button type="button" className="flex items-center px-2 py-1 space-x-1" onClick={() => handleBook()}>
              <MdEvent />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
