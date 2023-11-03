import ServiceCard from "@/components/card/ServiceCard";
import {IService} from "@/interfaces/service";
import PrivateLayout from "@/layouts/PrivateLayout";
import {useGetServicesQuery} from "@/redux/features/services/serviceApi";
import {useAppSelector} from "@/redux/hooks";

export default function index() {
  const searchTerm = useAppSelector((state: {filter: {searchText: any}}) => state.filter.searchText);
  const {data, isLoading} = useGetServicesQuery("");

  if (isLoading) {
    return <p>...loading</p>;
  }

  const filteredServices = data?.data?.filter((service: IService) => service.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <PrivateLayout>
      <div className="w-11/12 mx-auto container pt-12">
        <h1 className="text-3xl font-serif font-semibold mt-4">Matched Services:</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {filteredServices?.map((item: IService) => (
            <ServiceCard key={item._id} service={item} />
          ))}
        </div>
      </div>
    </PrivateLayout>
  );
}
