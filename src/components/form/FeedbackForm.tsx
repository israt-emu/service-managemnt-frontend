import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import {useAppSelector} from "@/redux/hooks";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import {useAddServiceMutation} from "@/redux/features/services/serviceApi";
import {useAddFeedbackMutation} from "@/redux/features/feedback/feedback";
import {StarIcon} from "lucide-react";

const FeedBackForm = () => {
  const {user} = useAppSelector((state) => state.auth);
  const [addFeedback, {data, isError, isSuccess}] = useAddFeedbackMutation();
  // Initialize state to hold form input values
  const [formData, setFormData] = useState({
    rating: 0,
    comments: "",
    user: user.id,
  });

  //setting form data to add service
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    const numericValue = name === "rating" ? parseFloat(value) : value;
    setFormData({...formData, [name]: numericValue});
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addFeedback(formData);
  };
  //showing success or error message
  const router = useRouter();
  useEffect(() => {
    if (!data?.success && isError) {
      Swal.fire("Oops!", `Something Went wrong`, "error");
    }

    if (data?.success && data?.data) {
      Swal.fire("Congratulations!", `You Give Feedback successfully!`, "success");
      router.push("/");
    }
  }, [isSuccess, isError, data, router]);

  return (
    <div className="w-10/12 mx-auto mt-20">
      <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
      <div className="flex flex-col items-center pt-6 space-y-3">
        <span className="text-center">How was your experience?</span>
        <div className="flex space-x-3">
          <StarIcon className="w-8 h-8 text-yellow-500" />
          <StarIcon className="w-8 h-8 text-yellow-500" />
          <StarIcon className="w-8 h-8 text-yellow-500" />
          <StarIcon className="w-8 h-8 text-yellow-500" />
          <StarIcon className="w-8 h-8 text-yellow-500" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-8 py-6 rounded">
        <div className="grid grid-cols-1 items-center gap-6 w-full my-2">
          <div className="flex flex-col">
            <label htmlFor="rating">Rating</label>
            <Input type="number" id="rating" name="rating" value={formData.rating} onChange={handleInputChange} required className="rounded" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="comments">Comments</label>

            <textarea rows="3" id="comments" name="comments" placeholder="Message..." onChange={handleInputChange} value={formData.comments} className="p-4 rounded-md resize-none border"></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="mt-2 gradient text-white button-shadow" type="submit">
            Leave Feedback
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FeedBackForm;
