import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email.trim() || !password.trim()) {
      return Response.json(
        { success: false, data: null, statusCode: 400 },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db(process.env.DB_NAME);

    const user = await db
      .collection("users")
      .findOne({ email: email.toLowerCase() });

    if (!user) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "Invalid user",
          statusCode: 401,
        },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "Invalid password",
          statusCode: 401,
        },
        { status: 401 }
      );
    }

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_LOGIN_SECRET!, {
      expiresIn: "1d",
    });

    cookies().set("token", token, {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
    });

    return Response.json(
      {
        success: true,
        data: payload,
        message: "User logged in successfully",
        statusCode: 201,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        data: null,
        message: "Internal Server Error",
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}
