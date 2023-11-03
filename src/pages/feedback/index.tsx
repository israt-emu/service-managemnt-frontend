import FeedBackForm from "@/components/form/FeedbackForm";
import MainLayout from "@/layouts/MainLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import React from "react";

const GiveFeedback = () => {
  return (
    <PrivateLayout>
      <FeedBackForm />
    </PrivateLayout>
  );
};

export default GiveFeedback;
