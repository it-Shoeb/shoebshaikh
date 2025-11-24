"use client";
import Image from "next/image";
import React from "react";

import { invy } from "../lib/image";
import Link from "next/link";
import { stringify } from "querystring";

import image from "@/public/project-images/invy.png";

type ObjectProps = {
  name: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceCode: string;
};

// import image from ''

const PojectCard = ({ data }: { data: ObjectProps }) => {
  return (
    <>
      <div className="flex flex-col gap-2 relative">
        <Link
          href={data.liveUrl}
          target="_blank"
          className="group peer project-card w-full relative cursor-pointer rounded-2xl overflow-hidden hover:rounded-none transition-all ease-in-out duration-700"
        >
          <Image
            src={data.image}
            alt=""
            className="w-full h-full object-cover"
            width={900}
            height={900}
          />

          {/* <img src={data.image} alt="" /> */}
          <div className="overlay absolute bg-black w-full h-full top-0 left-0 opacity-50 transition-all ease-in-out duration-700 group-hover:-top-300 group-hover:scale-200"></div>

          <div className="project-card-content absolute top-0 left-0 text-justify flex flex-col items-center justify-center h-full sm:p-24 p-4 gap-4 transition-all ease-in-out duration-700 group-hover:-top-200 group-hover:scale-200 w-full">
            <h1 className="font-bold sm:text-4xl text-2xl">{data.name}</h1>
            <p className="sm:text-2xl text-sm">{data.description}</p>
          </div>
        </Link>

        <Link
          href={data.sourceCode}
          className="border transition-all ease-out absolute -bottom-10 w-full peer-hover:bottom-50 peer-hover:-z-50 z-50 text-center bg-white text-cyan-500 rounded-md font-bold cursor-pointer sm:p-2 sm:text-2xl"
          target="_blank"
        >
          Source Code
        </Link>
      </div>
    </>
  );
};

export default PojectCard;
