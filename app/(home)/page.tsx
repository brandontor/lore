import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

type BookCover = {
  imageURL?: string;
};

const BookCover = (props: BookCover) => {
  return <div>{props.imageURL ? <img></img> : <p>Hello World</p>}</div>;
};

const CurrentContent = () => {
  return (
    <Card className="h-[650px] container mx-auto">
      <CardHeader className="text-nord4 flex items-center">
        <CardTitle>Sample book Title</CardTitle>
      </CardHeader>
      <CardContent>
        <BookCover></BookCover>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

const PreviousContent = () => {
  return <div>Hello Previous</div>;
};

function IndexPage({}: Props) {
  return (
    <main className="container mx-auto py-8">
      <Tabs defaultValue="current" className="w-[400 px] h-full">
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
