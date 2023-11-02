import React from "react";
import SupportCard from "../card/SupportCard";

const Supports = () => {
  const supportArray = [
    {
      title: "Friendly team",
      text: "More than 100 teams",
      icon: "friend",
    },
    {
      title: "perfect venues",
      text: "the best & perfect venues",
      icon: "venue",
    },
    {
      title: "Unique Scenario",
      text: "We thinking out of the box",
      icon: "scenario",
    },
    {
      title: "Unforgettable Time",
      text: "We make you perfect event",
      icon: "time",
    },
    {
      title: "24/7 Hours Support",
      text: "anytime anywhere",
      icon: "support",
    },
    {
      title: "New & Briliant Idea",
      text: "we have million ideas",
      icon: "idea",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 w-11/12 mx-auto border-b border-r border-gray-300 -mt-8 button-shadow">
        {supportArray.map((support: {title: string; text: string; icon: string}, i: number) => (
          <SupportCard key={i} title={support.title} text={support.text} icon={support.icon} />
        ))}
      </div>
    </div>
  );
};

export default Supports;
