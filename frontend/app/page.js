import Card from "@/components/Card";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="wrapper h-max">
        <div className="container">
          <div className=" w-full md:w-screen hero_section bg-white items-center justify-center">
            <h1 className=" text-7xl text-gray-800 text-center bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent h-full flex flex-col items-center justify-center">
              Education that Empowers.
              <span className="block mt-2">Skills that Transform.</span>
            </h1>
          </div>

          <div className="services">
            <h1 className=" p-12 text-2xl font-bold text-center text-slate-700">
              We Provide Courses, Projects
            </h1>
            <div className="courses">
              <div className="cards w-screen flex justify-center items-center gap-7 p-4 pb-16  ">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
