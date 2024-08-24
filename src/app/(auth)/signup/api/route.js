import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    const exists = await userCollection.findOne({ email: newUser.email });
    if (exists) {
      return NextResponse.json(
        { message: "User exists!" },
        { status: 409 }
      );
    }
    const hash = bcrypt.hashSync(newUser.password, 14);

    const res = await userCollection.insertOne({...newUser, password: hash});
    return NextResponse.json(
      { message: "User created!", data: res },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  return new Response('Hello from the server!');
};
