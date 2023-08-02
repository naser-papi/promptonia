import {NextRequest, NextResponse} from "next/server";
import {IPost} from "@/types/post";
import {connectToDb} from "@/utils/database";
import Prompt from "@/models/prompt";
export async function POST(req:NextRequest){
    const {prompt,tag,userId} = await req.json() as IPost;
    
    try {
        await connectToDb();
        const newPrompt = new Prompt({
            creator:userId,
            tag,
            prompt
        });
        await newPrompt.save();

        return NextResponse.json(newPrompt);
    }catch (ex) {
        console.error("create prompt",ex);
        return new Response("something went wrong",{status:500});
    }
    
}