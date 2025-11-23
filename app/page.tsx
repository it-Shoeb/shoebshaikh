import Image from "next/image";
import { unbounded } from "@/lib/fonts";
import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/PojectCard";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="h-screen border flex items-center justify-center">
        <h1
          className={`text-4xl lg:text-[6rem] p-4 cursor-default text-center ${unbounded.className}`}
        >
          I'm a Full-stack Developer & Software Engineer
        </h1>
      </main>
      <section className="about"></section>
      <section className="project px-4 py-16">
        <h1>Projects Section</h1>
        <div className="project-card-container grid sm:grid-cols-2 gap-8 p-4">
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
