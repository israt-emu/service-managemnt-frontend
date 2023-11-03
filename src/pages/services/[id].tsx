import ServiceDetailsCard from "@/components/card/ServiceDetailsCard";
import EditServiceForm from "@/components/form/EditServiceForm";
import MainLayout from "@/layouts/MainLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import {useGetSingleServiceQuery} from "@/redux/features/services/serviceApi";
import {useRouter} from "next/router";
import React from "react";

export default function ServiceDetails() {
  const router = useRouter();

  return (
    <PrivateLayout>
      <h1>Hello</h1>
      <ServiceDetailsCard />
    </PrivateLayout>
  );
}
