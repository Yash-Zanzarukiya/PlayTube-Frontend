import React from "react";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPlaylist, updatePlaylist } from "../../app/Slices/playlistSlice";
import { toast } from "react-toastify";
import { publishVideo, updateVideo } from "../../app/Slices/videoSlice";

function VideoForm({ video }, ref) {
  const dialog = useRef();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: video?.title || "",
      description: video?.description || "",
    },
  });

  useImperativeHandle(ref, () => {
    return {
      open() {
        // dialog.current.show();
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {}

  function handleVideo(data) {
    // TODO do not submit if details are not modified
    if (video) {
      dispatch(updateVideo({ videoId: video._id, data })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") dialog.current.close();
      });
    } else {
      dispatch(publishVideo({ data })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") dialog.current.close();
      });
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="size-full h-fit backdrop:backdrop-blur-lg lg:w-1/2 md:w-2/3"
      onClose={handleClose}
    >
      <div className=" bg-black/85 p-2 sm:p-2 text-white">
        <form
          onSubmit={handleSubmit(handleVideo)}
          enctype="multipart/form-data"
          className="h-fit border bg-[#121212]"
        >
          {/* Close Buttons */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-semibold">Upload Video</h2>
            <button
              type="button"
              autoFocus
              onClick={() => dialog.current.close()}
              className="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
            >
              Close
            </button>
          </div>

          {/* Form Input */}
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
            {/* Video File */}
            {!video && (
              <>
                <div className="w-full border-2 border-dashed px-4 py-12 text-center">
                  <span className="mb-4 inline-block w-24 rounded-full bg-[#E4D3FF] p-4 text-[#AE7AFF]">
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="mb-2 font-semibold">Drag and drop video files to upload</h6>
                  <p className="text-gray-400">
                    Your videos will be private until you publish them.
                  </p>
                  <label
                    htmlFor="upload-video"
                    className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  >
                    <input
                      type="file"
                      {...register("videoFile", { required: true })}
                      id="upload-video"
                      className="sr-only"
                    />
                    Select Files
                  </label>
                </div>
                {errors.videoFile?.type === "required" && (
                  <div className="text-red-500">*VideoFile is required</div>
                )}
              </>
            )}

            {/* Thumbnail */}
            <div className="w-full">
              <label htmlFor="thumbnail" className="mb-1 inline-block hover:cursor-pointer">
                Thumbnail
                {!video && <span className="text-red-500">*</span>}
              </label>
              <input
                id="thumbnail"
                type="file"
                {...register("thumbnail", { required: video ? false : true })}
                className="w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5"
              />
            </div>
            {errors.thumbnail?.type === "required" && (
              <div className=" text-red-500">*Thumbnail is required</div>
            )}

            {/* Title */}
            <div className="w-full">
              <label htmlFor="title" className="mb-1 inline-block">
                Title
                <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                {...register("title", { required: true })}
                type="text"
                className="w-full border bg-transparent px-2 py-1 outline-none"
              />
            </div>
            {errors.title?.type === "required" && (
              <div className=" text-red-500">*Title is required</div>
            )}

            {/* Description */}
            <div className="w-full">
              <label htmlFor="desc" className="mb-1 inline-block">
                Description
              </label>
              <textarea
                id="desc"
                {...register("description", { required: false })}
                className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
              ></textarea>
            </div>

            {/* Control Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* Cancel button */}
              <button
                type="button"
                onClick={() => dialog.current.close()}
                className="border px-4 py-3 hover:bg-[#212121FF]"
              >
                Cancel
              </button>
              {/* Submit button */}
              <button
                type="submit"
                disabled={
                  errors.description || errors.title || errors.videoFile || errors.thumbnail
                }
                className="bg-[#ae7aff] px-4 py-3 text-black hover:font-semibold hover:border disabled:bg-[#E4D3FF] disabled:cursor-not-allowed"
              >
                {video ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>,
    document.getElementById("popup-models")
  );
}

export default React.forwardRef(VideoForm);
