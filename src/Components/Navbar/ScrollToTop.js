import linkedin from "../../images/Darren.ico";

export default function ScrollToTop() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="hover:scale-[1.2] rounded-lg flex mr-5 ml-5 ">
        <img src={linkedin} className=" flex max-w-[50px] rounded-md "></img>
        {/* <h1 className="flex items-center">Home</h1> */}
      </div>
    </div>
  );
}
