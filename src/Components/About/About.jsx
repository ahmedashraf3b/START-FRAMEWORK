import React from "react";

export default function About() {
  return (
    <>
      <div className="h-[70vh] flex justify-center items-center mt-14 pb-14 bg-[#1abc9c]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-center text-white pt-4">
            <h2 className="text-5xl font-extrabold mb-7">about component</h2>
            <div className="flex items-center justify-center translate-x-[-4.5%] rotate-x-[-50%] ms-24 mb-3">
              <div className=" h-[4px] w-[80px] me-3 bg-white"></div>
              <i className="fa-solid fa-star"></i>
              <div className=" h-[4px] w-[80px] ms-3 bg-white"></div>
            </div>
            <div className="flex justify-center mx-auto gap-7">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes <br /> the complete source files including HTML,
                  CSS, and JavaScript as well as optional <br /> SASS stylesheets for
                  <span className=" me-72">easy customization.</span>
                </p>
              </div>
              <div>
              <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes <br /> the complete source files including HTML,
                  CSS, and JavaScript as well as optional <br /> SASS stylesheets for
                  <span className=" me-72">easy customization.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
