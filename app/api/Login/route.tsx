//api/Login/route.tsx
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();
  console.log("email", email);
  console.log("password", password);
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return new Response("No user exists with email " + email, {
        status: 404,
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return new Response("Incorrect password", {
        status: 401,
      });
    }else{
      return new Response("Successfully logged in", {
        status: 200,
      });
    }
  } catch (error: any) {
    console.error(error);
    return new Response("Failed to log in", {
      status: 500,
    });
  }
}
