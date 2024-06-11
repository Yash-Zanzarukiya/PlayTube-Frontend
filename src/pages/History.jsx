import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearWatchHistory, watchHistory } from "../app/Slices/authSlice";
import { GuestComponent, VideoList } from "../components";
import { icons } from "../assets/icons";

function History() {
  const dispatch = useDispatch();

  const { userData, loading } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(watchHistory());
  }, []);

  const deleteWatchHistory = () => {
    dispatch(clearWatchHistory());
  };

  const videos = useSelector(({ auth }) => auth.userData.watchHistory);

  const isHistoryEmpty = !loading && videos?.length < 1;

  return (
    <>
      <section className="w-full">
        {!isHistoryEmpty && (
          <div className="flex items-center justify-center py-2">
            <button
              onClick={deleteWatchHistory}
              className="mt-4 rounded inline-flex items-center gap-x-2 bg-[#ae7aff] hover:bg-[#ae7aff]/95 border border-transparent hover:border-dotted hover:border-white px-3 py-2 font-semibold text-black"
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
              Clear History
            </button>
          </div>
        )}
        <ul className="w-full flex flex-col gap-4">
          {!isHistoryEmpty && <VideoList videos={videos} loading={loading} />}
          {isHistoryEmpty && (
            <GuestComponent
              title="Empty Video History"
              subtitle="You have no previously saved history."
              icon={icons.history}
              guest={false}
            />
          )}
        </ul>
      </section>
    </>
  );
}

export default History;
