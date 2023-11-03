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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "@/components/ui/card";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

// create list form
// name required, private=true by default, optional: description, image
const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  image: z.string().optional(),
  private: z.boolean(),
});

function Title() {
  return (
    <h1 className="font-bold text-center 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl max-[200px]:text-2xl">
      Dashboard
    </h1>
  );
}

export default function Dashboard() {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      private: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("form data", data);
  };

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="flex flex-col items-center justify-start gap-[5vh] py-24 px-16">
      <Title />
      <Button onClick={handleButtonClick}>Show Form</Button>
      {showForm && (
        <Card className="w-full flex flex-col gap-4 p-4">
          <CardHeader className="max-sm:p-0 sm:text-3xl">Login</CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>*Name</FormLabel>
                    <FormControl>
                      <Input placeholder="List Name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Image</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter an Image URL" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="private"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormLabel htmlFor={field.name}>Private?</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <Button className="w-40 max-sm:w-20 self-center mt-4">Create List</Button>
              
            </form>
          </Form>
        </Card>
      )}
    </main>
  );
}
