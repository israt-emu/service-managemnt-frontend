import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import {useAppSelector} from "@/redux/hooks";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import {useAddServiceMutation} from "@/redux/features/services/serviceApi";

const AddServiceForm = () => {
  const {user} = useAppSelector((state) => state.auth);
  const [addService, {data, isError, isSuccess}] = useAddServiceMutation();
  // Initialize state to hold form input values
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    duration: "",
    category: "",
    status: "available",
    description: "",
    images: images,
    addedBy: user.id,
  });
  //handle Images
  const handleImages = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const image = e.target.value;
    const newImages = [image, ...images];
    setImages(newImages);
  };
  //setting form data to add service
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addService(formData);
  };
  //showing success or error message
  const router = useRouter();
  useEffect(() => {
    if (!data?.success && isError) {
      Swal.fire("Oops!", `Something Went wrong`, "error");
    }

    if (data?.success && data?.data) {
      Swal.fire("Congratulations!", `Service Added successfully!`, "success");
      router.push("/dashboard/manage");
    }
  }, [isSuccess, isError, data, router]);

  return (
    <div className="w-10/12 mx-auto mt-4">
      <h1 className="text-3xl font-semibold text-center mb-3 font-serif">Add Service</h1>
      <form onSubmit={handleSubmit} className="px-6 py-8 bg-gray-200 rounded">
        <div>
          <label htmlFor="title">Title</label>
          <Input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required className="rounded my-2" />
        </div>

        <div className="grid grid-cols-2 items-center gap-2 w-full my-2">
          <div>
            <label htmlFor="price">Price</label>
            <Input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required className="rounded" />
          </div>

          <div>
            <label htmlFor="duration">Duration</label>
            <Input type="text" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} required className="rounded" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-2 w-full my-2">
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <Input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} required className="rounded" />
          </div>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea rows={4} className="w-full rounded" id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <Input type="text" id="image" name="image" value={formData.images.join()} onChange={handleInputChange} className="rounded" />
        </div>

        <Button className="mt-2" type="submit">
          Add Service
        </Button>
      </form>
    </div>
  );
};
export default AddServiceForm;
