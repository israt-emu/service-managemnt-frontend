/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "../ui/button";
import Swal from "sweetalert2";
import {useAppSelector} from "@/redux/hooks";

import Link from "next/link";
import {IBookingProps} from "@/interfaces/booking";
import {IService} from "@/interfaces/service";

const BookingCard = ({booking}: IBookingProps) => {
  const {user} = useAppSelector((state) => state.auth);

  return (
    <Card className="h-full border border-gray-300">
      <Link href={`/services/${booking._id}`}>
        <CardHeader>
          <img src={"https://www.shutterstock.com/shutterstock/photos/182991422/display_1500/stock-photo-red-sea-anemonefish-in-bubble-anemone-182991422.jpg"} alt="card image" className="h-48" />
          <CardTitle className="text-xl">{(booking?.service as IService).title}</CardTitle>
        </CardHeader>
        <CardContent className="font-mono">
          <p className="font-mono">{booking?.time}</p>
          <p>{booking?.status}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex items-center justify-between">
        <Button className="w-full bg-secondary text-white">Cancel</Button>
      </CardFooter>
    </Card>
  );
};

export default BookingCard;
