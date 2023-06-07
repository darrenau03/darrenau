import "./App.css";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import { Navbar } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Coursework from "./Components/Coursework";
import { Helmet } from "react-helmet";
import { Timeline } from "./Components/Timeline";
import "react-vertical-timeline-component/style.min.css";

export default function App() {
  return (
    <div className="overflow-x:hidden">
      <Helmet>
        <style>{"body { background-color: #7F8487; }"}</style>
      </Helmet>
      <div className="flex justify-center w-full m-0">
        <div className="flex flex-col justify-center w-full">
          <Navbar />
          <div className="flex justify-center bg-[#dee2e6]">
            <Home />
          </div>
          <div className="flex justify-center bg-[#ced4da]">
            <Timeline />
          </div>
          <div className="flex justify-center bg-[#dee2e6]">
            <Projects />
          </div>
          <div className="flex justify-center bg-[#ced4da]">
            <Coursework grade="" />
          </div>
        </div>
      </div>
    </div>
  );
}
