import React from "react";

function Coursework({ grade }) {
  return (
    <div
      id="cw"
      className="flex text-black mt-[100px] mb-[100px] flex-col max-w-[1400px] justify-center"
    >
      <div className="flex text-4xl justify-center font-bold">Course Work</div>
      {/* <div className="flex justify-center mt-[20px]">GPA: 4.0</div> */}
      <div className="flex flex-wrap mt-[50px] justify-left p-4">
        <div className="p-4 w-96">
          <div className=" mb-[10px] text-3xl ">Fall 2021</div>
          <div>M E 316T: Thermodynamics{grade}</div>
          <div>M E 333T: Engineering Communications{grade}</div>
          <div>C S 313E: Elements of Software Design{grade}</div>
          <div>HIS 315L: The United States Since 1865{grade}</div>
          <div>M E 177K: Projects in Mechanical Engineering{grade}</div>
        </div>
        <div className="p-4 w-96">
          <div className="text-3xl mb-[10px]">Spring 2022</div>
          <div>E M 306: Statics{grade}</div>
          <div>M 427J: Differential Equations with Linear Algebra{grade}</div>
          <div>
            M 427L: Vector Calculus (Advanced Calculus for Applications II)
            {grade}
          </div>
          <div>M E 302: Intro to Engineering Design and Graphics{grade}</div>
          <div>UGS 310: Undergrad Research Experience{grade}</div>
        </div>
        <div className="p-4 w-96">
          <div className="text-3xl mb-[10px]">Summer 2022</div>
          <div>C S 329E: Elements of Data Analytics</div>
        </div>
        <div className="p-4 w-96">
          <div className=" mb-[10px] text-3xl ">Fall 2022</div>
          <div>E M 319: Mechanics of Solids{grade}</div>
          <div>
            M E 318M: MATLAB (Program and Engineering Computational Methods)
            {grade}
          </div>
          <div>M E 314D: Dynamics {grade}</div>
          <div>UGS 303: Building Winnings Teams{grade}</div>
        </div>
        <div className="p-4 w-96">
          <div className=" mb-[10px] text-3xl ">Spring 2023</div>
          <div>M E 340: Mechatronics{grade}</div>
          <div>M E 334: Materials Engineering{grade}</div>
          <div>M E 330: Fluid Mechanics {grade}</div>
          <div>M E 140: Mechatronics Lab {grade}</div>
          <div>M E 134: Materials Engineering Lab {grade}</div>
          <div>M E 130: Fluid Mechanics Lab{grade}</div>
        </div>
        <div className="p-4 w-96">
          <div className=" mb-[10px] text-3xl ">Summer and Fall 2023</div>
          <div>N/A: Internship{grade}</div>
        </div>
      </div>
    </div>
  );
}

export default Coursework;
