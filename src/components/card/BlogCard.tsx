import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {IBlogProps} from "@/interfaces/blog";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import Swal from "sweetalert2";
import {useEffect} from "react";
import {useDeleteBlogMutation} from "@/redux/features/blog/blog";
import Link from "next/link";
import Image from "next/image";
import blogImg from "../../../assets/blog.jpg";
import {useRouter} from "next/router";
const BlogCard = ({blog}: IBlogProps) => {
  const router = useRouter();
  //delete blog
  const [deleteBlog, {data: deleteData, isSuccess, isError}] = useDeleteBlogMutation();

  const handleDeleteBlog = (id: string) => {
    Swal.fire({
      title: "Do you want to delete this Blog?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(id);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  //showing success or error message on delete
  useEffect(() => {
    if (deleteData?.success && isSuccess) {
      Swal.fire("Great!", "Blog deleted successfully!", "success");
    } else if (!deleteData?.success && isError) {
      Swal.fire("Oops!", `Something went wrong`, "error");
    }
  }, [deleteData, isError, isSuccess]);
  return (
    <Card className="border border-gray-300 bg-gray-100">
      <CardHeader>
        <Image src={blogImg ? blogImg : "https://source.unsplash.com/200x200/?fashion?2"} alt="card-img" width={400} height={200} className="mx-auto" />
      </CardHeader>
      <CardContent className="">
        <CardTitle className="text-xl text-primary-foreground">{blog?.title}</CardTitle>
        <CardDescription>{blog?.description}</CardDescription>
      </CardContent>
      {router.pathname === "/" ? (
        <CardFooter className="font-mono flex justify-between items-center text-sm font-semibold">
          <div className="mr-3">{new Date(blog?.createdAt).toLocaleDateString()}</div>
          <span className="flex items-center">{blog?.views} views</span>
        </CardFooter>
      ) : (
        <CardFooter>
          <div onClick={() => handleDeleteBlog(blog._id)} className="mr-3">
            <AiFillDelete className="text-lg text-red-500 cursor-pointer" title="Delete" />
          </div>
          <Link href={`/dashboard/blogs/editblog/${blog._id}`}>
            <div>
              <AiFillEdit className="text-lg" title="Edit" />
            </div>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default BlogCard;
