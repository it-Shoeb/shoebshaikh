import Image from "next/image";
import React from "react";

import { invy } from "../lib/image";
import Link from "next/link";

const PojectCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 relative">
        <Link
          href={"https://invy-iywg.onrender.com/"}
          target="_blank"
          className="group peer project-card w-full relative cursor-pointer rounded-2xl overflow-hidden hover:rounded-none transition-all ease-in-out duration-700"
        >
          <Image src={invy} alt="" className="" />
          <div className="overlay absolute bg-black w-full h-full top-0 left-0 opacity-50 transition-all ease-in-out duration-700 group-hover:-top-200 group-hover:scale-200"></div>
          <div className="project-card-content absolute top-0 left-0 text-justify flex flex-col items-center justify-center h-full p-4 gap-4 transition-all ease-in-out duration-700 group-hover:-top-200 group-hover:scale-200">
            <h1 className="font-bold text-2xl">Invy</h1>
            <p className="sm:text-sm text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              eligendi facilis est enim, reprehenderit eaque sequi asperiores
              animi ad tempora dolore repellendus dolorum ducimus vel debitis,
              aliquid hic fugiat nemo.
            </p>
          </div>
        </Link>

        <Link
          href={"https://github.com/it-Shoeb/Wholesaler_Saas"}
          className="border transition-all ease-out absolute -bottom-10 w-full peer-hover:bottom-50 peer-hover:-z-50 z-50 text-center bg-gray-300 text-black rounded-full font-bold cursor-pointer"
          target="_blank"
        >
          Source Code
        </Link>
      </div>
    </>
  );
};

export default PojectCard;
