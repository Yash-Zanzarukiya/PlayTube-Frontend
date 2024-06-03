import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelProfile } from "../../app/Slices/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatSubscription } from "../../helpers/formatFigures";
import { toggleSubscription } from "../../app/Slices/subscriptionSlice";

function UserProfile({ userId }) {
  const { userData, loading, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    if (!userId) return;
    dispatch(channelProfile(userId)).then((res) => setLocalData(res.payload));
  }, [userId, dispatch]);

  async function handleToggleSubscription(channelId) {
    setLocalData((pre) => ({ ...pre, isSubscribed: !pre.isSubscribed }));
    dispatch(toggleSubscription(channelId)).then(() => dispatch(channelProfile(userId)));
  }

  if (!localData)
    return <h1 className="h-full w-full text-center text-3xl text-red-700">Loading Profile...</h1>;

  let profileData = userData || localData;

  if (!profileData)
    return (
      <h1 className="h-full w-full text-center text-3xl bg-red-700">
        Something went wrong Profile...
      </h1>
    );

  return (
    <div className="mt-4 flex items-center justify-between">
      {/* Owner Data */}
      <div key="owner-data" className="flex items-center gap-x-4">
        <div className="mt-2 h-12 w-12 shrink-0">
          <Link to={`/user/${profileData?.username}`}>
            <img
              src={profileData?.avatar}
              alt="reactpatterns"
              className="h-full w-full rounded-full"
            />
          </Link>
        </div>
        <div className="block">
          <p className="text-gray-200 hover:text-gray-300">
            <Link to={`/user/${profileData?.username}`}>{profileData?.fullName}</Link>
          </p>
          <p className="text-sm text-gray-400">
            {formatSubscription(profileData?.subscribersCount)}
          </p>
        </div>
      </div>
      {/* Subscribe Button */}
      <div
        key="subscribe-btn"
        onClick={() => handleToggleSubscription(profileData?._id)}
        className="block"
      >
        <button
          className={`group/btn mr-1 flex w-full items-center gap-x-2 ${
            profileData?.isSubscribed ? "bg-[#ae7aff] " : "bg-white"
          }  px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto`}
        >
          <span className="inline-block w-5">
            {profileData?.isSubscribed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-check-big"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            ) : (
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
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                ></path>
              </svg>
            )}
          </span>
          <span className={` ${profileData?.isSubscribed ? "hidden " : "block "}`}>Subscribe</span>
          <span className={`${profileData?.isSubscribed ? "block " : "hidden "}`}>Subscribed</span>
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
