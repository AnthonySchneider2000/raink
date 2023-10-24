"use client"

import { logout } from "@/lib/logout";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
//   logout button to display on the sidebar
    return (
        <Button
            variant="ghost"
            className="justify-start w-full max-sm:p-0"
            size="lg"
            onClick={logout}
        >
            Logout
        </Button>
    );
}