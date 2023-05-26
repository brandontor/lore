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
      <p>Positive Prompt</p>
      <p>Negative Prompt</p>
    </div>
  );
}

export default PromptContainer;
