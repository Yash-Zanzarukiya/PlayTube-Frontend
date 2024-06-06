import React, { useRef, useState } from "react";
import { EmptyPlaylist, MyChannelEmptyPlaylist, PlaylistForm } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserPlaylists } from "../../app/Slices/playlistSlice";
import { formatTimestamp } from "../../helpers/formatFigures";
import { Link, useParams } from "react-router-dom";

function ChannelPlaylist({ owner = false }) {
  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dialog = useRef();
  let { username } = useParams();
  let userId = useSelector((state) => state.user?.userData?._id);
  let currentUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (owner) {
      userId = currentUser?._id;
    }
    if (!userId) return;
    dispatch(getUserPlaylists(userId)).then((res) => {
      setIsLoading(false);
      setPlaylists(res.payload);
    });
  }, [username, userId]);

  function popupPlaylistForm() {
    // console.log("dialog.current: ", dialog.current);
    dialog.current?.open();
  }

  if (isLoading) {
    return (
      <div className={`grid gap-4 pt-2 mt-3 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]`}>
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              {/* <!-- Skeleton for the image --> */}
              <div className="h-full w-full bg-gray-700 animate-pulse"></div>
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
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              {/* <!-- Skeleton for the image --> */}
              <div className="h-full w-full bg-gray-700 animate-pulse"></div>
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
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              {/* <!-- Skeleton for the image --> */}
              <div className="h-full w-full bg-gray-700 animate-pulse"></div>
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
      </div>
    );
  }

  // FIXME: Show Empty playlist when user has created playlist without videos

  return playlists?.length > 0 ? (
    <>
      <PlaylistForm ref={dialog} />
      {/* create new playlist */}
      {owner && playlists?.length > 0 && (
        <div className="flex items-center  justify-center py-2 px-2">
          {/* <span className="font-semibold text-3xl">{playlists?.length + ` Playlists`}</span> */}
          <button
            onClick={popupPlaylistForm}
            className="mt-4 rounded inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            New Playlist
          </button>
        </div>
      )}
      {/* playlists */}
      <ul
        className={`grid gap-4 pt-2 grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] ${
          playlists?.length < 4 && "lg:grid-cols-[repeat(auto-fit,_minmax(400px,400px))]"
        }`}
      >
        {playlists?.map(
          (playlist) =>
            (playlist.videosCount > 0 || owner) && (
              <li key={playlist._id} className="w-full">
                <Link to={`/playlist/${playlist._id}`}>
                  <div className="relative w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src={
                          playlist?.thumbnail
                            ? playlist?.thumbnail
                            : "https://res.cloudinary.com/df6ztmktu/image/upload/v1717336091/videotube/photos/iqqvkshu1a14wfbr56lh.png"
                        }
                        alt="React Mastery"
                        className="h-full w-full resize"
                      />
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
                  <div className="flex py-2 px-3 min-h-8 bg-[#21212199]">
                    <p className="flex text-sm text-gray-200 max-h-10 overflow-hidden">
                      {playlist.description}
                    </p>
                  </div>
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  ) : owner ? (
    <MyChannelEmptyPlaylist onClickBtn={popupPlaylistForm} />
  ) : (
    <EmptyPlaylist />
  );
}

export default ChannelPlaylist;
