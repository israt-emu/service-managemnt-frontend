import {IFaq} from "@/interfaces/faq";
import {useGetFaqsQuery} from "@/redux/features/faq/faq";
import React from "react";
import faqImg from "../../../assets/faq.png";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Image from "next/image";
const FAQ = () => {
  const {data, isLoading} = useGetFaqsQuery(undefined);
  return (
    <section className="w-11/12 md:px-8 py-12 mx-auto container grid grid-cols-2 mb-12 items-center">
      <div>
        <Image src={faqImg} width={450} height={220} alt="faq" className="card-shadow" />
      </div>
      <div>
        {isLoading ? (
          <h1 className="text-4xl font-bold">Loading....</h1>
        ) : (
          <div>
            {data?.data?.map((faq: IFaq, i: number) => (
              <div className="flex items-center gap-3">
                <Accordion key={i} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline text-secondary font-serif font-bold">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
