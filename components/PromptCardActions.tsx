"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import { IPost } from "@/types/post";
import { useState } from "react";
import ConfirmModal from "@/components/ConfirmModal";

interface PromptCardActionsPT {
  post: IPost;
}
const PromptCardActions = ({ post }: PromptCardActionsPT) => {
  const { data: session } = useSession();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [lock, setLock] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const handleEdit = () => {
    if (lock) return;
    router.push("/edit-prompt/" + post._id);
  };
  const handleDelete = async () => {
    if (lock) return;
    setShowDeleteConfirm(true);
  };
  const confirmDelete = async () => {
    try {
      setLock(true);
      await fetch("/api/prompt/" + post._id, {
        method: "DELETE",
      });
      router.replace("/");
    } catch (ex) {
      console.log("ERROR: ", ex);
    } finally {
      setLock(false);
      setShowDeleteConfirm(false);
    }
  };
  return (
    <>
      <ConfirmModal
        showModal={showDeleteConfirm}
        message={"Are you sure for delete?"}
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteConfirm(false)}
      />
      {session?.user?.id === post.creator._id && pathName === "/profile" && (
        <div className="flex-end gap-4 border-t border-gray-100">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit{lock ? "..." : ""}
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete{lock ? "..." : ""}
          </p>
        </div>
      )}
    </>
  );
};

export default PromptCardActions;
