import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { EmptyVideo } from "../index";
import { getAllVideos } from "../../app/Slices/videoSlice";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";

function VideoGrid() {
  const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideos()).then((res) => {
      setVideos(res.payload);
    });
  }, []);

  if (!videos) {
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4 ">
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
          <div className="w-full rounded">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0 rounded bg-gray-800 animate-pulse"></div>
              <span className="absolute bottom-1 right-1 inline-block rounded-xl bg-gray-800 animate-pulse w-16 h-6"></span>
            </div>
            <div className="mb-1 font-semibold bg-gray-800 rounded animate-pulse h-6 w-full"></div>
            <div className="flex text-sm text-gray-200 rounded bg-gray-800 animate-pulse h-4 w-full"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
        {videos ? (
          videos.map((video) => (
            <li className="w-full" key={video?._id}>
              <Link to={`/watch/${video._id}`}>
                <div className="relative mb-2 w-full pt-[56%]">
                  <div className="absolute inset-0">
                    <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
                  </div>
                  <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                    {formatVideoDuration(video?.duration)}
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <div className="h-10 w-10 shrink-0">
                    <Link to={`/user/${video.owner.username}`}>
                      <img
                        src={video.owner.avatar}
                        alt="codemaster"
                        className="h-full w-full rounded-full"
                      />
                    </Link>
                  </div>
                  <div className="w-full">
                    <h6 className="mb-1 font-semibold">{video.title}</h6>
                    <p className="flex text-sm text-gray-200">
                      {video.views} Views · {formatTimestamp(video.createdAt)}
                    </p>
                    <p className="text-sm text-gray-200">{video.owner.fullName}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <EmptyVideo />
        )}
      </ul>
    </section>
  );
}

export default VideoGrid;
