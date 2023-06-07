import React from "react";
import Typewriter from "typewriter-effect";
import img1 from "../../images/headshot.png";
import Linkedin from "./Linkedin";
import Github from "./Github";

const Home = () => {
  return (
    <div className=" flex flex-wrap justify-around h-1/3 p-10 mt-10">
      <div className="flex flex-wrap items-center w-2/3 ">
        <div className="flex flex-col justify-center h-auto text-2xl">
          <div className="flex flex-col h-1/2 justify-center items-center">
            <h1 className="font-bold text-4xl mb-4 mt-10">Hi, I'm Darren!</h1>
            <h2 className="mb-4">
              I am a junior at the{" "}
              <a
                href="https://www.utexas.edu/"
                className=" text-[#0E19B1] hover:text-purple-800"
              >
                University of Texas at Austin
              </a>{" "}
              majoring in{" "}
              <a
                href="https://www.me.utexas.edu/"
                className=" text-[#0E19B1] hover:text-purple-800"
              >
                Mechanical Engineering
              </a>{" "}
              and minoring in{" "}
              <a
                href="https://www.cs.utexas.edu/"
                className=" text-[#0E19B1] hover:text-purple-800"
              >
                Computer Science
              </a>{" "}
            </h2>
          </div>

          <div className="flex justify-center items-center italic h-[80px]">
            {/* <Typewriter
              options={{
                strings: [
                  "Rock Climbing Enthusiast",
                  "Bay Area Native",
                  "Australian Dual Citizen",
                  "Aspiring Pianist",
                  "50% Hong Kong, 50% Malaysian",
                ],
                autoStart: true,
                loop: true,
              }}
            /> */}
          </div>
          <div className="flex flex-row items-center justify-between mt-[50px] h-[20px] ">
            <div>
              <a
                href={
                  "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/Darren_Au_Resume.pdf"
                }
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold"
              >
                <div className="hover:scale-[1.2] ">Resume</div>
              </a>
            </div>

            <Linkedin></Linkedin>
            <Github></Github>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-[50px]">
        <img
          src={img1}
          alt="face"
          className="w-auto max-w-[350px] object-contain rounded-3xl border-4 mt-[20px]"
        />
      </div>
    </div>
  );
};

export default Home;
