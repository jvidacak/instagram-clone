import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"

const Post = ({user, postImage, likes, timestamp}) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuth">
        <Avatar>{user.charAt(0).toUppercase}</Avatar>
        {user} · <span>{timestamp}</span>
        </div>
        
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400" alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
            <div className="post__iconsMain">
                <FavoriteBorderIcon className="postIcon" />
                <ChatBubbleOutlineIcon className="postIcon" />
                <TelegramIcon className="postIcon" />
            </div>
                <div className="post__iconSave">
                <BookmarkBorderIcon className="postIcon" />
            </div>
        </div>
        Liked by 128 People.
      </div>
    </div>
  );
};

export default Post;
