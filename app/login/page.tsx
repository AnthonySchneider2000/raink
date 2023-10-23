"use client";

import React, { use } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
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
import useUserStore from "@/lib/store/userStore";
import { setUserId, setUsername, setDarkMode } from "@/lib/actions";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(), //we do not need a min length here because we're validating the password vs the database
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("form data", data);
    try {
      const response = await fetch("/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }

      // if the response is ok, show a success message
      toast({
        title: "Success",
        description: "Successfully logged in",
      });

      // update store
      const user = await response.json();
      useUserStore.getState().setUserId(user._id);
      useUserStore.getState().setUsername(user.username);
      useUserStore.getState().setLoginState(true);
      setUserId(user._id);
      setUsername(user.username);
      setDarkMode(user.darkMode);
      
      // make sure store was updated
      console.log("user: " + useUserStore.getState().username +" user id " + useUserStore.getState().userId + " logged in " + useUserStore.getState().isLoggedIn);


    } catch (error: any) {
      // if the error message contains "email", show an error on the email field
      if (error.message.includes("email")) {
        form.setError("email", {
          message: error.message,
        });
      }
      // if the error message contains "password", show an error on the password field
      if (error.message.includes("password")) {
        form.setError("password", {
          message: error.message,
        });
      }

      // if there was an error, show an error message
      toast({
        title: "Failed to log in",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-16">
      <Card className="w-full flex flex-col gap-4 p-4">
        <CardHeader className="max-sm:p-0 sm:text-3xl">Login</CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-40 max-sm:w-20 self-center mt-4">Login</Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}
