import React, { useState } from "react";
import { EmptyPlaylist, MyChannelEmptyPlaylist } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserPlaylists } from "../../app/Slices/playlistSlice";
import { formatTimestamp } from "../../helpers/formatFigures";
import { Link, useParams } from "react-router-dom";

function ChannelPlaylist() {
  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let { username } = useParams();
  let userId = useSelector((state) => state.user?.userData?._id);
  let currentUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (username === currentUser?.username) {
      userId = currentUser?._id;
    }
    if (!userId) return;
    dispatch(getUserPlaylists(userId)).then((res) => {
      setIsLoading(false);
      setPlaylists(res.payload);
    });
  }, [username, userId]);

  if (isLoading) {
    <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            {/* <!-- Skeleton for the image --> */}
            <div className="h-full w-full bg-gray-800 animate-pulse"></div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/10 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  {/* <!-- Skeleton for the text --> */}
                  <div className="flex justify-between">
                    <div className="inline-block h-4 mb-2 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    <div className="inline-block h-4 bg-gray-700  rounded w-12 animate-pulse"></div>
                  </div>
                  <div className="text-sm text-gray-700 h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1 font-semibold h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="flex text-sm text-gray-700 h-4 bg-gray-700 rounded w-full animate-pulse"></div>
      </div>
    </div>;
    <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            {/* <!-- Skeleton for the image --> */}
            <div className="h-full w-full bg-gray-800 animate-pulse"></div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/10 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  {/* <!-- Skeleton for the text --> */}
                  <div className="flex justify-between">
                    <div className="inline-block h-4 mb-2 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    <div className="inline-block h-4 bg-gray-700  rounded w-12 animate-pulse"></div>
                  </div>
                  <div className="text-sm text-gray-700 h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1 font-semibold h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="flex text-sm text-gray-700 h-4 bg-gray-700 rounded w-full animate-pulse"></div>
      </div>
    </div>;
    <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
      <div className="w-full">
        <div className="relative mb-2 w-full pt-[56%]">
          <div className="absolute inset-0">
            {/* <!-- Skeleton for the image --> */}
            <div className="h-full w-full bg-gray-800 animate-pulse"></div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="relative border-t bg-white/10 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                <div className="relative z-[1]">
                  {/* <!-- Skeleton for the text --> */}
                  <div className="flex justify-between">
                    <div className="inline-block h-4 mb-2 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    <div className="inline-block h-4 bg-gray-700  rounded w-12 animate-pulse"></div>
                  </div>
                  <div className="text-sm text-gray-700 h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1 font-semibold h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="flex text-sm text-gray-700 h-4 bg-gray-700 rounded w-full animate-pulse"></div>
      </div>
    </div>;
  }

  return playlists?.length < 1 ? (
    currentUser?._id === userId ? (
      <MyChannelEmptyPlaylist />
    ) : (
      <EmptyPlaylist />
    )
  ) : (
    <ul className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
      {playlists?.map((playlist) => (
        <li key={playlist._id} className="w-full">
          <Link to={`/playlist/${playlist._id}`}>
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0">
                <img src={playlist.thumbnail} alt="React Mastery" className="h-full w-full" />
                <div className="absolute inset-x-0 bottom-0">
                  <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                    <div className="relative z-[1]">
                      <p className="flex justify-between">
                        <span className="inline-block">{playlist.name}</span>
                        <span className="inline-block">
                          {playlist.videosCount} video{playlist.videosCount > 1 ? "s" : ""}
                        </span>
                      </p>
                      <p className="text-sm text-gray-200">
                        {playlist.totalViews} view{playlist.totalViews > 1 ? "s" : ""} ·{" "}
                        {formatTimestamp(playlist.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="mb-1 font-semibold">
              <Link to={`/user/${playlist.owner?.username}`}>{playlist.owner?.fullName}</Link>
            </h6>
            <p className="flex text-sm text-gray-200">{playlist.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ChannelPlaylist;
