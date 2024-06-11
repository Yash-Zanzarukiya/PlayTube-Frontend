import React from "react";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";
import { Link, useNavigate } from "react-router-dom";

function VideoView({ videos = [], loading = true, fetching = false }) {
  const navigate = useNavigate();

  if (loading)
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex flex-col gap-4 p-4">
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-slate-100/10 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded bg-slate-100/10 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex bg-slate-100/10 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 bg-slate-100/10 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] bg-slate-100/10 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] bg-slate-100/10 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-slate-100/10 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded bg-slate-100/10 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex bg-slate-100/10 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 bg-slate-100/10 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] bg-slate-100/10 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] bg-slate-100/10 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-slate-100/10 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded bg-slate-100/10 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex bg-slate-100/10 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 bg-slate-100/10 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] bg-slate-100/10 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] bg-slate-100/10 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-slate-100/10 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded bg-slate-100/10 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex bg-slate-100/10 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 bg-slate-100/10 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] bg-slate-100/10 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] bg-slate-100/10 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <ul className="flex flex-col gap-4 p-4">
        {videos?.length > 0 &&
          videos.map((video) => (
            <li key={video._id} className="w-full hover:bg-white/5">
              <Link to={`/watch/${video._id}`}>
                <div className="w-full max-w-3xl lg:max-w-4xl gap-x-4 md:flex">
                  <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div className="w-full pt-[56%]">
                      <div className="absolute inset-0">
                        <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
                      </div>
                      <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        {formatVideoDuration(video.duration)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-2 md:w-7/12">
                    <div className="h-10 w-10 shrink-0 md:hidden">
                      <button onClick={() => navigate(`/user/${video.owner.username}`)}>
                        <img
                          src={video.owner.avatar}
                          alt={video.owner.username}
                          className="h-full w-full rounded-full"
                        />
                      </button>
                    </div>
                    <div className="w-full">
                      <h6 className="mb-1 font-semibold md:max-w-[75%]">{video.title}</h6>
                      <p className="flex text-sm text-gray-200 sm:mt-3">
                        {video.views} Views · {formatTimestamp(video.createdAt)}
                      </p>
                      <div className="flex items-center gap-x-4">
                        <div className="mt-2 hidden h-10 w-10 shrink-0 md:block">
                          <img
                            src={video.owner.avatar}
                            alt={video.owner.username}
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <p className="text-sm text-gray-200">{video.owner.fullName}</p>
                      </div>
                      <p className="mt-2 hidden text-sm md:block">
                        {video.description.substr(0, 170) +
                          (video.description.length > 170 ? "..." : "")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        {fetching && (
          <>
            <div className="mt-2 flex items-center justify-center text-xl">
              <svg
                aria-hidden="true"
                role="status"
                className="mr-2 inline-block h-7 w-7 animate-spin text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#AE7AFF"
                ></path>
              </svg>
              Please wait...
            </div>
          </>
        )}
      </ul>
    </section>
  );
}

export default VideoView;
