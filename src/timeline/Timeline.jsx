import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "jvidacak",
      postImage: "https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1700611200&semt=ais",
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
        "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
      likes: 32,
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
              likes={post.likes}
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
