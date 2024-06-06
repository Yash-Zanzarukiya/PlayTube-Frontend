import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate, formatTimestamp } from "../../helpers/formatFigures";
import { Link } from "react-router-dom";
import { deleteVideo, togglePublish } from "../../app/Slices/videoSlice";
import { ConfirmPopup, UploadVideo } from "../index";

function AdminVideoAtom({ video }) {
  const dispatch = useDispatch();
  const confirmDialog = useRef();
  const editDialog = useRef();

  const [publishedStatus, setPublishedStatus] = useState(video.isPublished);

  function handleTogglePublish() {
    dispatch(togglePublish(video._id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") setPublishedStatus((pre) => !pre);
    });
  }

  function handleEditVideo() {}

  function handleDeleteVideo(isConfirm) {
    if (isConfirm) dispatch(deleteVideo(video._id));
  }

  // TODO: Add Views & Comments

  return (
    <tr key={video._id} className="group border">
      {/* Publish-Unpublished toggle box */}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <label
            htmlFor={"vid-pub-" + video._id}
            className="relative inline-block w-12 cursor-pointer overflow-hidden"
          >
            <input
              onChange={handleTogglePublish}
              type="checkbox"
              id={"vid-pub-" + video._id}
              defaultChecked={video.isPublished}
              className="peer sr-only"
            />
            <span className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
          </label>
        </div>
      </td>
      {/* Publish-Unpublished label */}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <span
            className={`inline-block rounded-2xl border px-1.5 py-0.5 ${
              publishedStatus
                ? "border-green-600 text-green-600"
                : "border-orange-600 text-orange-600"
            } `}
          >
            {publishedStatus ? "Published" : "Unpublished"}
          </span>
        </div>
      </td>

      {/* Thumbnail & Title*/}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={video.thumbnail} alt={video.title} />
          <h3 className="font-semibold">
            {publishedStatus ? (
              <Link to={`/watch/${video._id}`} className="hover:text-gray-300">
                {video.title}
              </Link>
            ) : (
              video.title
            )}
          </h3>
        </div>
      </td>

      {/* upload date */}
      <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
        {formatDate(video.createdAt)}
      </td>

      {/* Views */}
      <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
        {video.views}
      </td>

      {/* Comments Count */}
      <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
        {video.commentsCount}
      </td>

      {/* Like-Dislike Count */}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center gap-4">
          <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
            {video.likesCount} likes
          </span>
          <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
            {video.dislikesCount} dislikes
          </span>
        </div>
      </td>

      {/* Video Manipulation*/}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <ConfirmPopup
          title={"Permanently delete this video?"}
          subtitle={`${video.title} - total views: ${video.views}`}
          confirm="Delete"
          cancel="Cancel"
          critical
          checkbox="I understand that deleting is permanent, and can't be undone"
          ref={confirmDialog}
          actionFunction={handleDeleteVideo}
        />
        <UploadVideo ref={editDialog} video={video} />
        <div className="flex gap-4">
          {/* Delete Button */}
          <button
            onClick={() => confirmDialog.current?.open()}
            className="h-5 w-5 hover:text-red-500"
          >
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
          </button>
          {/* Edit Button */}
          <button
            onClick={() => editDialog.current?.open()}
            className="h-5 w-5 hover:text-[#ae7aff]"
          >
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              ></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AdminVideoAtom;
