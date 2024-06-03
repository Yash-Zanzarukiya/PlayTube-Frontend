import React, { useState } from "react";
import { toggleSubscription } from "../../app/Slices/subscriptionSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatSubscription } from "../../helpers/formatFigures";

function SubscriptionUser({ profile }) {
  const dispatch = useDispatch();
  const [isSubscribed, setIsSubscribed] = useState(profile.isSubscribed);

  async function handleToggleSubscription() {
    dispatch(toggleSubscription(profile._id));
    setIsSubscribed((pre) => !pre);
    // .then((res) => {
    //   if (res.meta.requestStatus === "fulfilled") setIsSubscribed((pre) => !pre);
    // });
  }

  return (
    <li key={profile._id} className="flex w-full justify-between">
      <div className="flex items-center gap-x-2">
        <div className="h-14 w-14 shrink-0">
          <Link to={`/user/${profile.username}`}>
            <img
              src={profile.avatar}
              alt={profile.username}
              className="h-full w-full rounded-full"
            />
          </Link>
        </div>
        <div className="block">
          <h6 className="font-semibold">
            <Link to={`/user/${profile.username}`}>{profile.fullName}</Link>
          </h6>
          <p className="text-sm text-gray-300">{formatSubscription(profile.subscribersCount)}</p>
        </div>
      </div>
      <div className="block">
        <button
          onClick={handleToggleSubscription}
          className={`px-3 py-2 text-black ${isSubscribed ? "bg-[#ae7aff]" : "bg-white"} `}
        >
          <span>{isSubscribed ? "Subscribed" : "Subscribe"}</span>
        </button>
      </div>
    </li>
  );
}

export default SubscriptionUser;
