export type IBooking = {
  _id: string;
  totalCost: number;
  date: string;
  time: string;
  cart: string;
  service: string;
  user: string;
  status: "pending" | "confirmed" | "canceled";
};

export type IBookingsProps = {
  booking: IBooking[];
};
export type IBookingProps = {
  booking: IBooking;
};
