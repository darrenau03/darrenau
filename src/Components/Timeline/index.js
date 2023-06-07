import TREL from "../../images/Timeline/TREL.jpg";
import SpaceX from "../../images/Timeline/SpaceX.jpg";
import Starfish from "../../images/Timeline/Starfish.jpg";
import LHR from "../../images/Timeline/LHR.jpg";
import UT from "../../images/Timeline/UT.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export function Timeline() {
  return (
    <div className="flex w-5/6 flex-col mb-[50px]" id="experience">
      <div className="flex text-4xl justify-center font-bold mb-[50px] mt-[100px]">
        Experience
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="Aug 2023 - Dec 2023"
          icon={<img src={SpaceX} style={{ borderRadius: 400 / 2 }}></img>}
        >
          <h3 className=" text-xl font-bold">
            <a
              href="https://www.spacex.com"
              className=" text-[#355e9c] hover:text-purple-800"
            >
              SpaceX
            </a>
          </h3>
          <h4 className="italic ">Hawthrone, CA</h4>
          <p>Starship Components Manufacturing Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Jun 2023 - Aug 2023"
          icon={<img src={Starfish} style={{ borderRadius: 400 / 2 }}></img>}
        >
          <h3 className=" text-xl font-bold">
            <a
              href="https://www.starfishspace.com/"
              className=" text-[#355e9c] hover:text-purple-800"
            >
              Starfish Space
            </a>
          </h3>
          <h4 className="italic ">Kent, WA</h4>
          <p>Mechanical Engineering Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Aug 2021 - May 2023"
          icon={<img src={TREL} style={{ borderRadius: 400 / 2 }}></img>}
        >
          <h3 className=" text-xl font-bold">
            <a
              href="https://www.texasrocketlab.com/"
              className=" text-[#355e9c] hover:text-purple-800"
            >
              Texas Rocket Engineering Lab
            </a>
          </h3>
          <h4 className="italic ">Austin, TX</h4>
          <p>
            Led Design of Thrust Vector Control Mechanism on Collegiate Liquid
            Bipropellant Rocket
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Feb 2022 - May 2023"
          icon={<img src={LHR} style={{ borderRadius: 400 / 2 }}></img>}
        >
          <h3 className=" text-xl font-bold">
            <a
              href="https://www.longhornracing.org/electric-vehicle/"
              className=" text-[#355e9c] hover:text-purple-800"
            >
              Longhorn Racing Electric
            </a>
          </h3>
          <h4 className="italic ">Austin, TX</h4>
          <p>
            Designed and Manufactured Components for Collegiate EV FSAE Team
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Aug 2022 - July 2023"
          icon={<img src={UT} style={{ borderRadius: 400 / 2 }}></img>}
        >
          <h3 className=" text-xl font-bold">
            <a
              href="https://www.utexas.edu//"
              className=" text-[#355e9c] hover:text-purple-800"
            >
              UT Austin
            </a>
          </h3>
          <h4 className="italic ">Austin, TX</h4>
          <p>
            Conducted Research Under Professors at UT in Machine Learning and
            Robotics
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
