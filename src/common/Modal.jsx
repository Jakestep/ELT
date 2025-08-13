"use client";

import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
