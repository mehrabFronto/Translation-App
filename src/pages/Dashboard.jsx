import React, { useState } from "react";
import Modal from "../components/Modal";
import WordsList from "../components/dashboard/WordsList";
import AddKeywordFrom from "../components/dashboard/AddKeywordFrom";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <WordsList />

      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute -bottom-20 left-0 bg-blue-500 text-white w-full rounded-lg py-3 font-medium text-lg flex items-center justify-center gap-x-2 cursor-pointer shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4"
        >
          <path
            fill="white"
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
          />
        </svg>
        Add Keyword
      </button>

      {isModalOpen && (
        <Modal
          title="Add Keyword"
          handleCloseModal={() => setIsModalOpen(false)}
        >
          <AddKeywordFrom handleCloseModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
