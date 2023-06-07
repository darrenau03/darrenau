import React, { Component } from "react";

function enableScroll() {
  window.onscroll = null;
}

export default function XButton({ setModalOn }) {
  const handleOKClick = () => {
    document.body.style.overflow = "scroll";
    setModalOn(false);
    enableScroll();
  };
  return (
    <div class="justify-end sticky top-0">
      <button onClick={handleOKClick} className="flex">
        <div className="rounded-lg hover:bg-red-500 text-neutral-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
