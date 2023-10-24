import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import Rain from "@/components/Rain/Rain";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = cookies().get("userId");
  let loggedIn = false;
  if (userId) {
    // if the name is not "", then the user is logged in
    if(userId.value !== "") loggedIn = true;
  } 
  console.log("Is logged in: ", loggedIn);
  const mode: string = "dark";
  return (
    <html lang="en" className={mode}>
      <body className={inter.className}>
        <Rain />
        <Toaster />
        <Sidebar />
        <ThemeToggle currentTheme={mode} />
        {children}
      </body>
    </html>
  );
}
