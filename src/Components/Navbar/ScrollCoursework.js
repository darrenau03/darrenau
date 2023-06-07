
function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

export default function ScrollCoursework({ toggleFunction =null}) {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: findPos(document.getElementById("cw")) - 60,
          behavior: "smooth",
        });
        if (toggleFunction !== null){
          toggleFunction();
        }
      }}
    >
      <div className="flex rounded-lg mr-5 ml-5">
        {/* <ClipboardIcon className="flex max-w-[20px] mr-2 rounded-md fill-[#495057]"></ClipboardIcon> */}
        <h1 className="flex items-center whitespace-nowrap text-[#495057] hover:scale-[1.2] ">
          Course Work
        </h1>
      </div>
    </div>
  );
}
