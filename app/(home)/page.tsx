import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const CurrentContent = () => {
  return <div>Hello Current</div>;
};

const PreviousContent = () => {
  return <div>Hello Previous</div>;
};

function IndexPage({}: Props) {
  return (
    <main className="container mx-auto py-8">
      <Tabs defaultValue="current" className="w-[400 px]">
        <TabsList>
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="previous">Previous</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          <CurrentContent />
        </TabsContent>
        <TabsContent value="previous">
          <PreviousContent />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default IndexPage;
