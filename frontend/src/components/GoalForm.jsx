import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <p className="p-1">Goal</p>
      <input
        type={"text"}
        class="block px-5 py-3 text-base text-neutral-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-neutral-900 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-500 w-96"
        value={text}
        name="name"
        onChange={(e) => setText(e.target.value)}
        autocomplete="off"
      />
      <button
        type="submit"
        class="w-full py-3 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#006eff] text-white active:scale-95 transition-all text-sm dark:focus:ring-offset-gray-800 mt-8"
      >
        Add goal
      </button>
    </form>
  );
};

export default GoalForm;
