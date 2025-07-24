import React from "react";
import SafeIcon from "../common/SafeIcon";
import Flip3DButton from "./general/Flip3DButton";

export default function CTAButtons() {
  return (
    <div className="flex flex-col w-full sm:w-fit sm:flex-row gap-12 items-center justify-center">
      <Flip3DButton
        href="/contact"
        frontLabel={
          <>
            Start Your Project
            <SafeIcon name="ArrowRight" className="ml-2 h-5 w-5" />
          </>
        }
        hoverLabel={
          <>
            Let’s Go
            <SafeIcon name="ArrowRight" className="ml-2 h-5 w-5" />
          </>
        }
        frontClasses="bg-accent-600 text-white"
        hoverClasses="bg-accent-400 text-white"
      />

      <Flip3DButton
        href="/about"
        frontLabel="Who Are We?"
        hoverLabel="Explore"
        frontClasses="bg-white text-accent-600"
        hoverClasses="bg-accent-400 text-white"
        reverse={true}
      />
    </div>
  );
}
