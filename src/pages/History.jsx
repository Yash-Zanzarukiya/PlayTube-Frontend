import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { watchHistory } from "../app/Slices/authSlice";
import { formatTimestamp, formatVideoDuration } from "../helpers/formatFigures";

function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(watchHistory()).then((res) => {
      setVideos(res.payload);
      setIsLoading(false);
    });
  }, []);

  if(isLoading){
    return <h1>Loading...</h1>
  }
  
  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <ul className="flex flex-col gap-4 p-4">
        {videos.map((video) => (
          <li key={video._id} className="hover:bg-[#212121AA]">
            <Link to={`/watch/${video._id}`}>
              <div className="w-full max-w-3xl gap-x-4 md:flex max-h-[175px] overflow-hidden">
                <div className="relative mb-2 w-full md:mb-0 md:w-5/12  ">
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
                    <Link to={`/user/${video.owner.username}`}>
                      <img
                        src={video.owner.avatar}
                        alt={video.owner.username}
                        className="h-full w-full rounded-full"
                      />
                    </Link>
                  </div>
                  <div className="w-full">
                    <h6 className="mb-1 font-semibold md:max-w-[75%]">{video.title}</h6>
                    <p className="flex text-sm text-gray-200 sm:mt-3">
                      {video.views} Views · {formatTimestamp(video.createdAt)}
                    </p>
                    <div className="flex items-center gap-x-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 md:block">
                        <Link to={`/user/${video.owner.username}`}>
                          <img
                            src={video.owner.avatar}
                            alt="codemaster"
                            className="h-full w-full rounded-full"
                          />
                        </Link>
                      </div>
                      <p className="text-sm text-gray-200 hover:text-gray-300">
                        <Link to={`/user/${video.owner.username}`}>{video.owner.fullName}</Link>
                      </p>
                    </div>
                    <p className="mt-2 hidden text-sm md:block">{video.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default History;
