import { Button } from "@/components/ui/button";
import Rain from "@/components/Rain/Rain";
import ExampleList from "@/components/ExampleList";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Raink",
  description: "A modern web-app for ranking your favorite things",
};

function Title() {
  return (
    <h1 className="font-bold text-center 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl max-[200px]:text-2xl">
      RAINK
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start gap-4 py-24">
        <Title />
        <ExampleList />
      </main>
    </>
  );
}
