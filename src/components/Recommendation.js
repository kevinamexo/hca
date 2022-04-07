import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Recommendation = ({ title, summary, image }) => {
  return (
    <Link to="/article">
      <div className="cursor-pointer w-[230px] mx-2 h-[350px] rounded-2xl max-h[420px]">
        <img
          className="rounded-xl h-[110px] w-[100%] object-cover"
          src={image}
          alt="clean"
        />
        <p className=" mx-1 text-[16px] mt-4 pr-1.5 font-bold text-blue-900">
          {title}
        </p>
        <p className=" mx-1 mt-2 text-sm leading-5 h-[44px] text-slate-600 text-ellipsis overflow-hidden ...">
          {summary}
        </p>
        <div className="flex items-center justify-between">
          <p className=" mt-1 ml-1  py-1   text-violet-800 text-sm font-semibold hover:bg-blue-100">
            Read Article
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Recommendation;
