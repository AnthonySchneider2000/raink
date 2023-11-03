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

// create list form
// name required, private=true by default, optional: description, image
const formSchema = z.object({
  name: z.string().min(1),
  private: z.boolean(),
  description: z.string().optional(),
  image: z.string().optional(),
});

function Title() {
  return (
    <h1 className="font-bold text-center 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl max-[200px]:text-2xl">
      Dashboard
    </h1>
  );
}

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      private: true,
      description: "",
      image: "",
    },
  });

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="flex flex-col items-center justify-start gap-[5vh] py-24 px-16">
      <Title />
      <Button onClick={handleButtonClick}>Show List</Button>
      {showForm && (
        <div>
          <div className="animate-in fade-in zoom-in-90 duration-500">list Item 1</div>
          <div className="animate-in fade-in zoom-in-90 duration-700">list Item 2</div>
          <div className="animate-in fade-in zoom-in-90 duration-1000">list Item 3</div>
        </div>
      )}
    </main>
  );
}
