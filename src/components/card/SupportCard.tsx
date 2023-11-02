import {ISupportProps} from "@/interfaces/service";
import {Clock1, GlassWaterIcon, LucideHeartHandshake, PartyPopperIcon, PhoneCallIcon} from "lucide-react";
import React from "react";
import {AiFillBulb} from "react-icons/ai";
import {FaVenus} from "react-icons/fa";

const SupportCard = ({title, text, icon}: ISupportProps) => {
  return (
    <div className="bg-white grid grid-cols-4 border border-gray-300 border-b-0 border-r-0 p-4 items-center hover:gradient hover:transition-all transition duration-100 ease-in-out m-0 group">
      <div className="col-span-1 w-16 h-16 rounded-full bg-gray-200">
        {icon === "friend" && <LucideHeartHandshake className="mx-auto mt-5 text-primary" />}
        {icon === "venue" && <FaVenus className="mx-auto mt-5 text-2xl text-primary" />}
        {icon === "scenario" && <PartyPopperIcon className="mx-auto mt-5 text-primary" />}
        {icon === "time" && <Clock1 className="mx-auto mt-5 text-primary" />}
        {icon === "support" && <PhoneCallIcon className="mx-auto mt-5 text-primary" />}
        {icon === "idea" && <AiFillBulb className="mx-auto mt-5 text-2xl text-primary" />}
      </div>
      <div className="col-span-3">
        <h2 className="capitalize font-bold text-lg group-hover:text-white">{title}</h2>
        <p className="capitalize font-semibold text-gray-500 text-sm group-hover:text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default SupportCard;
