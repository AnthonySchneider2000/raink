import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { cookies } from 'next/headers';
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = cookies().has('loggedIn');
  console.log("Is logged in: ", loggedIn);
  const mode: string = "dark";
  return (
    <html lang="en" className={mode}>
      <body className={inter.className}>
        <Sidebar />
      <ThemeToggle currentTheme={mode} />
        {children}
      </body>
    </html>
  );
}
