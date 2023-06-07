import React from "react";
import { useState } from "react";
import ExpandedImage from "./ExpandedImage";

const Media = ({ image, caption, video }) => {
  const [imageOn, setImageOn] = useState(false); //current state,
  const clicked = () => {
    setImageOn(true);
  };
  if (!video) {
    return (
      <div className="flex p-2">
        <div onClick={clicked} className="flex flex-col">
          <div className="object-scale-down max-w-[500px]  flex mt-10 mb-5 rounded mx-auto">
            {image}
          </div>
          <div className="flex justify-center text-xs mb-10">{caption}</div>
        </div>
        {imageOn && (
          <ExpandedImage
            image={image}
            setImageOn={setImageOn}
            className="flex"
          ></ExpandedImage>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex p-2">
        <div className="flex flex-col">
          <div className="object-scale-down max-w-[500px]  flex mt-10 mb-5 rounded mx-auto">
            {image}
          </div>
          <div className="flex justify-center text-xs mb-10">{caption}</div>
        </div>
      </div>
    );
  }
};

export default Media;
