import Image from "next/image";
import { unbounded } from "@/lib/fonts";
import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/PojectCard";

import project from "@/utils/project.json";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="h-screen flex items-center justify-center">
        <h1
          className={`text-4xl lg:text-[6rem] p-4 cursor-default text-center ${unbounded.className}`}
        >
          I'm a Full-stack Developer & Software Engineer
        </h1>
      </main>
      <section className="about"></section>
      <section className="project px-4 py-16 relative flex flex-col items-center">
        {/* <h1 className="heading p-2 -top-8 absolute bg-cyan-400 min-w-1/2 text-6xl font-bold text-center -rotate-2">Projects Section</h1> */}
        <div className="project-card-container flex flex-col gap-y-24 sm:p-32">
          {project.map((project, index) => (
            <ProjectCard data={project} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
