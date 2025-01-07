import React from "react";
import ahmed from "../../assets/imges1.svg";

export default function Home() {
  return (
    <>
      <div className="h-[70vh] flex justify-center items-center mt-24 bg-[#1abc9c] pb-14">
        <div className="w-full flex justify-center items-center flex-col">
          <img src={ahmed} alt="" className="w-56" />
          <div className="text-center text-white pt-4">
            <h2 className="text-5xl font-extrabold mb-7">start Framework</h2>
            <div className="flex items-center justify-content-center ms-24 mb-3">
              <div className=" h-[4px] w-[80px] me-3 bg-white" ></div>
              <i className="fa-solid fa-star"></i>
              <div className=" h-[4px] w-[80px] ms-3 bg-white" ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
