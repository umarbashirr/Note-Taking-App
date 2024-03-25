import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();

    if (!fullName?.trim() || !email.trim() || !password.trim()) {
      return Response.json(
        { success: false, data: null, statusCode: 400 },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db(process.env.DB_NAME);

    const isUserExist = await db
      .collection("users")
      .findOne({ email: email.toLowerCase() });

    if (isUserExist) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "User already exists!",
          statusCode: 401,
        },
        { status: 401 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      fullName: fullName.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const newUser = await db.collection("users").insertOne(user);

    if (!newUser) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "Unable to create user",
          statusCode: 401,
        },
        { status: 401 }
      );
    }

    return Response.json(
      {
        success: true,
        data: newUser,
        message: "User created",
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
