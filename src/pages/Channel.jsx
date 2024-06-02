import React from "react";
import { useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { channelProfile } from "../app/Slices/userSlice";

function Channel() {
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const loggedInUsername = useSelector((state) => state.auth.userData?.username);

  useEffect(() => {
    if (loggedInUsername === username) {
      navigate(`/channel/${loggedInUsername}`);
    }
    dispatch(channelProfile(username)).then((res) => {
      setProfile(res.payload);
    });
  }, [username]);

  return profile ? (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* Cover Image */}
      <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={profile?.coverImage} alt={profile?.username} />
        </div>
      </div>

      <div className="px-4 pb-4">
        {/* Channel Metadata */}
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img src={profile?.avatar} alt="Channel" className="h-full w-full" />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">{profile?.fullName}</h1>
            <p className="text-sm text-gray-400">@{profile?.username}</p>
            <p className="text-sm text-gray-400">
              {profile?.subscribersCount} Subscribers · {profile.channelsSubscribedToCount}{" "}
              Subscribed
            </p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
              <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                <span className="inline-block w-5">
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
                </span>
                <span className={`${profile?.isSubscribed ? "hidden" : ""}`}>Subscribe</span>
                <span className={`${profile?.isSubscribed ? "" : "hidden"}`}>Subscribed</span>
              </button>
            </div>
          </div>
        </div>

        {/* FIXME Active element */}
        {/* List Options */}
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <li className="w-full">
            <NavLink to={""} activeclassname="active" className="navlink">
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400 active:border-[#ae7aff] active:bg-white  active:text-[#ae7aff]">
                Videos
              </button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"playlists"} activeclassname="active">
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400 active:border-[#ae7aff] active:bg-white  active:text-[#ae7aff]">
                Playlist
              </button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"tweets"} activeclassname="active">
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400 active:border-[#ae7aff] active:bg-white  active:text-[#ae7aff]">
                Tweets
              </button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"subscribed"} activeclassname="active">
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400 active:border-[#ae7aff] active:bg-white  active:text-[#ae7aff]">
                Subscribed
              </button>
            </NavLink>
          </li>
        </ul>

        {/* Outlet */}
        <Outlet />
      </div>
    </section>
  ) : (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* Cover Image Skeleton */}
      <div className="relative min-h-[150px] w-full pt-[16.28%] bg-gray-800 animate-pulse">
        <div className="absolute inset-0 overflow-hidden">
          {/* Placeholder for the cover image */}
        </div>
      </div>

      <div className="px-4 pb-4">
        {/* Channel Metadata Skeleton */}
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full bg-gray-800 animate-pulse"></div>
          <div className="mr-auto inline-block">
            <div className="h-5 w-32 bg-gray-800 rounded animate-pulse"></div>
            <div className="mt-2 h-3 w-24 bg-gray-800 rounded animate-pulse"></div>
            <div className="mt-2 h-3 w-40 bg-gray-800 rounded animate-pulse"></div>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
              <div className="h-10 w-32 bg-gray-800 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* List Options Skeleton */}
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
        </ul>

        {/* Outlet Skeleton */}
        <div className="h-64 w-full bg-gray-800 rounded animate-pulse"></div>
      </div>
    </section>
  );
}

export default Channel;
