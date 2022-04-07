import React, { useState } from "react";

const Article = ({ title }) => {
  const [comment, setComment] = useState("");
  return (
    <div className=" w-[100%] bg-neutral-50 pb-[70px]">
      <div className="w-full max-w-6xl h-[550px]  container mx-auto  px-8 pt-20">
        <p className=" container mx-auto text-6xl max-w-[700px] text-[#111b42] text-center font-bold">
          Time to Get Your House Clean and In Order
        </p>
        <p className="text-center mt-5 text-xl text-neutral-700 font-medium">
          Read it in 5 minutes
        </p>
        <p className="text-center mt-6 text-2xl text-neutral-600  leading-[40px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste
          tempora fugit, veritatis soluta iusto quia vitae. Explicabo laborum
          modi natus similique
        </p>
        <img className="mt-16 rounded-2xl" src="images/clean.webp" />

        <p className="mt-12 px-[5%] text-2xl leading-10">
          Proident aliqua sit ipsum sint nulla anim nostrud sunt esse voluptate.
          Ipsum officia in commodo irure. Dolor commodo non laboris do fugiat
          exercitation. Sint deserunt dolor labore ad quis commodo non aliquip
          Lorem cupidatat esse sint fugiat. Nostrud nostrud consequat mollit est
          eiusmod sit laboris. Ut excepteur veniam aliquip ipsum reprehenderit
          labore ea nulla proident laborum magna magna tempor officia. Duis
          magna laboris exercitation esse adipisicing. Ea do ullamco incididunt
          ad deserunt deserunt qui labore exercitation pariatur duis nulla.
          Ipsum pariatur magna ad aliqua sunt nostrud deserunt non aliquip amet
          qui adipisicing occaecat reprehenderit. Eiusmod nisi reprehenderit ad
          voluptate officia. In nulla laboris labore culpa est dolor officia
          occaecat. Dolor aute anim consequat esse labore ex ad nostrud laboris
          eu cupidatat culpa consectetur. Aliquip minim exercitation est ut.
          Mollit est ad occaecat et sint occaecat excepteur ut incididunt enim
          elit amet enim consectetur. Lorem consequat irure non cupidatat.
          Cillum id officia esse do cillum ipsum aliqua exercitation esse.
          Eiusmod quis nisi fugiat duis ad fugiat pariatur ullamco duis enim ad
          mollit deserunt deserunt. Eiusmod eiusmod dolor aliquip et commodo
          consequat occaecat enim commodo commodo voluptate elit. Cillum officia
          aliqua minim sunt culpa consequat ea laboris id incididunt voluptate
          excepteur. Ad sunt irure nostrud sunt. Qui incididunt aliquip sint non
          in nostrud nisi dolore dolore aute non.
        </p>

        <div className="flex items-center">
          <p className="px-[10%]  text-left mt-6 text-2xl text-neutral-600  leading-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maxime qui tempore tenetur assumenda quisquam deserunt temporibus
            iste tempora fugit, veritatis soluta iusto quia vitae. Explicabo
            laborum modi natus similique
          </p>
          <img src="images/clean.webp" className="w-[30%]" />
        </div>
        <p className="mt-12 px-[5%] text-2xl leading-10">
          Proident aliqua sit ipsum sint nulla anim nostrud sunt esse voluptate.
          Ipsum officia in commodo irure. Dolor commodo non laboris do fugiat
          exercitation. Sint deserunt dolor labore ad quis commodo non aliquip
          Lorem cupidatat esse sint fugiat. Nostrud nostrud consequat mollit est
          eiusmod sit laboris. Ut excepteur veniam aliquip ipsum reprehenderit
          labore ea nulla proident laborum magna magna tempor officia. Duis
          magna laboris exercitation esse adipisicing. Ea do ullamco incididunt
          ad deserunt deserunt qui labore exercitation pariatur duis nulla.
          Ipsum pariatur magna ad aliqua sunt nostrud deserunt non aliquip amet
          qui adipisicing occaecat reprehenderit. Eiusmod nisi reprehenderit ad
          voluptate officia. In nulla laboris labore culpa est dolor officia
          occaecat. Dolor aute anim consequat esse labore ex ad nostrud laboris
          eu cupidatat culpa consectetur. Aliquip minim exercitation est ut.
          Mollit est ad occaecat et sint occaecat excepteur ut incididunt enim
          elit amet enim consectetur. Lorem consequat irure non cupidatat.
          Cillum id officia esse do cillum ipsum aliqua exercitation esse.
          Eiusmod quis nisi fugiat duis ad fugiat pariatur ullamco duis enim ad
          mollit deserunt deserunt. Eiusmod eiusmod dolor aliquip et commodo
          consequat occaecat enim commodo commodo voluptate elit. Cillum officia
          aliqua minim sunt culpa consequat ea laboris id incididunt voluptate
          excepteur. Ad sunt irure nostrud sunt. Qui incididunt aliquip sint non
          in nostrud nisi dolore dolore aute non.
        </p>
        <div className="h-[200px] mt-20">
          <p className="text-4xl font-semibold text-blue-900">Comments</p>

          <input
            className="border-2 text-black border-neutral-300  rounded-xl px-5 py-2 mt-10 w-full "
            type="text"
            value={comment}
            placeholder="What are your thoughts?"
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="mt-5">
            <p className="text-xl">
              {" "}
              This post hast no comments. Let us know what you think
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
