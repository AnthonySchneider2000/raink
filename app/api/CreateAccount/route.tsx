import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  await dbConnect();
  const { email, password, username } = await req.json();
  console.log("email", email);
  console.log("password", password);
  console.log("username", username);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("creating user");
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });
    console.log("user created");
    return Response.json({
      message: "Successfully created account",
      user,
    });
  } catch (error: any) {
    console.error(error);
    if (error.code === 11000) {
      let emailExists: boolean = false;
      let usernameExists: boolean = false;
      if (error.keyPattern.email) {
        emailExists = true;
      }
      if (error.keyPattern.username) {
        usernameExists = true;
      }
      let message = "";
      if (emailExists && usernameExists) {
        message = "Email and username already exist";
      } else if (emailExists) {
        message = "Email already exists";
      } else if (usernameExists) {
        message = "Username already exists";
      }
      return new Response(message, {
        status: 400,
      });
    } else {
      return Response.json({
        message: "Failed to create account",
        status: 500,
      });
    }
  }
}
