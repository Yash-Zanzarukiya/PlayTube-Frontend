import React, { useState } from "react";
import {
  EmptySubscription,
  MyChannelEmptySubscribed,
  SubscriptionUser,
  UserProfile,
} from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getChannelSubscribers, getSubscribedChannels } from "../../app/Slices/subscriptionSlice";
import { Link, useParams } from "react-router-dom";
import { formatSubscription } from "../../helpers/formatFigures";

// TESTME Fix redux logic in channel

function ChannelSubscribed({ owner = false, isSubscribers = false }) {
  const dispatch = useDispatch();
  let { username } = useParams();
  let channelId = useSelector((state) => state.user.userData?._id);
  let currentUser = useSelector((state) => state.auth.userData);

  const [subscribedFiltered, setSubscribedFiltered] = useState(null);
  let { data, loading, status } = useSelector((state) => state.subscription);

  useEffect(() => {
    if (isSubscribers) {
      console.log("isSubscribers: ", isSubscribers);
      dispatch(getChannelSubscribers(currentUser?._id));
      return;
    }
    if (owner) channelId = currentUser?._id;
    if (!channelId) return;
    dispatch(getSubscribedChannels(channelId));
  }, [username, channelId, currentUser]);

  if (!isSubscribers && (loading || !channelId)) {
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

  let subscribed = subscribedFiltered || data;

  if ((!status && !loading) || !subscribed)
    return (
      <h1 className="h-full w-full text-center text-3xl text-white bg-blue-700">
        Something went wrong Video...
      </h1>
    );

  function handleUserInput(input) {
    if (!input) setSubscribedFiltered(data);
    else {
      const filteredData = data.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase())
      );
      setSubscribedFiltered(filteredData);
    }
  }

  return data?.length > 0 ? (
    <ul className={`flex w-full flex-col gap-y-4 ${isSubscribers ? "px-16 py-12" : "py-4"}`}>
      {/* Search bar */}
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
        <input
          onChange={(e) => handleUserInput(e.target.value.trim())}
          className="w-full bg-transparent outline-none"
          placeholder="Search"
        />
      </div>

      {/* subscribed channels */}
      {subscribed?.map((profile) => (
        <SubscriptionUser key={profile._id} profile={profile} />
      ))}
    </ul>
  ) : owner ? (
    <MyChannelEmptySubscribed />
  ) : (
    <EmptySubscription />
  );
}

export default ChannelSubscribed;
