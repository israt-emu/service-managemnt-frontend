import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import LeftContent from "@/components/feedback/LeftContent";
import Feedbacks from "@/components/feedback/Feedbacks";
import AvailableService from "@/components/services/AvailableService";
import LatestBlog from "@/components/blogs/LatestBlog";
import Banner from "@/components/home/Banner";
import Supports from "@/components/home/Supports";

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Supports />
      {/* available services */}
      <AvailableService />
      {/* upcoming services */}
      {/* events by category */}
      {/* overview  */}
      {/* //feedback  */}
      {/* latest news  */}
      <LatestBlog />
      <section className=" mx-auto p-6 grid lg:grid-cols-6 gap-4 bg-slate-300 mb-12">
        <LeftContent />
        <Feedbacks />
      </section>
    </MainLayout>
  );
}
