import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function ConfirmPopup(
  {
    title = "Are you sure?",
    subtitle,
    confirm = "Confirm",
    cancel = "Cancel",
    critical = false,
    actionFunction,
  },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const handleClose = () => actionFunction(false);

  const handleConfirm = () => {
    actionFunction(true);
    dialog.current.close();
  };

  return createPortal(
    <dialog ref={dialog} className="h-full" onClose={handleClose}>
      <div className="relative flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <div className="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-black/50 px-4 pb-[86px] pt-4 sm:top-[calc(82px)] sm:px-14 sm:py-8">
          <form
            onSubmit={handleConfirm}
            className="mx-auto w-full max-w-lg overflow-auto rounded-lg border border-gray-700 text-white bg-[#121212] p-4"
          >
            {/* close button */}
            <div className="mb-2 flex items-start justify-end">
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
            {/* Message */}
            <div className="flex flex-col items-center mb-8">
              <h6 className="text-3xl font-semibold mb-3">{title}</h6>
              {subtitle && <div className="block text-sm text-gray-300">{subtitle}</div>}
            </div>
            {/* Control Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => dialog.current.close()}
                className="border px-4 py-3 hover:bg-[#212121FF] hover:border-dashed"
              >
                {cancel}
              </button>
              <button
                type="submit"
                className={`${
                  critical ? "bg-[#212121]" : "bg-[#ae7aff]"
                } px-4 py-3 border text-red-500 hover:text-black hover:bg-red-600 font-semibold hover:border-dashed`}
              >
                {confirm}
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById("popup-models")
  );
}

export default React.forwardRef(ConfirmPopup);
