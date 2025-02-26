import connect from "@/lib/db";
import User from "@/lib/modals/users";
import  { Types } from "mongoose";
import { NextResponse } from "next/server";
import { BadRequestException, HttpException } from "next-api-decorators";

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify(" error in fetching users " + error.mesage),
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const { email, username, password } = await request.json();
    await connect();
    const newUser = new User({ email, username, password });
    await newUser.save();

    return new NextResponse(
      JSON.stringify({
        message: "new user created successfullly",
        user: newUser,
      }),
      { status: 200 }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: " error in crating user ", error }),
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { newUsername, id } = body;
    await connect();
    if (!id || !newUsername) {
      throw new BadRequestException("id or password not found");
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new HttpException(404, "Invalid id");
    }

    console.log(body);
    const user = await User.findOne({ _id: new Types.ObjectId(id) });
    console.log(user);
    if (!user) {
      throw new BadRequestException("user not found ");
    } else {
      await User.updateOne({ _id: id }, { username: newUsername });
      return new NextResponse(
        JSON.stringify({ message: "user updated successfully" }),
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    if (error instanceof HttpException) {
      return new NextResponse(
        JSON.stringify({ message: error.message, status: error.statusCode })
      );
    }
  }
};
