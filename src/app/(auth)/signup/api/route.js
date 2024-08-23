import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = connectDB();
        const userCollection = db.collection("users");

        const exists = await userCollection.findOne({ email: newUser.email });
        if (exists) {
            return NextResponse.json(
                { message: "User exists!" },
                { status: 409 } 
            );
        }

        const res = await userCollection.insertOne(newUser);
        return NextResponse.json(
            { message: "User created!", data: res },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 } 
        );
        
    }
}
