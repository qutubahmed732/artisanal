import { NextResponse } from "next/server";
import connect from "../../lib/db"
import Feedback from "../../lib/modals/feedback";

export const POST = async (request: Request) => {
  try {
    const body = await request.json()
    await connect()
    const newFeedback = new Feedback(body);
    await newFeedback.save();

    return new NextResponse(JSON.stringify({
      message: "message has sent",
      feedback: newFeedback,
      status: 200
    }))
  } catch (error:any) {
    return new NextResponse(JSON.stringify({
      message: "Error in sending message",
      feedback: error.message,
      status: 500
    }));
  }
}