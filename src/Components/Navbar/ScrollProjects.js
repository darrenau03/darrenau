import { PuzzleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

export default function ScrollProjects({ toggleFunction = null}) {
  return (
    // onClick={clicked(toggle)}
    <div
      onClick={() => {
        window.scrollTo({
          top: findPos(document.getElementById("proj")) - 60,
          behavior: "smooth",
        });
        if (toggleFunction !== null){
          toggleFunction();
        }
      }}
    >
      <div className=" rounded-lg flex mr-5 ml-5">
        {/* <PuzzleIcon className=" flex max-w-[20px] fill-[#495057]  mr-2 rounded-md "></PuzzleIcon> */}
        <h1 className="flex items-center text-[#495057] hover:scale-[1.2] ">Projects</h1>
      </div>
    </div>
  );
}
