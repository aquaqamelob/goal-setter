import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      password,
    };

    dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[90vh]">
      <div className="p-6 mt-1 w-96 bg-black rounded-xl border shadow-sm border-stone-500">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-3xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#39a4ff] decoration-2 hover:cursor-pointer font-medium">
                  Sign in here
                </span>
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <label className="block mt-4 text-sm font-medium text-white">
            {" "}
            Name{" "}
          </label>
          <div className="mt-1">
            <input
              type={"text"}
              className="block px-5 py-3 w-full text-base rounded-lg border border-transparent transition duration-500 ease-in-out transform text-neutral-300 bg-neutral-900 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-500"
              autoComplete="off"
              value={name}
              name="name"
              onChange={onChange}
            />
          </div>
          <label className="block mt-4 text-sm font-medium text-white">
            {" "}
            Password{" "}
          </label>
          <div className="mt-1">
            <input
              type={"password"}
              className="block px-5 py-3 w-full text-base rounded-lg border border-transparent transition duration-500 ease-in-out transform text-neutral-300 bg-neutral-900 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-500"
              value={password}
              onChange={onChange}
              name="password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#006eff] text-white active:scale-95 transition-all text-sm dark:focus:ring-offset-gray-800 mt-8"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
