import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

type Props = {};

function PromptContainer({}: Props) {
  return (
    <div className="border-t-[1px] border-b-[1px] border-nord3">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Positive Prompt</AccordionTrigger>
          <AccordionContent placeholder="What do you want to see?">
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Negative Prompt</AccordionTrigger>
          <AccordionContent placeholder="What don't you want to see?">
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default PromptContainer;
