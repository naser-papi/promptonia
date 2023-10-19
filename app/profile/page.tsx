"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Profile from "@/components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(`/api/users/${session?.user.id}/posts`, {
        cache: "no-store",
      });
      const data = await resp.json();
      setPosts(data);
    };
    //console.log("session", session);
    if (session?.user.id) {
      fetchPosts().then();
    } else {
      console.log("session...", session);
    }
  }, [session, session?.user]);
  return (
    <Profile
      name={"My"}
      desc={"Welcome to your personalized profile page"}
      data={posts}
    ></Profile>
  );
};

export default MyProfile;
