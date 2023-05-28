import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type Props = {};

const LinksContainer = () => {
  return (
    <div className="w-full border-t-[1px] border-nord3">
      <Github></Github>
      <Twitter></Twitter>
    </div>
  );
};

function PromptContainer({}: Props) {
  return (
    <div className="border-t-[1px] border-b-[1px] border-nord3">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Positive Prompt</AccordionTrigger>
          <AccordionContent placeholder="What do you want to see?"></AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Negative Prompt</AccordionTrigger>
          <AccordionContent placeholder="What don't you want to see?"></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function SideBarNav({}: Props) {
  return (
    <aside className="h-full w-64 border-r-[1px] border-nord3 flex flex-col justify-between">
      <div className="flex flex-col">
        <Button className="mx-auto m-10">Generate</Button>
        <PromptContainer></PromptContainer>
      </div>

      <LinksContainer />
    </aside>
  );
}

export default SideBarNav;
