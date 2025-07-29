
import React from "react";
import CTAHover from "./CTAHover";
import CTANoHover from "./CTANoHover";

export default function CTAButtons() {

  return (
    <div className="">
      <div className={`hidden [@media(hover:hover)]:block`} >
        <CTAHover />
      </div>
      <div className={`block [@media(hover:hover)]:hidden`} >
        <CTANoHover />
      </div>
    </div>
  );
}
