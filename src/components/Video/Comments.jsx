import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideoComments } from "../../app/Slices/commentSlice";
import { formatTimestamp } from "../../helpers/formatFigures";
import { LikesComponent } from "../index";
import CommentLike from "./CommentLike";

function Comments({ videoId }) {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoComments(videoId)).then((res) => {
      setComments(res.payload);
    });
  }, [videoId]);

  return comments?.length > 0 ? (
    <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px]  peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
      <div className="block">
        <h6 className="mb-4 font-semibold">{comments.length} Comments</h6>
        <input
          type="text"
          className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
          placeholder="Add a Comment"
        />
      </div>
      <hr className="my-4 border-white" />
      {comments.map((comment) => (
        <div key={comment._id}>
          <div className="flex gap-x-4">
            <div className="mt-2 h-11 w-11 shrink-0">
              <Link to={`/user/${comment.owner.username}`}>
                <img
                  src={comment.owner.avatar}
                  alt={comment.owner.username}
                  className="h-full w-full rounded-full"
                />
              </Link>
            </div>
            <div className="block">
              <p className="flex items-center text-gray-200 text-xs">
                {comment.owner.fullName} · {" "}
                <span className="text-xs">{formatTimestamp(comment.createdAt)}</span>
              </p>
              <p className="text-sm text-gray-200">
                <Link to={`/user/${comment.owner.username}`}>@{comment.owner.username}</Link>
              </p>
              <p className="my-1 text-[14px]">{comment.content}</p>
              {/* <LikesComponent commentId={comment._id} /> */}
              <span
                className={`flex overflow-hidden bg-slate-800 rounded-lg max-w-fit border h-fit text-xs relative`}
              >
                <CommentLike
                  commentId={comment._id}
                  isLiked={comment.isLiked}
                  likesCount={comment.likesCount}
                />
                {/* FIXME : owner like */}
                {comment.isLikedByVideoOwner && (
                  <Link to={`/user/${comment?.owner.username}`} className=" inline-block w-fit ">
                    <img
                      src={comment?.owner.avatar}
                      alt={comment?.owner.username}
                      className=" h-5 w-5 mx-2 rounded-full"
                    />
                    <span className={`inline-block w-3 absolute bottom-0 right-1`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="red"
                        stroke="black"
                        strokeWidth="1"
                        aria-hidden="true"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                  </Link>
                )}
                {/* dislike */}
                {/* <button
                  className={`group/btn flex items-center border-r border-gray-700 gap-x-2 px-2 py-[2px] after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]`}
                  data-like="20"
                  data-like-alt="21"
                >
                  <span className={`inline-block w-4 group-focus/btn:text-[#ae7aff]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                      ></path>
                    </svg>
                  </span>
                </button> */}
              </span>
            </div>
          </div>
          <hr className="my-2 border-white" />
        </div>
      ))}
    </div>
  ) : (
    <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
      <div className="block">
        <h6 className="mb-4 font-semibold">No Comments</h6>
        <input
          type="text"
          className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
          placeholder="Add a Comment"
        />
      </div>
      <hr className="my-4 border-white" />
    </div>
  );
}

export default Comments;
