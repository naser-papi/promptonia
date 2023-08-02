"use client";
import { useContext } from "react";
import { IPost } from "@/types/post";
import Image from "next/image";
import ProfileImage from "@/public/assets/images/profile.png";
import CopyTextImage from "@/components/CopyTextImage";
import PromptCardActions from "@/components/PromptCardActions";
import { PromptListContext } from "@/components/PromptListWrapper";

interface PromptCardPT {
  post: IPost;
}

const PromptCard = ({ post }: PromptCardPT) => {
  const { setSearchText, list } = useContext(PromptListContext);
  const handleProfileClick = () => {
    setSearchText(post.creator.username);
  };
  const handleTagClick = () => {
    setSearchText(post.tag);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image || ProfileImage}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {list.length > 0 ? post.creator.username : "list empty"}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <CopyTextImage text={post.prompt} />
      </div>

      <p className="prompt_text my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>
      <p
        className="font-inter mt-auto text-sm blue_gradient cursor-pointer"
        onClick={handleTagClick}
      >
        #{post.tag}
      </p>

      <PromptCardActions post={post} />
    </div>
  );
};

export default PromptCard;
