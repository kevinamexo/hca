import React from "react";
import ArticleCard from "../components/ArticleCard";
import Recommendation from "../components/Recommendation";
import SidebarArticle from "../components/SidebarArticle";
import Carousel from "react-multi-carousel";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const reccomendations = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Home = () => {
  return (
    <>
      <div className="bg-neutral-50 home-bg">
        <div className="w-full max-w-6xl mx-auto h-[550px]  px-8 ">
          <div className="w-2xl">
            <p className="  text-6xl font-semibold w-2xl pt-[10%] w-[60%] text-slate-50 leading-[80px]">
              Time to Learn more about health
            </p>
            <p className="w-[70%] mt-[20px] mr-[5px] text-slate-600 font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis nisi distinctio accusamus ipsam veniam! Ullam vitae
              incidunt error accusantium! Culpa similique dolorum molestias
              explicabo nemo. Ratione ex rerum error exercitationem?
            </p>
            <Link to="signup">
              <button className="mt-10 flex justify-between items-center bg-emerald-500 px-[12px] py-2 rounded-2xl text-neutral-50">
                Click here to Register
                <MdLogin className="text-[20px]" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] py-[40px] h-[00px] flex flex-col justify-center">
        <header className="flex justify-between px-8  w-full max-w-6xl mx-auto">
          <p className="text-3xl font-semibold text-blue-900">Featured Posts</p>
          <p className="text-center w-[30%] text-blue-900 font-semibold">
            Other articles
          </p>
        </header>
        <div className=" w-full max-w-6xl mx-auto h-[550px] flex align-start px-8 ">
          {/* BLOG CARD COMPONENT */}

          <div className=" w-[65%]  gap-9 mt-[40px]">
            <Carousel responsive={responsive} autoPlay={false}>
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
            qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
            fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
            similique!"
                image="images/clean.webp"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
          fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
          similique!"
                image="images/voc.jpg"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
            qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
            fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
            similique!"
                image="images/clean.webp"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
          fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
          similique!"
                image="images/voc.jpg"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
            qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
            fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
            similique!"
                image="images/clean.webp"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
          fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
          similique!"
                image="images/voc.jpg"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
            qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
            fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
            similique!"
                image="images/clean.webp"
              />
              <ArticleCard
                title=" Time to Get Your House Clean and In Order"
                summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
          fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
          similique!"
                image="images/voc.jpg"
              />
            </Carousel>
          </div>
          <div className="w-[30%] ml-10 container mx-auto mt-[40px] h-[420px] flex flex-col justify-between items-center">
            <SidebarArticle
              title="The Benefits of Using  UV-C Light in the Hospitality Industry"
              summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora"
              time="2 minutes"
            />
            <SidebarArticle
              title="What is UV-C Light"
              summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora"
              time="6 minutes"
            />
            {/* <div className=" mt-[30px] px-5 container mx-left">
          <button className="rounded-xl text-violet-700 px-2 py-1 border border-violet-500 font-semibold">
            See all articles
          </button>
        </div> */}
          </div>
        </div>
        <div className="mt-6 px-8 w-full max-w-6xl mx-auto h-[550px] ">
          <p className="pb-8 text-2xl text-blue-900 font-semibold">
            We think you might like these
          </p>
          <Carousel responsive={reccomendations} autoPlay={false}>
            <Recommendation
              title=" Time to Get Your House Clean and In Order"
              summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
            qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
            fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
            similique!"
              image="images/clean.webp"
            />
            <Recommendation
              title=" Time to Get Your House Clean and In Order"
              summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
          fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
          similique!"
              image="images/voc.jpg"
            />
            <Recommendation
              title=" Time to Get Your House Clean and In Order"
              summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
            qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
            fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
            similique!"
              image="images/clean.webp"
            />
            <Recommendation
              title=" Time to Get Your House Clean and In Order"
              summary="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime
          qui tempore tenetur assumenda quisquam deserunt temporibus iste tempora
          fugit, veritatis soluta iusto quia vitae. Explicabo laborum modi natus
          similique!"
              image="images/voc.jpg"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
