import github from "../../images/github.png";

export default function ScrollToTop() {
  const handleClick = () => {
    window.open("https://github.com/darrenau03/");
  };
  return (
    <div onClick={handleClick}>
      <div className="hover:scale-[1.2]   flex mr-5 ml-5 ">
        <img src={github} className=" max-w-[40px]"></img>
      </div>
    </div>
  );
}
