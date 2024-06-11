import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getVideoComments } from "../../app/Slices/commentSlice";
import { CommentAtom, LikesComponent, LoginPopup } from "../index";
import { toast } from "react-toastify";

function Comments({ videoId, ownerAvatar }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const loginPopupDialog = useRef();

  const { status: authStatus } = useSelector(({ auth }) => auth);

  const { status, data } = useSelector((state) => state.comment);
  const [localCommentData, setLocalCommentData] = useState(null);

  useEffect(() => {
    if (!videoId) return;
    dispatch(getVideoComments(videoId)).then((res) => {
      setLocalCommentData(res.payload);
    });
  }, [videoId, navigate, dispatch]);

  function handleAddComment(event) {
    event.preventDefault();
    if (!authStatus) return loginPopupDialog.current?.open();
    const content = event.target.content.value;
    if (!content) {
      toast.warning("Please Enter some message...");
      return;
    }
    // OPTIMIZEME Optimize my performance by making a very small network request or no request for adding new comment
    setLocalCommentData(data);
    dispatch(addComment({ videoId, content }));
    inputRef.current.value = "";
  }

  if (!localCommentData)
    return (
      <h1 className="h-full w-full text-center text-3xl text-green-700">Loading Comments...</h1>
    );

  const comments = data || localCommentData;

  if (!status && !comments)
    return (
      <h1 className="h-full w-full text-center text-3xl bg-green-700">
        Something went wrong Comments...
      </h1>
    );

  return (
    <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px]  peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
      <LoginPopup ref={loginPopupDialog} message="Sign in to Comment on Video..." />
      {/* add comment */}
      <div className="block">
        <h6 className="mb-4 font-semibold">
          {comments?.length > 0 ? comments.length : "No"} Comments
        </h6>
        <form
          onSubmit={handleAddComment}
          className="w-full rounded-lg border px-1 py-1 flex items-center"
        >
          <input
            type="text"
            name="content"
            ref={inputRef}
            className=" w-4/5 bg-transparent focus:outline-none px-2 py-1 placeholder-white"
            placeholder="Add a Comment"
          />
          <span className="w-1/5 flex justify-end mr-1">
            <button
              type="button"
              onClick={() => (inputRef.current.value = "")}
              className="rounded-3xl hover:border hover:border-b-white disabled:cursor-not-allowed hover:bg-gray-700 text-white text-sm font-semibold px-2 pb-1 mr-2"
            >
              cancel
            </button>
            <button
              type="submit"
              className="rounded-3xl bg-[#ae7aff] disabled:bg-gray-800 hover:bg-[#b48ef1] text-sm text-black font-semibold border border-b-white px-2 pb-1"
            >
              Comment
            </button>
          </span>
        </form>
      </div>
      <hr className="my-4 border-white" />

      {/* comments */}
      {comments?.map((comment) => (
        <div key={comment._id}>
          <CommentAtom comment={comment} ownerAvatar={ownerAvatar} videoId={videoId} />
          <hr className="my-2 border-white" />
        </div>
      ))}
    </div>
  );
}

export default Comments;
