import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useWords } from "../contexts/WordsContext";
import Modal from "../components/Modal";
import { useForm } from "react-hook-form";
import TextField from "../components/TextField";
import toast from "react-hot-toast";

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

const WordsList = () => {
  const { words, handleEditKeyword } = useWords();
  const { selectedLanguage } = useLanguage();

  const fieldName =
    selectedLanguage.type === "english" ? "englishLabel" : "persianLabel";

  const isEmpty = (value) => value.trim() === "";

  return (
    <div className="px-2 max-h-[195px] overflow-auto">
      {words &&
        words.map(({ persianLabel, englishLabel }, index) => {
          const value =
            selectedLanguage.type === "persian" ? persianLabel : englishLabel;

          const hasError = isEmpty(value);

          return (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0 px-3 py-4 rounded-md flex items-center justify-between gap-4"
            >
              <p className={`font-medium ${hasError ? "text-red-500" : ""}`}>
                {selectedLanguage.type === "persian"
                  ? englishLabel
                  : persianLabel}
              </p>

              <input
                type="text"
                value={value}
                onChange={(e) =>
                  handleEditKeyword(index, fieldName, e.target.value)
                }
                className={`outline-none rounded-md px-2 py-1 text-center w-1/3 ${
                  hasError ? "bg-red-100 border border-red-500" : "bg-gray-200"
                }`}
                placeholder=". . . . ."
              />
            </div>
          );
        })}
    </div>
  );
};

const AddKeywordFrom = ({ handleCloseModal }) => {
  const { handleAddKeyword } = useWords();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    handleAddKeyword(data);
    toast.success("Keyword Added Successfully!", { position: "bottom-center" });
    console.log(data);
    reset();
    handleCloseModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pb-6 flex flex-col gap-y-6 items-end"
    >
      <TextField
        register={register}
        name={"persianLabel"}
        validationSchema={{
          required: "Persian Label is Required",
        }}
        errors={errors}
        required
      />
      <TextField
        register={register}
        name={"englishLabel"}
        validationSchema={{
          required: "English Label is Required",
        }}
        errors={errors}
        required
      />

      <div className="flex items-center gap-x-4">
        <button
          type="button"
          onClick={() => {
            reset();
            handleCloseModal();
          }}
          className="cursor-pointer border border-blue-500 text-blue-500 px-6 py-2 rounded-md"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="cursor-pointer bg-blue-500 text-white px-9 py-2 rounded-md border border-blue-500"
        >
          Add
        </button>
      </div>
    </form>
  );
};
