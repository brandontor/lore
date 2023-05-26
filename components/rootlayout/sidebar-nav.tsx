import React from "react";
import { Button } from "@/components/ui/button";
import { PromptContainer } from "@/components/rootlayout";
type Props = {};

function SideBarNav({}: Props) {
  return (
    <aside className="h-screen w-64 border-r-[1px] border-nord3 flex flex-col ">
      <Button className="mx-auto m-10">Generate</Button>
      <PromptContainer></PromptContainer>
    </aside>
  );
}

export default SideBarNav;
