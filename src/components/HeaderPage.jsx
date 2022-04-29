import React from "react";

export default function HeaderPage(props) {
  const { title, btnClick, btnTitle } = props;
  return (
    <header className="px-5 py-4 border-b border-slate-100">
      <div className="flex justify-between">
        <h2 className="font-semibold text-slate-800 uppercase">{title}</h2>
        {btnTitle && (
          <button
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            type="button"
            onClick={btnClick}
          >
            <svg
              className="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">{btnTitle}</span>
          </button>
        )}
      </div>
    </header>
  );
}
