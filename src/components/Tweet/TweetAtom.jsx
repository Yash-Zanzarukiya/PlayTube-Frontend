import React, { useEffect, useRef } from "react";
import { Button, CommentLike, LikesComponent } from "../index";
import { useState } from "react";
import { formatTimestamp } from "../../helpers/formatFigures";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteTweet, getTweet, updateTweet } from "../../app/Slices/tweetSlice";

function TweetAtom({ tweet, owner }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(tweet?.content);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  function handleCancel() {
    setIsEditing(false);
    setContent(tweet.content);
  }

  function handleEditing() {
    setIsEditing(true);
  }

  function handleUpdate() {
    if (!content.trim()) {
      toast.warning("Please enter some message");
      return;
    } else if (content.trim()?.length < 10) {
      toast.error("Minimum 10 characters are required");
      return;
    } else if (content.trim()?.length > 80) {
      toast.error("Maximum 80 characters are allowed");
      return;
    }
    dispatch(updateTweet({ tweetId: tweet._id, data: { tweet: content } }));
    setIsEditing(false);
  }

  function handleDelete() {
    dispatch(deleteTweet({ tweetId: tweet._id })).then(() => {
      dispatch(getTweet(tweet.owner._id));
    });
  }

  return (
    <>
      <div className="h-14 w-14 shrink-0">
        <img
          src={tweet.owner?.avatar}
          alt={tweet.owner?.username}
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="w-full">
        <h4 className="mb-1 flex items-center gap-x-2">
          <span className="font-semibold">{tweet.owner?.fullName}</span> 
          <span className="inline-block text-sm text-gray-400">
            {formatTimestamp(tweet.createdAt)}
          </span>
        </h4>
        <p className="mb-2">
          <input
            ref={inputRef}
            type="text"
            name="tweet"
            onChange={(e) => setContent(e.target.value)}
            disabled={!owner || !isEditing}
            className=" w-[70%] bg-transparent outline-none border-b-[1px] border-transparent enabled:border-[#ae7aff] focus:border-[#ae7aff]"
            value={content}
          />
        </p>
        <LikesComponent
          tweetId={tweet._id}
          isLiked={tweet.isLiked}
          totalLikes={tweet.totalLikes}
          isDisLiked={tweet.isDisLiked}
          totalDisLikes={tweet.totalDisLikes}
        />
      </div>
      {/* Tweet controls - Only Owner */}
      {owner && (
        <form className="flex items-end">
          <span className=" flex justify-end">
            {/* Delete and Cancel button */}
            <Button
              type="button"
              onClick={() => {
                isEditing ? handleCancel() : handleDelete();
              }}
              className={` rounded-3xl pt-0 bg-transparent hover:border hover:border-b-white disabled:cursor-not-allowed text-white text-sm font-semibold px-1 pb-1 mr-2 ${
                isEditing ? "hover:bg-gray-700" : "hover:bg-red-400 hover:text-black "
              }`}
            >
              {isEditing ? "Cancel" : "Delete"}
            </Button>

            {/* Edit & Update Button */}
            <Button
              type="button"
              onClick={() => {
                isEditing ? handleUpdate() : handleEditing();
              }}
              disabled={isEditing ? tweet.content === content || !content.trim() : false}
              className="rounded-3xl pt-0 bg-[#ae7aff] disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed hover:bg-[#b48ef1] text-sm text-black font-semibold border border-b-white px-2 pb-1"
            >
              {isEditing ? "Update" : "Edit"}
            </Button>
          </span>
        </form>
      )}
    </>
  );
}

export default TweetAtom;
