import React, { useState } from "react";
import { EmptySubscription, MyChannelEmptySubscribed } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSubscribedChannels } from "../../app/Slices/subscriptionSlice";
import { Link, useParams } from "react-router-dom";
import { formatSubscription } from "../../helpers/formatFigures";

// FIXME Fix redux logic in channel

function ChannelSubscribed() {
  const dispatch = useDispatch();
  const [subscribed, setSubscribed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let { username } = useParams();
  let channelId = useSelector((state) => state.user.userData?._id);
  let currentUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (username === currentUser?.username) {
      channelId = currentUser?._id;
    }
    if (!channelId) return;
    dispatch(getSubscribedChannels(channelId)).then((res) => {
      setIsLoading(false);
      setSubscribed(res.payload);
    });
  }, [username, channelId]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-y-4 pt-1">
        <div className="flex flex-col gap-y-4 pt-4">
          <div className="relative mb-2 rounded-sm bg-gray-700 animate-pulse py-2 pl-8 pr-3">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"></span>
            <div className="w-full h-6 bg-transparent outline-none" />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-x-2">
              <div className="h-14 w-14 shrink-0 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="block">
                <h6 className="font-semibold mb-2 bg-gray-700 animate-pulse h-4 w-24 rounded"></h6>
                <p className="text-sm text-gray-300 bg-gray-700 animate-pulse h-4 w-32 rounded"></p>
              </div>
            </div>
            <div className="block">
              <button className="group/btn px-3 py-2 text-black bg-gray-700 rounded-sm animate-pulse">
                <span className="inline-block w-24 h-4 rounded"></span>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-x-2">
              <div className="h-14 w-14 shrink-0 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="block">
                <h6 className="font-semibold mb-2 bg-gray-700 animate-pulse h-4 w-24 rounded"></h6>
                <p className="text-sm text-gray-300 bg-gray-700 animate-pulse h-4 w-32 rounded"></p>
              </div>
            </div>
            <div className="block">
              <button className="group/btn px-3 py-2 text-black bg-gray-700 rounded-sm animate-pulse">
                <span className="inline-block w-24 h-4 rounded"></span>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-x-2">
              <div className="h-14 w-14 shrink-0 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="block">
                <h6 className="font-semibold mb-2 bg-gray-700 animate-pulse h-4 w-24 rounded"></h6>
                <p className="text-sm text-gray-300 bg-gray-700 animate-pulse h-4 w-32 rounded"></p>
              </div>
            </div>
            <div className="block">
              <button className="group/btn px-3 py-2 text-black bg-gray-700 rounded-sm animate-pulse">
                <span className="inline-block w-24 h-4 rounded"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return subscribed?.length > 0 ? (
    <ul className="flex flex-col gap-y-4 py-4">
      <div className="relative mb-2 rounded-lg bg-white py-2 pl-8 pr-3 text-black">
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </span>
        <input className="w-full bg-transparent outline-none" placeholder="Search" />
      </div>

      {subscribed?.map((channelData) => (
        <li key={channelData.channel._id} className="flex w-full justify-between">
          <div className="flex items-center gap-x-2">
            <div className="h-14 w-14 shrink-0">
              <Link to={`/user/${channelData.channel.username}`}>
                <img
                  src={channelData.channel.avatar}
                  alt={channelData.channel.username}
                  className="h-full w-full rounded-full"
                />
              </Link>
            </div>
            <div className="block">
              <h6 className="font-semibold">
                <Link to={`/user/${channelData.channel.username}`}>
                  {channelData.channel.fullName}
                </Link>
              </h6>
              <p className="text-sm text-gray-300">
                {formatSubscription(channelData.channel.subscribersCount)}
              </p>
            </div>
          </div>
          <div className="block">
            <button
              className={`px-3 py-2 text-black ${
                channelData.channel.isSubscribed ? "bg-[#ae7aff]" : "bg-white"
              } `}
            >
              <span>{channelData.channel.isSubscribed ? "Subscribed" : "Subscribe"}</span>
            </button>
          </div>
        </li>
      ))}

      {/* subscribe button */}
      {/* <div className="block">
        <button className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]">
          <span className="group-focus/btn:hidden">Subscribe</span>
          <span className="hidden group-focus/btn:inline">Subscribed</span>
        </button>
      </div> */}
    </ul>
  ) : currentUser?._id === channelId ? (
    <MyChannelEmptySubscribed />
  ) : (
    <EmptySubscription />
  );
}

export default ChannelSubscribed;
