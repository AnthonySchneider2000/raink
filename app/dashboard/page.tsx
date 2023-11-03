"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

function Title() {
  return (
    <h1 className="font-bold text-center 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl max-[200px]:text-2xl">
      Dashboard
    </h1>
  );
}

export default function Dashboard() {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <main className="flex flex-col items-center justify-start gap-[5vh] py-24 px-16">
      <Title />
      <Button onClick={handleButtonClick}>Show List</Button>
      {showList && (
        <div>
          <div className="animate-in fade-in zoom-in-90 duration-500">list Item 1</div>
          <div className="animate-in fade-in zoom-in-90 duration-700">list Item 2</div>
          <div className="animate-in fade-in zoom-in-90 duration-1000">list Item 3</div>
        </div>
      )}
    </main>
  );
}
