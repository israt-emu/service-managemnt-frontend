import DashboardLayout from "@/layouts/Admin";
import Link from "next/link";
import {useGetBlogsQuery} from "@/redux/features/blog/blog";
import {IBlog} from "@/interfaces/blog";
import BlogCard from "@/components/card/BlogCard";
import {FaBlog} from "react-icons/fa";

const LatestBlog = () => {
  const {data, isLoading} = useGetBlogsQuery(undefined);
  return (
    <section className="md:my-20 mt-8 mx-auto w-11/12 container">
      <h1 className="text-3xl font-serif mt-3 font-semibold mb-6 flex items-center gap-3">
        <FaBlog className="text-primary" />
        Our Latest Blogs____
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
        {data?.data?.map((blog: IBlog, i: number) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
