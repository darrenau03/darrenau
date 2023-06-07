import React from "react";
import { useState } from "react";
import Modal from "./Modal";

function disableScroll() {
  // Get the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Save the current scroll position
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

// Enable scrolling

const ModalTile = ({
  projectName,
  image,
  description,
  modalHtml,
  projectDuration,
  toolsUsed,
}) => {
  const [modalOn, setModalOn] = useState(false); //current state,
  const [, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
    document.body.style.overflow = "hidden";
    disableScroll();
  };

  return (
    <div className="flex w-1/4 min-w-[350px] mb-[10px] m-[10px] ">
      <div
        className="flex flex-col bg-[#495057] p-4 rounded-md text-white hover:scale-[1.03]"
        onClick={clicked}
      >
        <div className="flex text-2xl text-center justify-center">
          {projectName}
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            alt="asdf"
            className="object-scale-down mt-5 mb-5 rounded "
          />
        </div>
        <div className="flex text-sm items text-center justify-center">
          {description}
        </div>
      </div>

      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          modalHtml={modalHtml}
          projectDuration={projectDuration}
          projectName={projectName}
          toolsUsed={toolsUsed}
        />
      )}
    </div>
  );
};

export default ModalTile;
