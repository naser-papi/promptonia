"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { IPost } from "@/types/post";

interface PromptCardActionsPT {
  post: IPost;
}
const PromptCardActions = ({ post }: PromptCardActionsPT) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <>
      {session?.user?.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-end gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </>
  );
};

export default PromptCardActions;
