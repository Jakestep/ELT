// components/home/HeroSection.jsx
"use client";
import { motion } from "motion/react";
import RippleBackground from "@/common/PondRipple";
import Flip3DButton from "../home/general/Flip3DButton";
import SafeIcon from "@/common/SafeIcon";
import Modal from "@/common/Modal";
import { useEffect, useState } from "react";

const HeroSection = () => {

  const [noteOpen, setNoteOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage?.getItem("not-new")) {
        setNoteOpen(true)
        localStorage.setItem('not-new', true)
      }
    }, 1000);
  }, [])

  return (
    // Mobile: natural height; md+: clamp the hero height
    <div className="relative">
      <RippleBackground>
        
        <Modal
          invasive={false}
          isOpen={noteOpen}
          onClose={() => setNoteOpen(false)}
        ><div className="text-nowrap">Go ahead, <i className={`text-lg`} ><span className={` pointer-coarse:hidden inline-block`} >click</span><span className={`pointer-coarse:inline-block hidden`} >tap</span> the water</i> <span className="ml-2 text-lg">:D</span></div>
        </Modal>
        <section
          className={[
            "relative w-full",
            // let mobile expand with content (svh accounts for browser UI)
            "min-h-[60svh]",
            // on md+ give it a taller stage but still allow wrap
            "md:min-h-[70vh] lg:min-h-[75vh]",
            // layout: center the stack with flex (no absolute top/left)
            "flex items-center",
          ].join(" ")}
        >
          {/* soft overlay for contrast */}
          <div className="pointer-events-none absolute inset-0 bg-black/10 md:bg-black/5" />

          {/* content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-900 drop-shadow-sm md:text-6xl"
              >
                Tech Terrors Giving You The Cold Sweats?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mx-auto mt-4 max-w-3xl text-xl text-gray-800 md:text-gray-700"
              >
                It doesn't have to be this way.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mx-auto mt-8 flex w-fit flex-wrap items-center justify-center gap-2"
              >
                <Flip3DButton
                  href="/about"
                  frontLabel={"I don't trust you"}
                  hoverLabel={"About Us"}
                  frontClasses=" bg-linear-to-br sm:bg-linear-to-l from-accent-400 to-accent-700 text-white"
                  hoverClasses=" bg-linear-to-r from-accent-400 to-accent-700 text-white"
                />
                <Flip3DButton
                  className=""
                  reverse
                  href="/scorecard"
                  frontLabel={"My website is fine"}
                  hoverLabel={"Free scorecard ->"}
                  mobileLabel={<span className={`flex bg-linear-to-tr items-center gap-2`} >Free Scorecard <SafeIcon name={'ArrowRight'}/></span>}
                  frontClasses="bg-linear-to-r sm:bg-linear-to-r from-accent-400 to-accent-700 text-accent-100"
                  hoverClasses="bg-linear-to-r from-accent-700 to-accent-400 text-white"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </RippleBackground>
    </div>
  );
};

export default HeroSection;
