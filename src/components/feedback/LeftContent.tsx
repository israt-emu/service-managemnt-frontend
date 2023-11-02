import Link from "next/link";
import {MdFeedback} from "react-icons/md";

const LeftContent = () => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-2xl text-white font-semibold font-serif flex items-center gap-2">
        <MdFeedback />
        Customer's Feedback
      </h1>
      <Link href={"/feedback"}>
        <button className="py-2 px-4 bg-secondary button-shadow text-white mt-2 ">Give Feedback</button>
      </Link>
    </div>
  );
};

export default LeftContent;
