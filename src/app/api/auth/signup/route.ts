import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    await connectToDatabase();

    const userexists = await User.findOne({ email });
    if (userexists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const Newuser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = jwt.sign(
      { email: Newuser.email, id: Newuser._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
