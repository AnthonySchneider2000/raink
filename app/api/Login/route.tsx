//api/Login/route.tsx
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();
  console.log("email", email);
  console.log("password", password);
  try {
    const user = await User.findOne({ email, password });

    if (user) {
      // User authenticated successfully
      return new Response("Successfully logged in", {
        status: 200,
      });
    } else {
      // User not found or invalid credentials
      return new Response("Invalid credentials", {
        status: 401,
      });
    }
  } catch (error: any) {
    console.error(error);
    return new Response("Failed to log in", {
      status: 500,
    });
  }
}
