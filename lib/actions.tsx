"use server"

import { cookies } from "next/headers";

export async function setDarkMode(isDarkMode: boolean) {
    cookies().set("darkMode", isDarkMode.toString());
}

export async function setUserId(userId: string) {
    cookies().set("userId", userId);
}

export async function setUsername(username: string) {
    cookies().set("username", username);
}