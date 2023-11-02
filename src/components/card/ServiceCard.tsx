/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

import {Button} from "../ui/button";

import {useAddToCartMutation} from "@/redux/features/cart/cartApi";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useAppSelector} from "@/redux/hooks";
import {IServiceProps} from "@/interfaces/service";
import Link from "next/link";

const ServiceCard = ({service}: IServiceProps) => {
  //
  const [quantity, setQuantity] = useState(1);
  const {user} = useAppSelector((state) => state.auth);
  //adding service to cart
  const [addToCart, {data, isSuccess, isError}] = useAddToCartMutation();
  const handleAddToCart = () => {
    if (user.id) {
      addToCart({
        price: service?.price,
        serviceId: service?._id,
        quantity: quantity,
        user: user.id,
      });
    } else {
      Swal.fire("Sorry!", `You have to login first!`, "error");
    }
  };

  //showing success or error message when adding service
  useEffect(() => {
    if (!data?.success && isError) {
      Swal.fire("Oops!", `Something Went wrong`, "error");
    }

    if (data?.success && data?.data) {
      Swal.fire("Congratulations!", `service Added to cart successfully!`, "success");
    }
  }, [isSuccess, isError, data]);
  return (
    <Card className="h-full border border-gray-300 bg-gray-100 hover:card-shadow">
      <Link href={`/services/${service._id}`}>
        <CardHeader>
          <img src={"https://www.shutterstock.com/shutterstock/photos/182991422/display_1500/stock-photo-red-sea-anemonefish-in-bubble-anemone-182991422.jpg"} alt="card image" className="h-48" />
          <CardTitle className="text-xl mb-0">{service?.title}</CardTitle>
        </CardHeader>
        <CardContent className="py-1.5 mt-0 font-mono">
          <p className="">Category:{service?.category}</p>
          <p className="capitalize">{service?.status}</p>
          <p className="font-semibold">{service?.price}৳</p>
        </CardContent>
      </Link>
      <CardFooter className="flex items-center justify-between">
        <button onClick={handleAddToCart} className="py-1.5 bg-secondary text-white px-3 rounded w-full">
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
