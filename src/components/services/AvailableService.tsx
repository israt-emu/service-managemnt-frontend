import {IService} from "@/interfaces/service";
import {useGetServicesQuery} from "@/redux/features/services/serviceApi";
import ServiceCard from "../card/ServiceCard";
import {HeartHandshakeIcon} from "lucide-react";

const AvailableService = () => {
  const {data} = useGetServicesQuery(undefined);
  return (
    <section className="mx-auto p-6 w-11/12 md:mt-20 mt-8">
      <h1 className="text-3xl font-serif mt-3 font-semibold mb-6 flex items-center">
        <HeartHandshakeIcon className="w-8 text-primary mr-2" />
        Our Available Services____
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">{data?.data?.map((service: IService, i: number) => service?.status === "available" && <ServiceCard service={service} />)}</div>
    </section>
  );
};

export default AvailableService;
