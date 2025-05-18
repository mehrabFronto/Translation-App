import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useWords } from "../../contexts/WordsContext";
import TextField from "../TextField";

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

export default AddKeywordFrom;
