import React from "react";

export default function Container({ children,flex=false }) {
  return (
    <div className="bg-indigo-100 py-6 md:py-12">
      <div className={`container px-4 mx-auto ${flex && 'flex flex-wrap'}`}>{children}</div>
    </div>
  );
}
