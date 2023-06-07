// import { useEffect } from "react";


const ExpandedImage = ({ setImageOn, image }) => {
  const handleClick = () => {
    // document.body.style.overflow = "scroll";
    setImageOn(false);
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape") {
  //       handleClick();
  //     }
  //   });
  // });

  return (
    <div className="flex justify-center " onClick={handleClick}>
      <div className=" bg-zinc-200 opacity-95 flex justify-center items-center fixed inset-0 z-50 ">
        <div className="flex flex-row justify-center items-center object-contain 4 w-9/12  border-4">
          {image}
        </div>
      </div>
    </div>
  );
};

export default ExpandedImage;
