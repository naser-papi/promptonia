import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/utils/database";
import Prompt from "@/models/prompt";

export async function GET(req: NextRequest, { params }) {
  try {
    await connectToDb();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator",
    );
    return NextResponse.json(prompts);
  } catch (err) {
    console.log("fetch posts...", err);
    return new Response("Something wen wrong...", { status: 500 });
  }
}
