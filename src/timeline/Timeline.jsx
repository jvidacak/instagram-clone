import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "jvidacak",
      postImage: "",
      likes: 128,
      timestamp: "6h",
    },
    {
      user: "Toni.Zovko",
      postImage:
        "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80",
      likes: 256,
      timestamp: "8h",
    },
    {
      user: "MarioK",
      postImage:
        "https://media.istockphoto.com/id/982413458/photo/stari-most.jpg?s=612x612&w=0&k=20&c=33pOEHMkXQGlGUR1UZ3VLzQI1D-4rfg7mNPeRKCPYBk=",
      likes: 64,
      timestamp: "10h",
    },
    {
      user: "Jelena.Horvat",
      postImage:
        "https://media.istockphoto.com/id/982413458/photo/stari-most.jpg?s=612x612&w=0&k=20&c=33pOEHMkXQGlGUR1UZ3VLzQI1D-4rfg7mNPeRKCPYBk=",
      likes: 64,
      timestamp: "10h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              like={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
