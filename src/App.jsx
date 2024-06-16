import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./app/Slices/authSlice";
import { healthCheck } from "./app/Slices/healthcheck";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import poco_loading from "./assets/poco_loading.svg";

function App() {
  const dispatch = useDispatch();

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(healthCheck())
      .unwrap()
      .then(() => {
        dispatch(getCurrentUser()).then(() => setInitialLoading(false));
      });
  }, []);

  if (initialLoading)
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-y-auto bg-[#121212] text-white">
        <img src={poco_loading} className="logo" alt="Vite logo" />
        <h1 className="text-2xl">Thank you for your patience...</h1>
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
