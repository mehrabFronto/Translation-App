import React from "react";
import { capitalizeAndSeparateCamelCase } from "../utils/camelCaseUtils";

const TextField = ({
  register,
  name,
  type = "text",
  validationSchema,
  errors,
  required = false,
}) => {
  return (
    <div className="relative w-full">
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        className={`peer textField ${
          errors && errors[name] ? "textField--error" : "textField--normal"
        } placeholder-transparent`}
        placeholder=" "
        autoComplete="off"
        dir="auto"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-3 text-sm ${
          errors && errors[name] ? "text-red-500" : "text-gray-400"
        } transition-all duration-300 ease-in-out
        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base -translate-y-[22px]
        peer-focus:-translate-y-[22px] peer-focus:text-sm
        bg-white px-1 pointer-events-none`}
      >
        {capitalizeAndSeparateCamelCase(name)} {required && "*"}
      </label>

      {errors && errors[name] && (
        <span className="block text-sm mt-1.5">
          {String(errors[name]?.message)}
        </span>
      )}
    </div>
  );
};

export default TextField;
