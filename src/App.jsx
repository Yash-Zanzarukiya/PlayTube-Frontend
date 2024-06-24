import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./app/Slices/authSlice";
import { healthCheck } from "./app/Slices/healthcheck";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import thin_loading from "./assets/thin_loading.svg";

function App() {
  const dispatch = useDispatch();

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(healthCheck()).then(() => {
      dispatch(getCurrentUser()).then(() => {
        setInitialLoading(false);
      });
    });
    setInterval(() => {
      dispatch(healthCheck());
    }, 5 * 60 * 1000);
  }, []);

  if (initialLoading)
    return (
      <div className="h-screen w-full  overflow-y-auto bg-[#121212] text-white">
        <div className="flex flex-col items-center justify-center mt-64">
          <img src={thin_loading} className="logo w-24" alt="Loading..." />
          <h1 className="text-3xl text-center mt-8 font-semibold">Please wait...</h1>
          <h1 className="text-xl text-center mt-4">Refresh the page if it takes too long</h1>
        </div>
      </div>
    );

  // TODO: Apply Validations and AJAX on all Forms

  return (
    <>
      <Outlet />
      <div id="popup-models" className="bg-purple-400 relative"></div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;
