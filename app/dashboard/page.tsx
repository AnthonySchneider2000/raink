"use client"

import React from "react";
import { Button } from "@/components/ui/button";


function Title() {
  return (
    <h1 className="font-bold text-center 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl max-[200px]:text-2xl">
      Dashboard
    </h1>
  );
}

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-start gap-[5vh] py-24 px-16">
      <Title />
    </main>
  );
}
