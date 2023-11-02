import ServiceCard from "@/components/card/ServiceCard";
import Navbar from "@/components/shared/Navbar";
import {IService} from "@/interfaces/service";
import MainLayout from "@/layouts/MainLayout";
import {useGetServicesQuery} from "@/redux/features/services/serviceApi";

export default function index() {
  const {data} = useGetServicesQuery("");
  console.log(data);

  return (
    <MainLayout>
      <div className="w-11/12 mx-auto pb-6 container pt-20">
        <h1 className="text-3xl font-serif font-semibold mt-4">All Services:</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 geid-cols-1 mt-6 gap-6">
          {data?.data?.map((item: IService) => (
            <ServiceCard key={item._id} service={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
