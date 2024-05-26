import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#ae7aff]",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button className={` px-4 py-3 ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  );
}
