"use client";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="flex items-center gap-2 transition ease-in-out border-2 bg-black border-fuchsia-500 rounded-md p-2 hover:text-fuchsia-500 hover:ease-linear"
      >
        <p>Open Modal </p>
        <Plus className="h-5 animate-pulse" />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center ml-[160px] md:ml-[190px] lg:ml-[320px]">
          <div className="modal-overlay fixed inset-0 bg-slate-500 opacity-50"></div>
          <div className="modal-container bg-black w-11/12 md:max-w-md mx-auto shadow-lg z-50 overflow-y-auto border-2 border-fuchsia-500 rounded-md">
            <div className="modal-content py-4 text-left px-6 ">
              <div className="flex justify-between items-center">
                <p className="text-white underline decoration-fuchsia-500">
                  What were you hiding?
                </p>
                <button
                  onClick={closeModal}
                  className="transition ease-in-out border-2 bg-black border-fuchsia-500 rounded-md p-2 hover:text-fuchsia-500 hover:ease-linear"
                >
                  <X className="h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
