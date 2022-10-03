import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between border shadow-sm rounded-xl border-stone-500 bg-black h-40 w-50">
      <div className="text-white flex justify-end p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => dispatch(deleteGoal(goal._id))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="py-3 px-4 h-20">
        <p className="text-white font-bold text-xl">{goal.text}</p>
      </div>
      <div className="border-stone-500 bg-black border-t rounded-b-xl py-3 px-4">
        <p className="mt-1 text-sm text-white">
          {new Date(goal.createdAt).toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
};

export default GoalItem;
