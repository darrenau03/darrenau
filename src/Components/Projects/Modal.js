import React, { useEffect } from "react";

import { DeviceSize } from "../../Constants";
import { useMediaQuery } from "react-responsive";
import XButton from "./XButton";

function enableScroll() {
  window.onscroll = null;
}

const Modal = ({
  setModalOn,
  toolsUsed,
  modalHtml,
  projectDuration,
  updateDate,
  projectName,
}) => {
  const handleOKClick = () => {
    document.body.style.overflow = "scroll";
    setModalOn(false);
    enableScroll();
  };

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleOKClick();
      }
    });
  });

  return (
    <div className=" bg-zinc-200 fixed inset-0 z-50 ">
      <div className="flex flex-row  h-screen justify-center ">
        {!isMobile && (
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-row bg-white p-12  w-10/12 h-5/6 overflow-y-scroll rounded-xl ">
              <div className="flex justify-start w-full flex-col">
                <div className="flex flex-col ">
                  <div className="text-2xl mb-[10px]">{projectName}</div>
                  <div className=" text-xl mb-[10px] italic ">
                    Project Date: {projectDuration}
                  </div>
                  <div className="text-sm mb-[20px] font-bold">
                    Tools Used: {toolsUsed}
                  </div>
                  <div className="flex items-start pb-12">{modalHtml}</div>
                </div>
              </div>

              <XButton setModalOn={setModalOn} />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="flex justify-center pt-8">
            <div className="bg-white p-12 w-10/12 h-5/6 overflow-y-scroll rounded-xl">
              <div className="">
                <div className="text-2xl mb-[10px]">{projectName}</div>
                <div className=" text-xl mb-[10px] italic ">
                  Project Date: {projectDuration}
                </div>
                <div className="text-sm mb-[20px] font-bold">
                  Tools Used: {toolsUsed}
                </div>
                <div className="flex items-start pb-12">{modalHtml}</div>
              </div>

              <div class="flex fixed inset-x-0 bottom-6 justify-center">
                <XButton setModalOn={setModalOn} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
