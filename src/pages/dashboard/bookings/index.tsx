import BookingTable from "@/components/table/BookingTable";
import DashboardLayout from "@/layouts/Admin";
import React from "react";

export default function users() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold font-serif">All Bookings:</h1>
      <BookingTable />
    </DashboardLayout>
  );
}
