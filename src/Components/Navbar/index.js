import React from "react";
import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../../Constants";
import { MobileNavLinks } from "./mobileNavLinks";

import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import ScrollToTop from "./ScrollToTop";
import ScrollExperience from "./ScrollExperience";

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className="bg-[#adb5bd]/75 text-2xl fixed top-0 z-40 flex justify-center flex-wrap font-bold w-full">
      <div className="flex max-w-[1400px] w-full justify-between items-center">
        <ScrollToTop />
        <div className="flex flex-row m-4">
          {/* <ScrollProjects />
          <ScrollCoursework /> */}

          {!isMobile && <ScrollExperience toggleFunction={null} />}
          {!isMobile && <ScrollProjects toggleFunction={null} />}
          {!isMobile && <ScrollCoursework toggleFunction={null} />}

          {isMobile && <MobileNavLinks />}
        </div>
      </div>
    </div>
  );
}
