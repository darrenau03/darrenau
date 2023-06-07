import { useState } from "react";
import React, { useEffect } from "react";

import { MenuToggle } from "./menuToggle";

import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import ScrollTimeline from "./ScrollExperience";

export default function OpenMenu() {
  const [isOpen, setOpen] = useState(false);

  // Rest of the component code

  const flipOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    });
  });

  return (
    // JSX to render the menu
    <div className="">
      <MenuToggle isOpen={isOpen} toggle={flipOpen} className="" />

      {isOpen && (
        <div className="z-0">
          {/* <MenuToggle isOpen={isOpen} toggle={flipOpen} className="" /> */}
          <ul className="m-0 p-0 bg-white fixed right-0 h-full w-6/12 top-0">
            <div className="flex mt-9 justify-center scale-[1]">
              <MenuToggle isOpen={isOpen} toggle={flipOpen} className="" />
            </div>

            <div className="flex flex-col space-y-4 mt-9 ">
              <ScrollTimeline toggleFunction={flipOpen} />
              <ScrollProjects toggleFunction={flipOpen} />
              <ScrollCoursework toggleFunction={flipOpen} />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
