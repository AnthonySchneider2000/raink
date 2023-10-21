import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-16">
      <Card className="w-full flex flex-col gap-4 p-4">
        <CardHeader className="max-sm:p-0 sm:text-3xl">Login</CardHeader>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-40 max-sm:w-20 self-center mt-4">Login</Button>
      </Card>
    </main>
  );
}
