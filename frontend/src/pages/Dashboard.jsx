import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoalItem from "../components/GoalItem";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals } from "../features/goals/goalSlice";
import { reset } from "../features/goals/goalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    } else {
      dispatch(getGoals());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center w-[100vw] h-[90vh] text-white">
      <span className="m-4 text-5xl">Welcome {user && user.name}</span>
      <span className="m-4 text-3xl">Goals Dashboard</span>
      <GoalForm></GoalForm>

      {goals.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 mt-4 overflow-y-scroll">
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <span className="m-32 text-3xl">You have not set any goals</span>
      )}
    </div>
  );
};

export default Dashboard;
