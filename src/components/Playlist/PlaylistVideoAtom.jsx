import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";
import { addVideoToPlaylist, removeVideoFromPlaylist } from "../../app/Slices/playlistSlice";
import { useDispatch } from "react-redux";

function PlaylistVideoAtom({ video, playlistId }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  function handleButtonClick() {
    if (isDeleted)
      dispatch(addVideoToPlaylist({ playlistId, videoId: video._id })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") setIsDeleted(false);
      });
    else
      dispatch(removeVideoFromPlaylist({ playlistId, videoId: video._id })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") setIsDeleted(true);
      });
  }

  return (
    <li key={video._id} className="border">
      <div className="w-full gap-x-4 sm:flex">
        {/* Video Thumbnail */}
        <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
          <Link to={`/watch/${video?._id}`}>
            <div className="w-full pt-[56%]">
              <div className="absolute inset-0">
                <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
              </div>
              <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                {formatVideoDuration(video.duration)}
              </span>
            </div>
          </Link>
        </div>
        {/* Video Data */}
        <div className=" flex relative gap-x-2 px-2 sm:w-7/12 sm:px-0">
          <div className="h-10 w-10 shrink-0 sm:hidden">
            <img
              src={video.owner?.avatar}
              alt={video.owner?.fullName}
              className="h-full w-full rounded-full"
            />
          </div>
          {/* Video Details */}
          <div className="w-full mt-2">
            {/* title */}
            <h6 className="mb-1 text-lg font-semibold sm:max-w-[75%]">{video.title}</h6>
            {/* views and date */}
            <p className="flex text-sm text-gray-200 sm:mt-3">
              {video.views} View{video.views > 1 ? "s" : ""} · {formatTimestamp(video.createdAt)}
            </p>
            {/* Owner Details */}
            <div className="flex items-center gap-x-4">
              <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block">
                <Link to={`/user/${video.owner.username}`}>
                  <img
                    src={video.owner.avatar}
                    alt={video.owner.fullName}
                    className="h-full w-full rounded-full"
                  />
                </Link>
              </div>
              <p className="text-sm hover:text-gray-300 text-gray-200">
                <Link to={`/user/${video.owner.username}`}>{video.owner.fullName}</Link>
              </p>
            </div>
          </div>
          {/* Delete button */}
          <span className="absolute right-2 top-2">
            <button onClick={handleButtonClick} className="h-5 justify-self-end  text-xl mr-1">
              {/* Remove */}
              {!isDeleted && (
                <span title="remove video" className="h-4 text-red-400 hover:text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </span>
              )}
              {/* Undo */}
              {isDeleted && (
                <span title="undo changes" className="h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7v6h6" />
                    <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                  </svg>
                </span>
              )}
            </button>
          </span>
        </div>
      </div>
      {/* <Link to={`/watch/${video?._id}`}>
    </Link> */}
    </li>
  );
}

export default PlaylistVideoAtom;
