import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getPlaylistById } from "../../app/Slices/playlistSlice";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";

function PlaylistVideos() {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const [playList, setPlayList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const playList = useSelector((state) => state.playlist.data);
  // const isLoading = useSelector((state) => state.playlist.loading);

  useEffect(() => {
    dispatch(getPlaylistById(playlistId)).then((res) => {
      setPlayList(res.payload);
      setIsLoading(false);
    });
  }, [playlistId]);

  if (isLoading) {
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
          <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0">
                {/* Skeleton for the image */}
                <div className="h-full w-full bg-white/10 animate-pulse"></div>
                <div className="absolute inset-x-0 bottom-0 ">
                  <div className="relative border-t border-t-slate-600 bg-white/10 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                    <div className="relative z-[1] ">
                      {/* Skeleton for the text */}
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skeleton for the title */}
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-1 animate-pulse"></div>
            {/* Skeleton for the description */}
            <div className="h-4 bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
            <div className="mt-6 flex items-center gap-x-3">
              {/* Skeleton for the avatar */}
              <div className="h-16 w-16 shrink-0">
                <div className="h-full w-full bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <div className="w-full">
                {/* Skeleton for the owner's name and subscribers */}
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          </div>
          <ul className="flex w-full flex-col gap-y-4">
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] bg-gray-700 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 bg-gray-700 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block bg-gray-700 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 bg-gray-700 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] bg-gray-700 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 bg-gray-700 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block bg-gray-700 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 bg-gray-700 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] bg-gray-700 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 bg-gray-700 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block bg-gray-700 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 bg-gray-700 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] bg-gray-700 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 bg-gray-700 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block bg-gray-700 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 bg-gray-700 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
        <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              <img src={playList?.thumbnail} alt={playList.name} className="h-full w-full" />
              <div className="absolute inset-x-0 bottom-0">
                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                  <div className="relative z-[1]">
                    <p className="flex justify-between">
                      <span className="inline-block">Playlist</span>
                      <span className="inline-block">
                        {playList.videosCount} video{playList.videosCount > 1 ? "s" : ""}
                      </span>
                    </p>
                    <p className="text-sm text-gray-200">
                      {playList.totalViews} view{playList.totalViews > 1 ? "s" : ""} ·{" "}
                      {formatTimestamp(playList.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="mb-1 font-semibold">{playList?.name}</h6>
          <p className="flex text-sm text-gray-200">{playList?.description}</p>
          <div className="mt-6 flex items-center gap-x-3">
            <div className="h-16 w-16 shrink-0">
              <Link to={`/user/${playList?.owner?.username}`}>
                <img
                  src={playList?.owner?.avatar}
                  alt={playList?.owner?.fullName}
                  className="h-full w-full rounded-full"
                />
              </Link>
            </div>
            <div className="w-full">
              <h6 className="font-semibold">
                <Link to={`/user/${playList?.owner?.username}`}>{playList?.owner?.fullName}</Link>
              </h6>
              <p className="text-sm text-gray-300">757K Subscribers</p>
            </div>
          </div>
        </div>
        <ul className="flex w-full flex-col gap-y-4">
          {playList?.videos.map((video) => (
            <li className="border">
              <Link to={`/watch/${video._id}`}>
                <div className="w-full max-w-3xl gap-x-4 sm:flex">
                  <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                    <div className="w-full pt-[56%]">
                      <div className="absolute inset-0">
                        <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
                      </div>
                      <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        {formatVideoDuration(video.duration)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                    <div className="h-10 w-10 shrink-0 sm:hidden">
                      <img
                        src={video.owner?.avatar}
                        alt={video.owner?.fullName}
                        className="h-full w-full rounded-full"
                      />
                    </div>
                    <div className="w-full">
                      <h6 className="mb-1 font-semibold sm:max-w-[75%]">{video.title}</h6>
                      <p className="flex text-sm text-gray-200 sm:mt-3">
                        {video.views} View{video.views > 1 ? "s" : ""} ·{" "}
                        {formatTimestamp(video.createdAt)}
                      </p>
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
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlaylistVideos;
