/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="absolute top-0 left-0 m-4 hover:scale-110 transition">
          <AiOutlineMenu size="2rem" />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Links</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* list of styled links */}
          <a href="/" className="w-full">
            <Button variant="ghost" className="justify-start w-full" size="lg">
              Home
            </Button>
          </a>
          <a href="/dashboard">
            <Button variant="ghost" className="justify-start w-full" size="lg">
              Dashboard
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
