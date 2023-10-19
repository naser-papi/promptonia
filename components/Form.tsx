"use client";
import { IPost } from "@/types/post";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface CreateFormPT {
  type: string;
  data: IPost;
}

const Form = ({ type, data }: CreateFormPT) => {
  const [post, setPost] = useState<IPost>(data);
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const api = {
        url: type == "Edit" ? "/api/prompt/" + data._id : "/api/prompt/new",
        options:
          type == "Edit"
            ? {
                method: "PUT",
                body: JSON.stringify({
                  prompt: post.prompt,
                  tag: post.tag,
                }),
              }
            : {
                method: "POST",
                body: JSON.stringify({
                  ...post,
                  creator: session?.user,
                }),
              },
      };
      const resp = await fetch(api.url, { ...api.options } as any);
      if (resp.ok) {
        router.push("/");
      }
    } catch (ex) {
      console.error(ex);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className={"w-full max-w-full flex-start flex-col"}>
      <h1 className={"head_text text-center"}>
        <span className={"blue_gradient"}>{type} Post</span>
      </h1>
      <p className={"desc text-left max-w-md"}>
        {type} post and share amazing prompt with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        className={"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"}
        onSubmit={handleSubmit}
      >
        <label>
          <span
            className={"font-satoshi font-semibold text-base text-gray-700"}
          >
            Your AI Prompt
          </span>
          <textarea
            value={post ? post.prompt : ""}
            placeholder={"write your placeholder..."}
            required
            className={"form_textarea"}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          ></textarea>
        </label>
        <label>
          <span
            className={"font-satoshi font-semibold text-base text-gray-700"}
          >
            Tag <span className={"font-normal"}>(#web, #idea, #AI)</span>
          </span>
          <input
            value={post.tag}
            placeholder={"#tag"}
            required
            className={"form_input"}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          ></input>
        </label>
        <div className={"flex-end mx-3 mb-5 gap-4"}>
          <Link href={"/"} className={"text-gray-500 text-sm"}>
            Cancel
          </Link>
          <button
            type={"submit"}
            disabled={submitting}
            className={
              "px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            }
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
