import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { icons } from "../../assets/icons";

function ConfirmPopup(
  {
    title = "Are you sure?",
    subtitle,
    message,
    confirm = "Confirm",
    cancel = "Cancel",
    critical = false,
    checkbox = false,
    actionFunction,
  },
  ref
) {
  const dialog = useRef();

  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setShowPopup(true);
      },
      close() {
        dialog.current?.close();
      },
    };
  });

  useEffect(() => {
    if (showPopup) {
      dialog.current.showModal();
    }
  }, [showPopup]);

  const handleClose = () => {
    dialog.current.close();
    setShowPopup(false);
    actionFunction(false);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    dialog.current?.close();
    actionFunction(true);
  };

  return (
    <div className="absolute">
      {showPopup &&
        createPortal(
          <dialog ref={dialog} onClose={handleClose} className="h-full backdrop:backdrop-blur-sm">
            <div className="relative flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
              <div className="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-black/50 px-4 pb-[86px] pt-4 sm:top-[calc(82px)] sm:px-14 sm:py-8">
                <form
                  onSubmit={handleConfirm}
                  className="mx-auto w-full max-w-lg overflow-auto rounded-lg border border-gray-700 text-white bg-[#121212] p-4"
                >
                  {/* close button */}
                  <div className="mb-2 flex items-start justify-end ">
                    <button
                      autoFocus
                      type="button"
                      onClick={handleClose}
                      className="h-6 w-6 focus:border focus:border-dotted hover:border-dotted hover:border "
                    >
                      {icons.cross}
                    </button>
                  </div>

                  {/* Message Headers*/}
                  <div className="flex flex-col items-center text-center justify-center mb-3">
                    <h6 className="text-3xl font-semibold mb-3  select-none">{title}</h6>
                    {subtitle && <span className=" text-lg text-gray-300">{subtitle}</span>}
                    {message && <span className=" text-lg text-gray-300 mt-3">{message}</span>}
                  </div>

                  {/* Checkbox field */}
                  {checkbox && (
                    <div className="flex justify-center items-center my-5">
                      <input
                        id={"confirm-checkbox"}
                        type="checkbox"
                        defaultChecked={false}
                        className="size-4 mr-2"
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                      <label
                        htmlFor={"confirm-checkbox"}
                        className=" hover:cursor-pointer select-none"
                      >
                        {checkbox}
                      </label>
                    </div>
                  )}

                  {/* Control Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="border px-4 py-3 hover:bg-[#212121FF] hover:border-dashed"
                    >
                      {cancel}
                    </button>
                    <button
                      type="submit"
                      disabled={checkbox && !isChecked}
                      className={`${
                        critical ? "bg-[#212121] text-red-500" : "bg-[#ae7aff] text-white"
                      } px-4 py-3 border enabled:hover:text-black enabled:hover:bg-red-500/80 font-semibold hover:border-dashed disabled:cursor-not-allowed`}
                    >
                      {confirm}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>,
          document.getElementById("popup-models")
        )}
    </div>
  );
}

export default React.forwardRef(ConfirmPopup);
