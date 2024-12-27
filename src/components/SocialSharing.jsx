"use client";
import React, { useEffect, useState } from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
const SocialSharing = ({ title }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  console.log(currentUrl);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(currentUrl);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`,
    email: `mailto:?subject=${shareText}&body=${shareUrl}`,
  };

  const handleShare = (platformUrl) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const popupWidth = Math.floor(screenWidth * 0.9);
    const popupHeight = Math.floor(screenHeight * 0.9);
    const left = Math.floor((screenWidth - popupWidth) / 2);
    const top = Math.floor((screenHeight - popupHeight) / 2);
    window.open(
      platformUrl,
      "_blank",
      `noopener,noreferrer,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast.success("link copied successfully");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  return (
    <div>
      <Toaster />
      <div className="text-text flex gap-5 my-5">
        <button onClick={() => handleShare(socialLinks.twitter)}>
          {" "}
          <FaXTwitter />
        </button>

        <button onClick={() => handleShare(socialLinks.facebook)}>
          {" "}
          <FaSquareFacebook />
        </button>

        <button onClick={() => handleShare(socialLinks.linkedin)}>
          {" "}
          <TiSocialLinkedin />
        </button>

        <button onClick={() => handleShare(socialLinks.email)}>
          {" "}
          <MdEmail />
        </button>

        <button onClick={handleCopyLink}>
          {" "}
          <FaLink />
        </button>
      </div>
    </div>
  );
};

export default SocialSharing;
