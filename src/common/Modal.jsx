"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children, invasive = true }) => {

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  if (!invasive) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[999]"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <button onClick={onClose} className="absolute inset-0 z-[1000]" />
          <motion.div
            layout
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-2 md:top-1 md:right-4 text-2xl text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              &times;
            </button>
            {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
            <div className="px-2 md:px-3">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button className={`fixed inset-0 bg-black/40`} onClick={onClose} />
      <div className="animate-fadeIn relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          &times;
        </button>
        {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
        <div className={`px-3`} >{children}</div>
      </div>
    </div>
  );
};

export default Modal;
