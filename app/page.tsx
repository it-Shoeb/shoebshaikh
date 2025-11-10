import Image from "next/image";
import SocialLinks from "../components/SocialLinks";
import { unbounded } from "@/lib/fonts";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="sm:h-screen">
        <h1
          className={`sm:text-[7rem] text-7xl p-8 text-center ${unbounded.className}`}
        >
          I'm a Full-stack Developer & Software Engineer
        </h1>
      </main>
      <section className="about"></section>
      <section className="project">
        <h1>Projects Section</h1>
      </section>

      <footer className="relative w-full pr-16 flex gap-4 flex-col">
        <div className="contact sm:flex items-center justify-between gap-8">
          <div className="contact-lhs p-4 w-full">
            <h1 className={`${unbounded.className} text-4xl`}>
              Got a problem to solve?
            </h1>
            <p>
              Get your space suit ready and tell us your ideas to develop your
              dream web solution.
            </p>
          </div>

          <form
            action=""
            className="contact-rhs p-4 flex flex-col gap-8 w-full"
          >
            <input
              className="focus:outline-none border-b py-2"
              type="text"
              name=""
              placeholder="Enter Your Name"
              id=""
            />
            <input
              className="focus:outline-none border-b py-2"
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email Address"
            />

            <textarea
              name=""
              id=""
              className="focus:outline-none border-b py-2"
              placeholder="what you want"
            ></textarea>
            <input
              className="focus:outline-none border py-2 rounded-full transition-all hover:-translate-y-1 duration-300 ease-linear cursor-pointer"
              type="submit"
              value="Let's Connect"
            />
          </form>
        </div>

        <hr />

        <div className="flex justify-between items-center pb-16">
          <div className="logo">logo</div>
          <p className="termandconsdition">Shoeb Shaikh 2025 | @ All Right Reserved</p>

        </div>

        <SocialLinks />
      </footer>
    </>
  );
}
