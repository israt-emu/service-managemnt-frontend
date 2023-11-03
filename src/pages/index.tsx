import MainLayout from "@/layouts/MainLayout";
import LeftContent from "@/components/feedback/LeftContent";
import Feedbacks from "@/components/feedback/Feedbacks";
import AvailableService from "@/components/services/AvailableService";
import LatestBlog from "@/components/blogs/LatestBlog";
import Banner from "@/components/home/Banner";
import Supports from "@/components/home/Supports";
import FAQ from "@/components/faq/FAQ";
import UpcomingEvents from "@/components/upcomingEvents/UpcomingEvents";

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Supports />
      {/* available services */}
      <AvailableService />
      <UpcomingEvents />
      <LatestBlog />
      <section className="w-11/12 py-12 mx-auto container grid grid-cols-1 gradient mb-12">
        <LeftContent />
        <Feedbacks />
      </section>
      <FAQ />
    </MainLayout>
  );
}
