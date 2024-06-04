import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlaylist, getPlaylistById } from "../../app/Slices/playlistSlice";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";
import { PlaylistForm, EmptyPlaylist, ConfirmPopup } from "../index";

function PlaylistVideos() {
  const dispatch = useDispatch();
  const dialog = useRef();
  const confirmDialog = useRef();
  const navigate = useNavigate();
  const { playlistId } = useParams();

  const { data: playList } = useSelector((state) => state.playlist);
  const currentUser = useSelector((state) => state.auth.userData?._id);

  useEffect(() => {
    if (!playlistId) return;
    dispatch(getPlaylistById(playlistId));
  }, [playlistId]);

  function handleDeletePlaylist(isConfirm) {
    if (isConfirm) {
      dispatch(deletePlaylist(playlistId)).then(() => {});
      navigate(`/`);
    }
  }

  if (!playList) {
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

  let isOwner = currentUser === playList.owner?._id;

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* FIXME:PlaylistForm - this is rendering before the popup-model div renders */}
      {/* TODO:add remove video feature */}
      <PlaylistForm ref={dialog} playlist={playList} />
      <ConfirmPopup
        title="Confirm to Delete"
        subtitle="Once deleted cannot be recovered"
        confirm="Delete"
        cancel="Cancel"
        critical
        ref={confirmDialog}
        actionFunction={handleDeletePlaylist}
      />
      <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
        {/* Playlist Info */}
        <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              <img
                src={
                  playList?.thumbnail
                    ? playList?.thumbnail
                    : "https://res.cloudinary.com/df6ztmktu/image/upload/v1717336091/videotube/photos/iqqvkshu1a14wfbr56lh.png"
                }
                alt={playList.name}
                className="h-full w-full"
              />
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
          {/* Playlist Controls */}
          {isOwner && (
            <div className="flex justify-evenly h-5 py-1 gap-x-5 mb-2">
              {/* delete button */}
              <button
                onClick={() => confirmDialog.current?.open()}
                className="flex items-center justify-end gap-x-2 h-5  hover:text-red-600 text-red-400 text-xl mr-1"
              >
                <span className="h-5">
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
                    className="lucide lucide-trash-2 h-full w-full"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </span>
                <span className="mb-[1px]">Delete</span>
              </button>
              {/* Edit button */}
              <button
                onClick={() => dialog.current?.open()}
                className="flex items-center justify-end gap-x-2 h-5 hover:text-[#ad7affbc] text-[#ae7aff] text-xl mr-1"
              >
                <span className="h-5">
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
                    className="lucide lucide-pencil w-full h-full"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </span>
                <span className="mb-[1px]">Edit</span>
              </button>
            </div>
          )}
          <h2 className="mb-1 text-2xl font-semibold">{playList?.name}</h2>
          {/* Owner Detail */}
          <div className="mt-4 flex items-center gap-x-3">
            <div className="h-12 w-12 shrink-0">
              <Link to={`/user/${playList?.owner?.username}`}>
                <img
                  src={playList?.owner?.avatar}
                  alt={playList?.owner?.fullName}
                  className="h-full w-full rounded-full"
                />
              </Link>
            </div>
            <div className="w-full">
              <h6 className="font-semibold">{playList?.owner?.fullName}</h6>
              <p className="text-sm text-gray-300 hover:text-gray-400">
                <Link to={`/user/${playList?.owner?.username}`}>@{playList?.owner?.username}</Link>
              </p>
              {/* <p className="text-sm text-gray-300">757K Subscribers</p> */}
            </div>
          </div>
          <p className="flex mt-3 text-sm text-gray-200">{playList?.description}</p>
        </div>
        {/* Playlist videos */}
        <ul className="flex w-full flex-col gap-y-4">
          {playList.videos?.length > 0 || (
            <div className="w-full h-full flex items-center justify-center">
              <EmptyPlaylist playlistVideos />
            </div>
          )}
          {playList?.videos?.map((video) => (
            <li key={video._id} className="border">
              <Link to={`/watch/${video?._id}`}>
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
                    <div className="w-full mt-2">
                      <h6 className="mb-1 text-lg font-semibold sm:max-w-[75%]">{video.title}</h6>
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
