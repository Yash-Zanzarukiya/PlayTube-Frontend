import React, { useEffect, useRef, useState } from "react";
import { getChannelStats, getChannelVideos } from "../../app/Slices/dashboardSlice";
import { useDispatch } from "react-redux";
import { AdminVideoAtom, StatusAtom, PopupForm, UploadVideo } from "../index";

function Dashboard() {
  const [channelStates, setChannelState] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const uploadRef = useRef();

  useEffect(() => {
    dispatch(getChannelStats())
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") setChannelState(res.payload);
      })
      .finally(() => setIsLoading(false));
    dispatch(getChannelVideos())
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") setVideos(res.payload);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1 className="size-full text-center">Loading...</h1>;

  return (
    channelStates && (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
        {/* Headers */}
        <div className="flex flex-wrap justify-between gap-4">
          {/* Welcoming Headers */}
          <div className="block">
            <h1 className="text-2xl font-bold">Welcome Back, {channelStates?.ownerName}</h1>
            <p className="text-sm text-gray-300">Seamless Video Management, Elevated Results.</p>
          </div>
          {/* Video Upload Button */}
          <div className="block">
            {<UploadVideo ref={uploadRef} />}
            <button
              onClick={() => uploadRef.current?.open()}
              className="inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black"
            >
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
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>{" "}
              Upload video
            </button>
          </div>
        </div>

        {/* Channel States Components */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
          <StatusAtom
            key="total-videos"
            title="Total Videos"
            value={channelStates.totalVideos}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
            }
          />
          <StatusAtom
            key="total-views"
            title="Total views"
            value={channelStates.totalViews}
            icon={
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
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            }
          />
          <StatusAtom
            key="total-subscribers"
            title="Total subscribers"
            value={channelStates.totalSubscribers}
            icon={
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
            }
          />
          <StatusAtom
            key="total-likes"
            title="Total likes"
            value={channelStates.totalLikes}
            icon={
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                ></path>
              </svg>
            }
          />
        </div>

        {/* Video Manipulation Table */}
        <div className="w-full overflow-auto">
          <table className="w-full min-w-[1200px] border-collapse border text-white">
            <thead>
              <tr>
                <th className="border-collapse border-b p-4">Status</th>
                <th className="border-collapse border-b p-4">Status</th>
                <th className="border-collapse border-b p-4">Uploaded</th>
                <th className="border-collapse border-b p-4">Rating</th>
                <th className="border-collapse border-b p-4">Date uploaded</th>
                <th className="border-collapse border-b p-4"></th>
              </tr>
            </thead>
            <tbody>
              {videos?.map((video) => (
                <AdminVideoAtom key={video._id} video={video} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}

export default Dashboard;
