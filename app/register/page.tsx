"use client";

import React from "react";
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
import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().max(255),
  email: z.string().email(),
  password: z.string().min(8),
  confirmpassword: z.string().min(8),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });
  const { toast } = useToast();

  const [score, setScore] = useState(0);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("form data", data);
    // if the password and confirm password don't match, show an error
    if (data.password !== data.confirmpassword) {
      form.setError("confirmpassword", {
        message: "Passwords do not match",
      });
    } else if (score < 3) {
      form.setError("password", {
        message: "Password must be stronger",
      });
    } else {
      try {
        const response = await fetch("/api/CreateAccount", {
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
          description: "Successfully created account",
        });
      } catch (error: any) {
        toast({
          title: "Failed to create account",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-16">
      <Card className="w-full flex flex-col gap-4 p-4">
        <CardHeader className="max-sm:p-0 sm:text-3xl">Register</CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-8">
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
                <FormItem className="mb-4">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                  <PasswordStrengthBar
                    password={form.getValues("password")}
                    onChangeScore={(score) => setScore(score)}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-40 max-sm:w-20 mt-4 self-center">
              Register
            </Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}
