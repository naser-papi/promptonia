"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";
import { IPost } from "@/types/post";
const CreatPromptPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<IPost>();
  const { data: session } = useSession();
  const router = useRouter();
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const resp = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          ...post,
          userId: session?.user?.id,
        }),
      });
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
    <Form
      type={"Create"}
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatPromptPage;
