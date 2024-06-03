import React from "react";
import { Aside, Header } from "./index";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <Header />
        <div
          id="popup-models"
          className=""
        ></div>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
