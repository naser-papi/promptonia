"use client";
import Image from "next/image";
import { useState } from "react";

interface CopyTextImagePT {
  text: string;
}
const CopyTextImage = ({ text }: CopyTextImagePT) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    window.navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="copy_btn" onClick={handleCopy}>
      <Image
        src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
        alt={copied ? "tick_icon" : "copy_icon"}
        width={12}
        height={12}
      />
    </div>
  );
};

export default CopyTextImage;
