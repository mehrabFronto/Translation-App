import React from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Modal = ({ title, handleCloseModal, children }) => {
  const modalRef = useOutsideClick(handleCloseModal, "mousedown");

  return (
    <div className="fixed w-full h-full top-0 left-0 backdrop-blur-md flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="w-full max-w-screen-sm bg-white rounded-lg border border-gray-300 overflow-hidden space-y-8"
      >
        <div className="flex items-center justify-between pl-6">
          <p className="text-lg">{title}</p>

          <button className="p-6 cursor-pointer" onClick={handleCloseModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 h-5"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
