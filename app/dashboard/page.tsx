"use client"

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
function SkeletonContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-[5vh] py-24 px-16">
      <h1>Dashboard</h1>
      <Skeleton className="w-full h-16" />
      <Skeleton className="w-full h-32" />
      <div className="grid grid-cols-2 gap-8 w-full">
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-full h-32" />
      </div>

      <div className="grid grid-cols-4 gap-8 w-full">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-full h-32" />
      </div>
    </main>
  );
}

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
