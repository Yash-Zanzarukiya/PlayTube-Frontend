import React from "react";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPlaylist, updatePlaylist } from "../../app/Slices/playlistSlice";
import { toast } from "react-toastify";

function PlaylistForm({ playlist }, ref) {
  const dialog = useRef();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: playlist?.name || "",
      description: playlist?.description || "",
    },
  });

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.show();
        // dialog.current.showModal();
      },
    };
  });

  function handleClose() {}

  function handleUpdatePlaylist(data) {
    if (playlist) {
      dispatch(updatePlaylist({ playlistId: playlist._id, data })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") dialog.current.close();
      });
    } else {
      dispatch(createPlaylist({ data })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") dialog.current.close();
      });
    }
  }

  return createPortal(
    <dialog ref={dialog} className="h-full" onClose={handleClose}>
      <div className="relative flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <div className="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-black/50 px-4 pb-[86px] pt-4 sm:top-[calc(82px)] sm:px-14 sm:py-8">
          <form
            onSubmit={handleSubmit(handleUpdatePlaylist)}
            className="mx-auto w-full max-w-lg overflow-auto rounded-lg border border-gray-700 text-white bg-[#121212] p-4"
          >
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-xl font-semibold">
                {playlist ? "Edit" : "Create"} Playlist
                <span className="block text-sm text-gray-300">
                  Share where you&#x27;ve worked on your profile.
                </span>
              </h2>
              <button
                autoFocus
                type="button"
                onClick={() => dialog.current.close()}
                className="h-6 w-6 focus:border focus:border-dotted hover:border-dotted hover:border"
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Inputs  */}
            <div className="mb-6 flex flex-col gap-y-4">
              {/* title */}
              <div className="w-full">
                <label htmlFor="name" className="mb-1 inline-block">
                  Title
                  <span className=" text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name of the Playlist"
                  {...register("name", { required: true })}
                  className="w-full border bg-transparent px-2 py-1 outline-none"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Title is required!!!</p>
                )}
              </div>
              {/* description */}
              <div className="w-full">
                <label htmlFor="desc" className="mb-1 inline-block">
                  Description
                  {/* <span className=" text-red-600">*</span> */}
                </label>
                <textarea
                  id="desc"
                  placeholder="Enter some description of the Playlist"
                  {...register("description", { required: false })}
                  className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
                ></textarea>
                {errors.description?.type === "required" && (
                  <p className="text-red-600">Description is required!!!</p>
                )}
              </div>
            </div>
            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => dialog.current.close()}
                className="border px-4 py-3 hover:bg-[#212121FF]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={errors.name}
                className="bg-[#ae7aff] px-4 py-3 text-black hover:font-semibold hover:border disabled:bg-[#E4D3FF] disabled:cursor-not-allowed"
              >
                {playlist ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById("popup-models")
  );
}

export default React.forwardRef(PlaylistForm);
