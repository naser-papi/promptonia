import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/utils/database";
import Prompt from "@/models/prompt";

export async function GET(req: NextRequest) {
  try {
    const searchText = req.nextUrl?.searchParams?.get("search");
    await connectToDb();
    let list: Omit<any, never>[];
    if (searchText) {
      const regex = new RegExp(searchText, "i");
      list = await Prompt.find({
        $or: [
          {
            tag: { $regex: regex },
          },
          {
            prompt: { $regex: regex },
          },
        ],
      }).populate("creator");
    } else {
      list = await Prompt.find().populate("creator");
    }
    return NextResponse.json(list, { status: 200 });
  } catch (err) {
    console.log("fetch prompts...", err);
    return new Response("Something wen wrong...", { status: 500 });
  }
}
