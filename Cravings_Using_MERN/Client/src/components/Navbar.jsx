import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-(--color-primary) text-(--text-light) flex justify-between top-0 z-50 sticky px-5 ">
        <div className="h-16 w-40">
          <Link to="/">
            <img src="craving-logo.png" alt="" className="h-full" />
          </Link>
        </div>
        <div className=" flex gap-4 h-1/2 font-medium m-4">
          <Link
            to="/contact-us"
            className="text-(--color-primary-content) p-1 hover:border"
          >
            Contact-Us
          </Link>

          <Link
            to="/login"
            className="text-(--color-primary-content) p-1 hover:border"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-(--color-primary) bg-(--color-primary-content) p-1 rounded "
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
