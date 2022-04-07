import React from "react";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" z-20 fixed top-0 left-0 right-0 h-[80px] bg-slate-700 shadow-lg flex items-center">
      <div className=" w-full max-w-6xl mx-auto px-8 flex items-center justify-between flex  text-slate-200">
        <h3 className="font-bold">PROJECT NAME </h3>
        <ul className="flex items-center justify-between flex w-6/12">
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">About</li>
          <li className="font-semibold">Articles</li>
          <li className="font-semibold">
            <Link to="/signup">
              <button className="flex bg-[#fff] items-center justify-between py-1.5 px-4   text-slate-800 rounded-2xl hover:bg-emerald-500 hover:text-neutral-50">
                Sign in
                <MdLogin />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
