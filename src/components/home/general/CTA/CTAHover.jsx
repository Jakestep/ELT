import React from "react";
import Flip3DButton from "../Flip3DButton";
import SafeIcon from "@/common/SafeIcon";
Flip3DButton;
const CTAHover = () => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-12 sm:w-fit sm:flex-row`}
    >
      <Flip3DButton
        href="/get-started"
        frontLabel={
          <>
            Count me in
            <SafeIcon name="ArrowRight" className="ml-2 h-5 w-5" />
          </>
        }
        hoverLabel={
          <>
            Let's dance
            <SafeIcon name="ArrowRight" className="ml-2 h-5 w-5" />
          </>
        }
        frontClasses="bg-accent-600 text-white"
        hoverClasses="bg-accent-400 text-white"
      />
      <Flip3DButton
        href="https://google.com"
        frontLabel="I like broken software"
        hoverLabel="Wasting time is fun"
        target="_blank"
        frontClasses="bg-background text-accent-600"
        hoverClasses="bg-accent-400 text-white"
        reverse={true}
      />
    </div>
  );
};

export default CTAHover;
