import React from "react";

const SidebarArticle = ({ title, summary, time }) => {
  return (
    <div className="w-[100%]">
      <p className=" px-5 text-left text-lg font-semibold text-blue-900 ">
        {title}
      </p>
      <p className=" pl-5 mt-2 text-sm leading-6 text-neutral-500">{summary}</p>
      <button className=" ml-5  py-1 mt-3 text-violet-600 font-semibold underline hover:bg-violet-100 ">
        Read in {time}
      </button>
    </div>
  );
};

export default SidebarArticle;
