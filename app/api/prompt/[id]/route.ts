import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/utils/database";
import Prompt from "@/models/prompt";
import { IPost } from "@/types/post";

export async function GET(req: NextRequest, { params }) {
  try {
    await connectToDb();
    const byId = await Prompt.findById(params.id);
    if (byId) {
      return NextResponse.json(byId);
    } else {
      return new Response("invalid prompt id", { status: 406 });
    }
  } catch (ex) {
    console.error("find prompt by id", ex);
    return new Response("something went wrong...", { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }) {
  try {
    const post = (await req.json()) as IPost;
    await connectToDb();
    const updated = await Prompt.findByIdAndUpdate(params.id, {
      prompt: post.prompt,
      tag: post.tag,
    });
    return NextResponse.json(updated);
  } catch (ex) {
    console.error("update prompt error:", ex);
    return new Response("something went wrong...", { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }) {
  try {
    await connectToDb();
    await Prompt.findByIdAndDelete(params.id);
    return new Response(params.id, { status: 200 });
  } catch (ex) {
    console.log("error while delete post: ", ex);
    return new Response("something went wrong...", { status: 500 });
  }
}
