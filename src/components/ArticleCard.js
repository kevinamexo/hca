import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const ArticleCard = ({ title, image, summary }) => {
  return (
    <div className="cursor-pointer mx-2 h-[420px] rounded-2xl max-h[420px] hover:bg-neutral-100">
      <img
        className="rounded-xl h-[195px] w-[100%] object-cover"
        src={image}
        alt="clean"
      />
      <p className=" mx-1 text-[22px] mt-4 pr-1.5 font-bold text-blue-900">
        {title}
      </p>
      <p className=" mx-1 mt-2 text-sm leading-5 h-[44px] text-slate-600 text-ellipsis overflow-hidden ...">
        {summary}
      </p>
      <div className="flex items-center justify-between">
        <button className="mx-1 mt-4 px-2 py-1 border-2 border-blue-800 rounded-lg text-blue-800 text-sm font-semibold hover:bg-blue-100">
          Read Article
        </button>
        <AiOutlineUser className="mr-2 mt-4 text-[30px] border-2 border-slate-600 rounded-2xl hover:bg-slate-200" />
      </div>
    </div>
  );
};

export default ArticleCard;
