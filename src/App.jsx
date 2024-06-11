import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./app/Slices/authSlice";
import { healthCheck } from "./app/Slices/healthcheck";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(healthCheck())
      .unwrap()
      .then(() => {
        dispatch(getCurrentUser()).unwrap();
      });
  }, []);

  // TODO: Apply Validations and AJAX on all Forms

  return (
    <>
      <Outlet />
      <div id="popup-models" className="bg-purple-400 relative"></div>
      <ToastContainer
        position="bottom-right"
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
