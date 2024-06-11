import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createTweet, getAllTweets } from "../app/Slices/tweetSlice";
import { TweetAtom, EmptyTweet, LoginPopup } from "../components/index";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function FeedTweets({ owner = false }) {
  const dispatch = useDispatch();
  const loginPopupDialog = useRef();

  const { data, status } = useSelector(({ tweet }) => tweet);
  const { status: authStatus } = useSelector(({ auth }) => auth);

  const [localTweets, setLocalTweets] = useState(null);
  const { register, handleSubmit, reset, setFocus } = useForm();

  useEffect(() => {
    dispatch(getAllTweets()).then((res) => {
      if (res.payload) setLocalTweets(res.payload);
    });
  }, []);

  function addTweet(data) {
    if (!authStatus) return loginPopupDialog.current?.open();
    if (!data.tweet.trim()) {
      toast.error("Content is required");
      setFocus("tweet");
      return;
    } else if (data.tweet.trim()?.length < 10) {
      toast.error("Minimum 10 characters are required");
      setFocus("tweet");
      return;
    } else if (data.tweet.trim()?.length > 80) {
      toast.error("Maximum 80 characters are allowed");
      setFocus("tweet");
      return;
    }
    dispatch(createTweet({ data })).then(() => {
      getAllTweets();
      reset();
    });
  }

  if (!localTweets) {
    return (
      <h1 className="h-full w-full text-center text-3xl text-orange-700">Loading tweets...</h1>
    );
  }

  let tweets = data || localTweets;

  if (!status && !tweets) {
    return (
      <h1 className="h-full w-full text-center text-3xl text-white bg-orange-700">
        Something went wrong tweet...
      </h1>
    );
  }

  return (
    <>
      <LoginPopup ref={loginPopupDialog} message="Sign in to Tweet..." />

      <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <form onSubmit={handleSubmit(addTweet)} className="mt-2 border pb-2">
          <textarea
            {...register("tweet")}
            className="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
            placeholder="Whats in your mind today..."
          ></textarea>

          <div className="flex items-center justify-end gap-x-3 px-3">
            {/* Emoji button */}
            <button type="button" className="inline-block h-5 w-5 hover:text-[#ae7aff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                ></path>
              </svg>
            </button>
            {/* Cancel button */}
            <button
              type="button"
              onClick={() => reset()}
              className="py-1 rounded-xl px-3 hover:text-black hover:bg-slate-500"
            >
              cancel
            </button>
            {/* send button */}
            <button type="submit" className="bg-[#ae7aff] px-3 py-2 font-semibold text-black">
              Send
            </button>
          </div>
        </form>

        <hr className=" border-[#ae7aff] mt-6 mb-4" />

        {tweets?.length > 0 ? (
          <ul>
            {tweets.map((tweet) => (
              <TweetAtom key={tweet._id} tweet={tweet} owner={tweet.isOwner} />
            ))}
          </ul>
        ) : (
          <EmptyTweet />
        )}
      </section>
    </>
  );
}

export default FeedTweets;
