import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const { pathname } = useLocation();
  const links = [
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Register",
      href: "/register",
    },
  ];

  return (
    <header className="flex z-50 bg-transparent text-sm py-4 w-[100vw]">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex justify-between"
        aria-label="Global"
      >
        
          <span className="flex-none text-xl font-semibold text-white">
            GoalSetter
          </span>
       
        <div className="flex gap-5 items-center mt-0">
          {user ? (
            <span
              className="font-medium text-gray-400 hover:text-gray cursor-pointer"
              onClick={onLogout}
            >
              Logout
            </span>
          ) : (
            links.map((item) => {
              return (
                <Link to={item.href} key={item.href}>
                  <span
                    className={
                      item.href === pathname
                        ? "font-medium text-[#39a4ff]"
                        : "font-medium text-gray-400 hover:text-gray"
                    }
                  >
                    {item.title}
                  </span>
                </Link>
              );
            })
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
