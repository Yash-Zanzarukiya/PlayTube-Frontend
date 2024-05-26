import React, { useId } from "react";

function Input({ label, type = "text", required = false, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="flex flex-col w-full max-w-sm ">
      {label && (
        <label htmlFor={id} className="mb-1 inline-block text-gray-300 capitalize">
          {required && <span className=" text-red-600 text-l">* </span>}
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`mb-4 rounded-lg border bg-transparent px-3 py-2 ${className}`}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
