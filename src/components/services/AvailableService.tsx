import {IService} from "@/interfaces/service";
import {useGetServicesQuery} from "@/redux/features/services/serviceApi";
import ServiceCard from "../card/ServiceCard";
import {HeartHandshakeIcon} from "lucide-react";
import {FaHandsHelping} from "react-icons/fa";

const AvailableService = () => {
  const {data} = useGetServicesQuery(undefined);
  return (
    <section className="mx-auto w-11/12 md:mt-24 pb-14 container">
      <h1 className="text-3xl font-serif mt-3 font-semibold mb-6 flex items-center">
        <FaHandsHelping className=" text-primary mr-2" />
        Our Available Services____
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 geid-cols-1 gap-6">{data?.data?.map((service: IService, i: number) => service?.status === "available" && <ServiceCard service={service} />)}</div>
    </section>
  );
};

export default AvailableService;
