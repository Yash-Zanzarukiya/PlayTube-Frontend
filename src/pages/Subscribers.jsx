import React, { useEffect, useState } from "react";
import { getChannelSubscribers } from "../app/Slices/subscriptionSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatSubscription } from "../helpers/formatFigures";
import { Link } from "react-router-dom";

function Subscribers() {
  const [subscriberData, setSubscriberData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userData?._id);

  useEffect(() => {
    dispatch(getChannelSubscribers(userId)).then((res) => {
      setSubscriberData(res.payload);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return subscriberData?.subscribersCount > 0 ? (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="p-10">
        <ul className="flex flex-col gap-y-4 py-4">
          <li
            key="search-box"
            className="relative mb-2 rounded-lg bg-white py-2 pl-8 pr-3 text-black"
          >
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
          </li>
          {subscriberData?.subscribers?.map((subscriber) => (
            <li key={subscriber._id} className="flex w-full justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 shrink-0">
                  <Link to={`/user/${subscriber.username}`}>
                    <img
                      src={subscriber.avatar}
                      alt="Code Master"
                      className="h-full w-full rounded-full"
                    />
                  </Link>
                </div>
                <div className="block">
                  <h6 className="font-semibold">
                    <Link to={`/user/${subscriber.username}`}>{subscriber.fullName}</Link>
                  </h6>
                  <p className="text-sm text-gray-300">
                    {formatSubscription(subscriber.subscribersCount)}
                  </p>
                </div>
              </div>
              <div className="block">
                <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
                  {subscriber.isSubscribed ? (
                    <span className="">Subscribed</span>
                  ) : (
                    <span className="">Subscribe</span>
                  )}
                </button>
              </div>
            </li>
          ))}
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-x-2">
              <div className="h-14 w-14 shrink-0">
                <img
                  src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Code Master"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <h6 className="font-semibold">Code Master</h6>
                <p className="text-sm text-gray-300">20K Subscribers</p>
              </div>
            </div>
            <div className="block">
              <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
                <span className="group-focus/btn:hidden">Subscribed</span>
                <span className="hidden group-focus/btn:inline">Subscribe</span>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </section>
  ) : (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex justify-center p-4">
        <div className="w-full max-w-sm text-center">
          <p className="mb-3 w-full">
            <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
              <span className="inline-block w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  ></path>
                </svg>
              </span>
            </span>
          </p>
          <h5 className="mb-2 font-semibold">No people subscribers</h5>
          <p>
            Your channel has yet to <strong>subscribe</strong> a new channel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Subscribers;
